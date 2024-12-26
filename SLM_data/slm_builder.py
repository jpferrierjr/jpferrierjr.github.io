'''

    Before you say anything, I know that people don't like that I align the equals signs.
    I do it because it makes it easier for me to read.

'''
import os
import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader

# Hyperparameters
embedding_dim   = 128
hidden_dim      = 256
num_epochs      = 10
batch_size      = 32
sequence_length = 30
learning_rate   = 0.001

# I use this just to be able to find the training text and save the models
curr_dir        = os.path.dirname(os.path.realpath(__file__))

# Device configuration
device          = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Load and preprocess data
def load_data(file_path):
  """
    Loads text data from a file and preprocesses it.

    Args:
        file_path: Path to the text file.

    Returns:
        A list of words and a vocabulary dictionary.
  """

  with open(file_path, 'r') as f:
    text = f.read()

  # Tokenize the text
  words         = text.split()

  # Create vocabulary
  vocab         = sorted( set( words ) )
  word_to_idx   = { word: idx for idx, word in enumerate( vocab ) }     # Associates a word to an index
  idx_to_word   = { idx: word for idx, word in enumerate( vocab ) }     # Associates an index to a word

  return words, word_to_idx, idx_to_word

# Custom dataset
class TextDataset(Dataset):
  
  def __init__(self, words, word_to_idx, sequence_length):

    self.words              = words
    self.word_to_idx        = word_to_idx
    self.sequence_length    = sequence_length

  def __len__(self):
    return len( self.words ) - self.sequence_length - 1

  def __getitem__(self, idx):
    input_seq   = [ self.word_to_idx[word] for word in self.words[ idx:idx + self.sequence_length ] ]
    target_idx  = self.word_to_idx[ self.words[ idx + self.sequence_length ] ]
    return torch.tensor( input_seq ), torch.tensor( target_idx )

# Define the language model
class LanguageModel( nn.Module ):
  
  def __init__( self, vocab_size, embedding_dim, hidden_dim ):

    # Initiate nn.Module
    super (LanguageModel, self ).__init__()

    self.embeddings = nn.Embedding( vocab_size, embedding_dim )
    self.lstm       = nn.LSTM( embedding_dim, hidden_dim )
    self.linear     = nn.Linear( hidden_dim, vocab_size )

  def forward( self, input_seq ):

    embeds      = self.embeddings( input_seq )
    #lstm_out, _ = self.lstm( embeds.view( len( input_seq ), 1, -1 ) )
    lstm_out, _ = self.lstm( embeds.view( sequence_length, batch_size, -1 ) )
    #output      = self.linear( lstm_out.view( len( input_seq ), -1 ) )
    output      = self.linear( lstm_out[-1, :, :] )

    return output

if __name__ == "__main__":
  
    # Load data
    file_path                         = os.path.join( curr_dir, 'training_text.txt' )
    words, word_to_idx, idx_to_word   = load_data( file_path )
    vocab_size                        = len( word_to_idx )

    # Create dataset and dataloader
    dataset       = TextDataset( words, word_to_idx, sequence_length )
    dataloader    = DataLoader( dataset, batch_size = batch_size, shuffle = True, drop_last = True )

    # Initialize the model and optimizer
    model         = LanguageModel( vocab_size, embedding_dim, hidden_dim ).to( device )
    optimizer     = torch.optim.Adam( model.parameters(), lr = learning_rate )
    criterion     = nn.CrossEntropyLoss()

    # Train the model
    for epoch in range( num_epochs ):

        for batch_idx, ( input_seq, target_idx ) in enumerate( dataloader ):
        
            input_seq     = input_seq.to( device )
            target_idx    = target_idx.to( device )

            # Forward pass
            outputs       = model( input_seq )
            loss          = criterion( outputs, target_idx )

            # Backward pass and optimization
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()

            # Print out the progress
            if batch_idx % 100 == 0:
                print( f'Epoch [{epoch+1}/{num_epochs}], Step [{batch_idx+1}/{len( dataloader )}], Loss: {loss.item():.4f}')

    print( "Model trained!" )
    # Save the trained model
    torch.save( model.state_dict(), os.path.join( curr_dir, 'johnF_SLM_model.pth' ) )
    print( "Model Saved!" )




    # Test the model
    def test_model( model, prompt, word_to_idx, idx_to_word, num_words = 20 ):
        model.eval()
        with torch.no_grad():
            prompt_splt     = prompt.split()
            if len( prompt_splt ) < sequence_length:
               padding      = [ '<PAD>' ] * ( sequence_length - len( prompt_splt ) )
               prompt_splt += padding

            input_seq       = torch.tensor( [ word_to_idx[ word ] for word in prompt_splt ] )
            #input_seq       = input_seq.to( device )
            input_seq       = input_seq.unsqueeze(1).to(device)
            generated_text  = prompt.split()

            for _ in range( num_words ):
                output              = model( input_seq )
                _, predicted_idx    = torch.max( output[-1], 0 )
                predicted_word      = idx_to_word[ predicted_idx.item() ]
                generated_text.append( predicted_word )
                #input_seq           = torch.cat( ( input_seq[1:], predicted_idx.unsqueeze(0) ) )
                input_seq           = torch.cat( ( input_seq[1:], predicted_idx.unsqueeze(0).unsqueeze(1) ) )

        return ' '.join( generated_text )

    prompt          = "Who is John Ferrier?"
    print( f"Testing the model with the prompt `{prompt}`" )
    generated_text  = test_model( model, prompt, word_to_idx, idx_to_word )
    print(f"Prompt: {prompt}")
    print(f"Generated text: {generated_text}")

    # Convert and save the model in ONNX format
    dummy_input     = torch.randint( 0, vocab_size, (1, sequence_length)).to( device )
    torch.onnx.export( model, dummy_input, os.path.join( curr_dir, "johnF_SLM_model.onnx" ), verbose = True, input_names = ['input_seq'], output_names = ['output'] )
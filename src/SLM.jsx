// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import { pipeline } from '@huggingface/transformers';

function SLMJS() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [generator, setGenerator] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const bottomRef = useRef(null);

  // Load the Hugging Face model
  useEffect(() => {
    const loadModel = async () => {
      try {
        const generator = await pipeline(
          "text-generation",
          "huggingface/gpt2" // Using a smaller model
        );
        setGenerator(generator);
      } catch (error) {
        console.error("Error loading model:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadModel();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    try {
      const botReply = await generateResponse(input);
      setMessages([...messages, { text: input, sender: 'user' }, { text: botReply, sender: 'bot' }]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages([...messages, { text: input, sender: 'user' }, { text: "Sorry, I'm having trouble generating a response right now.", sender: 'bot' }]);
    }
  };

  // Function to generate bot response
  const generateResponse = async (userInput) => {
    const output = await generator(userInput, {
      max_length: 50, 
      num_return_sequences: 1,
    });
    return output[0].generated_text;
  };

  // Scroll to bottom of chat log
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen">
      {/* Chat Header */}
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-lg font-bold">Chatbot</h1>
      </header>

      {/* Chat Messages */}
      <main className="flex-grow p-4 overflow-y-auto">
        {isLoading && (
          <div className="text-center text-gray-500">Loading model...</div>
        )}
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
            <div className={`${msg.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'} p-2 rounded-lg`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </main>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-300">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
          Send
        </button>
      </form>
    </div>
  );
}

export default SLMJS;
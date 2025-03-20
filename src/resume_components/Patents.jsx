import { patents } from "./Publications";

export default function PatentsPage()
{
    const PatentsList = patents.map( pat => {
            
        //Set Title. setInnerHTML used to force <sub> tags
        const Title   = <div className="PatentsTitle font-bold underline"><a href={pat.link} target="_blank" rel="noopener noreferrer">{pat.title}</a></div>;

        return(
            <div key={pat.id} className="w-full py-4 block text-sm md:text-base">
                <div key={pat.id} className="Patents flex">
                    ({pat.id})&nbsp;{Title}
                </div>
            </div>
        );
    });

    return(
        <>
            <div className="text-2xl md:text-3xl">Patents</div>
            <div className="text-pretty">
                {PatentsList}
            </div>
        </>
    );
}
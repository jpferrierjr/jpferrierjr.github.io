import { presentations } from "./Publications";

export default function PresentationsPage()
{
    const PresentationList = presentations.map( pres => {
            
        //Set Title. setInnerHTML used to force <sub> tags
        const Title   = <span className="PresentationTitle font-bold underline"><a href={pres.link} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: pres.title }}></a></span>;

        //Set Meeting
        const Meeting = <><span>Meeting:</span><span className="px-2 italic">{pres.meeting}</span></>;

        return(
            <div key={pres.id} className="w-full py-4 block text-sm md:text-base">
                <div className="PresentationFirstLine flex">
                    ({pres.id})&nbsp;{Title}
                </div>
                <div className="PresentationSecondLine flex px-6 text-sm md:text-base">
                    {Meeting}
                </div>
            </div>
        );
    });
    return(
        <>
            <div className="text-2xl md:text-3xl">Presentations</div>
            <div className="text-pretty">
                {PresentationList}
            </div>
        </>
    );
}
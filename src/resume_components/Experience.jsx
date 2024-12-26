import { skills } from "./Skills";

//Skills and subskills are added for my future automated Resume builder
const experiences = [
    { id:1, company:"Northeastern University - 2D Quantum Materials Laboratory", start:"Jan 2019", end:"Sep 2024", jobtitle:"Graduate Research Assistant",
    projects:
    [
        { description: "something", skills:[1], subskills:[] }
    ],
    company_image:"/images/northeastern_logo.jpg", text_primary:"#000000", text_secondary:"#A4804A" },

    { id:2, company:"Harvard School of Engineering and Applied Sciences", start:"June 2015", end:"Aug 2018", jobtitle:"Laboratory Manager",
    projects:[
        { description: "Ensured proper safety protocols were followed by researchers.", skills:[], subskills:[]}, 
        { description: "Managed grant purchasing for lab supplies for researchers.", skills:[], subskills:[]}, 
        { description: "Trained and assisted researchers on lab equipment usage and maintenance.", skills:[], subskills:[]}
    ],
    company_image:"/images/harvard_seas_logo.jpeg", text_primary:"#000000", text_secondary:"#A51C30" },

    { id:3, company:"Wyss Institute for Biologically Inspired Engineering", start:"June 2015", end:"Aug 2018", jobtitle:"Research Assistant - Engineer",
    projects:[
        { description: "Served as the in-house engineer for all mechanical, software, and electrical engineering projects.", skills:[], subskills:[]}
    ],
    company_image:"/images/wyssinstitute_logo.jpeg", text_primary:"##121314", text_secondary:"#000000" },
];

export default function ExperiencePage()
{

    const ExperiencesList = experiences.map( exp => {

        
        return(
            <div key={exp.id} className="py-4 container mx-auto ">
                <div class="grid grid-cols-[100px_1fr]">
                    <div class="row-span-3 p-4 justify-center items-center">
                        <div><img src={exp.company_image} className="hidden md:flex justify-center items-center w-full" alt="Company Logo" /> </div>
                    </div>

                    <div className="block md:flex ExpNameDate justify-between font-bold text-lg">
                        <div className="CompanyName">{exp.company}</div>
                        <div className="CompanyDate">{exp.start}-{exp.end}</div>
                    </div>

                    <div className="Job text-base italic text-slate-700 font-bold" style={{color: exp.text_secondary}}>
                        {exp.jobtitle}
                    </div>

                    <ul className="JobDesc text-slate-800 text-base px-4 list-disc" >
                        {exp.projects.map( ex => {
                            var skills_used_show = '';
                            if (ex.skills.length > 0)
                            {
                                skills_used_show = 'Skillsets Used: ';
                            }
                            return (
                                <li>
                                    <div>
                                        {ex.description}
                                    </div>
                                    <div className="text-sm text-slate-600 italic">
                                        {skills_used_show}
                                        { ex.skills.map( (skillId, subidx) => {
                                            // Find the subskill object using the subskillId
                                            const skill = skills.find(ss => ss.id === skillId);
                                            const isLastskill = subidx === ex.skills.length - 1;
                                            return (
                                                <span key={skillId}>
                                                    { skill ? skill.title : ''}{isLastskill?'':', '}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    });

    return(
        <>
            <div className="text-3xl">Experience</div>
            <div className="text-pretty">
                {ExperiencesList}
            </div>
        </>
    );
}
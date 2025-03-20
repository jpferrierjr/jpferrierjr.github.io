export const outreach = [
    { title: 'Science with Cooking', id: 1, image:'/images/harvard_seas_logo.jpeg', group:'Harvard University School of Engineering and Applied Sciences', description: 'As part of scientific outreach through Dr. Kathryn Hollar and the Harvard School of Engineering, I assisted in teaching children about the science behind cooking in a fully interactive program.' },
    { title: 'Science Lab Tour Guide', id: 2, image:'/images/harvard_seas_logo.jpeg', group:'Harvard University School of Engineering and Applied Sciences', description: 'I spoke with 8th grade children about the scientific research that goes on at Harvard and took them around a lab space to introduce them to basic processes.' },
    { title: 'K-12 Science Show Demonstrator', id: 3, image:'/images/uca_logo.jpeg', group:'University of Central Arkanas - Physics Departmen', description: 'Performed 1-hour long science demonstration shows for K-12 visitors for 2 years, completing 30+ shows covering topics from forces, momentum, pressure, and electricity & magnetism.' },
    { title: 'Founder/Operator/Moderator', id: 4, image:'/images/sw_logo.jpg', group:'Science Wednesdays', description: '"Science Wednesdays" was an event that allowed the general public to pick the brain of scientists and experts in a field that pertains to the chosen subject of the month. As the operator of the events, I planned the topics, scheduled the events, rented necessary equipment, and found scientific speakers. Once the event was started, I would take the role of the moderator where I created default questions to initiate the conversation and I ensured that speakers did not dwell on topics too long to keep the tempo moderately high.' },
    { title: 'Graduate Student Ambassador', id: 5, image:'/images/northeastern_logo.jpg', group:'Northeastern Univeristy', description: 'Served 3 years as a graduate student advisor for Northeastern University. In this role, I served as a liason between between the university and the public, participating in different interviews and meetings with outside parties.' },
    { title: 'Physics PhD Mentor', id: 6, image:'/images/northeastern_logo.jpg', group:'Northeastern University', description: 'As an upper level graduate student, I served as a mentor for first and second year students, guiding them through research decisions, giving advice on classes, and answering general questions during our weekly department coffee hour with fellow graduate student Dr. Kevin Ng Chau.' },
    { title: 'Electronic Warfare Mentor', id: 7, image:'/images/viceroyscholars_logo.jpeg', group:'VICEROY Scholars', description: 'Served on behalf of the DoD and Northeastern University as a mentor and guide for undergraduate students pursuing degrees in cyber security or computer science roles. Met with each student once per month to discuss their overall career goals goals, to build up plans and short-term goals to reach the overall desired career path in national defense.' }
];

export default function OutreachPage()
{

    const OutreachList = outreach.map(out => {
        return(
        <div key={out.id} className="py-4 container mx-auto ">
            <div className="grid grid-rows-2 md:grid-cols-[100px_1fr]">
                <div className='row-span-3 px-4 justify-center items-center'>
                    <img src={out.image} className="hidden md:flex justify-center items-center w-16 h-16" alt="Outreach Logo" />
                </div>
                    <div className="OutreachFirstLine block md:flex justify-between font-bold text-base md:text-lg">
                    {out.title}
                </div>
                <div className="OutreachSecondLine text-sm md:text-base italic text-slate-700 font-bold">
                    {out.group}
                </div>
                <div className="OutreachThirdLine flex text-sm md:text-base">
                    {out.description}
                </div>
            </div>
        </div>);
    });
    return(
        <>
            <div className="text-2xl md:text-3xl">Outreach</div>
            <div className="text-pretty">
                {OutreachList}
            </div>
        </>
    );
}
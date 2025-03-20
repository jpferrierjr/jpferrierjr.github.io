import { skills } from "./Skills";

// Collection of all projects for connecting to skills and pages.
// Class lets the code know which div to focus on
export const projects = [
    { title: 'Raman Spectroscope Rebuild', id: 1, skillsUsed:[ 1, 2, 7, 8, 9 ], subSkillsUsed: [ 1, 2, 3, 9, 10, 14, 33, 45, 52, 56, 57, 58, 61, 65 ],
        description: 'Disassembled an old broken Renishaw Raman spectroscope and rebuilt it from the ground up. A new circuit board was designed for handling the motors for smoother and faster data collection. A new CCD was installed and dynamically controlled from the custom operating software designed with Python and Qt Designer. The new system had autocalibration and live feeds from both the microscope and the CCD. The software also implemented an automated peak finder and peak fitting functions, along with other analysis functions.', link:'https://github.com/jpferrierjr/' },
    { title: 'Sentiment Analysis Stock Trader', id: 2, skillsUsed:[ 1, 4, 7 ], subSkillsUsed: [1, 8, 24, 25, 27, 52, 55],
        description: 'Designed a stock analyzing software that would utilize a sentiment analysis machine learning model to read stock news before the market opens to determine whether to trade stocks. The system was originally designed to integrate into the Robinhood trading software and handle daily trading activities by checking all stock values every 1 second. The software was designed to store and track each purchase, sell, and 1-second change of all stocks owned. Multiple model parameters were used for determining the limits for which to sell a stock at, resulting in some models averaging a ~200% annual return. Lower models averaged ~60% annual return.', link:'' },
    { title: 'Chemical Vapor Deposition Flow Rate Controller', id: 3, skillsUsed:[ 2, 5, 7, 8 ], subSkillsUsed: [ 10, 14, 29, 31, 51, 56, 57, 58, 71 ],
        description: 'Developed a system for dynamically controlling up to 3 CVD flow controllers. The system provided power to the flow constrollers, tracked the flow rates in real-time, and auto-adjusted flow rates to match desired settings. The system was also designed to allow for more complex changes and timings to flow rates, such as mathematical function derived flow rate curves. The system also tracked pressure alarms for the CVD system to allow for an automated emergency shutoff of all gas flow.', link:'' },
    { title: 'Lattice Boltzmann Fluid Dynamics Simulator', id: 4, skillsUsed:[ 1, 3, 7 ], subSkillsUsed: [ 1, 52, 83 ],
        description: '', link:'' },
    { title: 'Electron Cloud Density Visualizer - Blender3D Plugin', id: 5, skillsUsed:[ 1, 3, 5, 7 ], subSkillsUsed: [ 1, 4, 5, 17, 18, 28, 38, 52, 66, 82 ],
        description: '', link:'' },
    { title: 'SPC Raman Response Curve Fitter', id: 6, skillsUsed:[], subSkillsUsed: [],
        description: '', link:'' },
    { title: 'Density Functional Theory Converging Library', id: 7, skillsUsed:[], subSkillsUsed: [],
        description: '', link:'' },
    { title: 'Modified CosmicWatch Muon Detector', id: 8, skillsUsed:[], subSkillsUsed: [],
        description: '', link:'' },
    { title: 'Automated GPAW installer for ARM-based Apple Computers', id: 9, skillsUsed:[], subSkillsUsed: [],
        description: '', link:'' },
    { title: '', id: 10, skillsUsed:[], subSkillsUsed: [],
        description: '', link:'' }
];

export default function ProjectsPage()
{
    const ProjectsList = projects.map(proj => {
        return(
        <div key={proj.id} className="w-full py-4 block">
            <div className="ProjectsFirstLine flex">
                <span className="ProjectsTitle font-bold underline text-base md:text-lg"><a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.title}</a></span>
            </div>
            <div className="ProjectsSecondLine flex">
                <span className="ProjectsDescription text-sm md:text-base">{proj.description}</span>
            </div>
            <div className="ProjectsThirdLine flex">
                <span className="ProjectsSkillsUsed text-xs md:text-sm italic text-slate-700">
                    Skills Used: {proj.skillsUsed.map( (sk, skid) => {
                        // Find the subskill object using the subskillId
                        const skill = skills.find(ss => ss.id === sk);
                        const isLastskill = skid === proj.skillsUsed.length - 1;
                        return (
                            <span key={skid}>
                                {skill ? skill.title : ''}{isLastskill?'':', '}
                            </span>
                        );
                    })}
                </span>
            </div>
        </div>);
    });

    return(
        <>
            <div className="text-2xl md:text-3xl">Projects</div>
            <div className="text-pretty">
                {ProjectsList}
            </div>
        </>
    );
}
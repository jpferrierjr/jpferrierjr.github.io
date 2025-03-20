import { skills, subskills } from "./Skills";

//Skills and subskills are added for my future automated Resume builder
const experiences = [
    { id:1, company:"Northeastern University - 2D Quantum Materials Laboratory", start:"Jan 2019", end:"Sep 2024", jobtitle:"Graduate Research Assistant",
    projects:
    [
        { id:1, description: "Created new thermodynamic methods for predicting 2D quantum material synthesis", skills:[ 1, 3, 5, 7 ], subskills:[ 1, 2, 3, 4, 5, 17, 18, 28, 29, 31, 38, 39, 41, 52, 55, 59, 60, 61, 62, 63 ] },
        { id:2, description: "Analyzed the effectiveness of differing machine learning models for predicting 2D quantum material synthesis experimental parameters (Bayesian Optimization with Gaussian Processes vs Deep Neural Networks)", skills:[ 1, 4, 5, 7 ], subskills:[ 1, 2, 3, 6, 7, 17, 21, 22, 23, 29, 31, 33, 41, 52, 55, 59, 60, 61, 63 ] },
        { id:3, description: "Discovered a new method for synthesizing graphene at lower temperatures, higher pressures, and lower cost than traditional methane-based methods", skills:[1,3,5,12], subskills:[1,4,5,17,18,28,29,31,33,35,36,37,38,39,41,52,59,62,63] },
        { id:4, description: "Designed and built a fully-functional and self-calibrating Raman Spectroscope with a full GUI-based user software, new circuit design, and higher speed motor control testing for faster Raman measurements", skills:[1,2,4,7,8,9], subskills:[1,3,9,10,14,15,28,33,52,56,57,58,61,65,71,72] },
        { id:5, description: "Built custom circuit boards for full digital controls over Chemical Vapor Deposition (CVD) gas flow controllers for more precise experimental control.", skills:[1,2,7,8], subskills:[1,9,10,14,51,52,56,57,58,65] },
        { id:6, description: "Developed Computational Fluid Dynamics software for predicting CVD gas flow using the Lattice Boltzmann method", skills:[1,3,7], subskills:[1,3,19,31] },
        { id:7, description: "Performed fundamental theoretical and experimental experiments to discover the synthesis parameters of K<sub>2</sub>CoS<sub>2</sub>", skills:[1,3,5,7,12], subskills:[1,3,4,5,17,18,28,29,30,31,32,33,34,38,39,40,41,52,59,62,63] },
        { id:8, description: "Worked with NASA engineers to devise a method for synthesizing graphene aboard the ISS in order to research the role of convection on synthesis", skills:[2,5], subskills:[10,13,19,29,31,73,77,83] },
        { id:9, description: "Designed a robotic system for automated 2D material stacking", skills:[2,5], subskills:[10] },
        { id:11, description: "Developed a Blender plugin tool to visualize DFT electron cloud densities in Blender3D", skills:[1,3,7], subskills:[1,4,5,17,28,38,52,66,82] },
        { id:12, description: "Created an automated Raman fitting and analysis software to allow researchers to perform high-throughput data collection", skills:[1,7], subskills:[1,3,9,33,86] },
        { id:13, description: "Developed an automated mapped Raman fitting and analysis software [for a different Raman system than the one above]", skills:[1,7], subskills:[1,3,9,33,72,86] },
        { id:14, description: "Built a comprehensive automated DFT software that categorizes materials, converges DFT values, and saves pre-calculated values to reduce future computation", skills:[1,3,5,7,12], subskills:[1,3,4,5,17,18,28,29,38,39,59,60,61,62,63,77] },
        { id:15, description: "Worked with the NEU Physics department to develop an interactive Muon detector project for use with science outreach programs. This was an updated and more interactive version of the MIT CosmicWatch", skills:[2,7,8], subskills:[10,51,56,57,58,65,71] },
        { id:16, description: "Before the addition of GPAW to conda-forge, developed a shell script to allow for the install of GPAW onto ARM-based Mac products.", skills:[1,3,5,7], subskills:[17,38,52,55,60,87] },
        { id:17, description: "Trained both undergraduate and graduate students on experimental condensed matter physics protocols and SOPs", skills:[11], subskills:[73,74,78,84] },
        { id:18, description: "Managed laboratory safety trainings, purchasing, chemical inventories, and safety compliance.", skills:[11], subskills:[73,75,84] },
        { id:19, description: "Assisted Professor Swastik Kar in establishing the <a href='https://equal.sites.northeastern.edu/' target='_blank' class='underline'>Experiential Quantum Advancement Laboratories (EQUAL)</a>.", skills:[11], subskills:[84], link:'https://equal.sites.northeastern.edu/' }
    ],
    company_image:"/images/northeastern_logo.jpg", text_primary:"#000000", text_secondary:"#A4804A" },

    { id:2, company:"Harvard School of Engineering and Applied Sciences", start:"June 2015", end:"Aug 2018", jobtitle:"Laboratory Manager",
    projects:[
        { id:1, description: "Ensured proper safety protocols were followed by researchers.", skills:[11], subskills:[73]}, 
        { id:2, description: "Managed grant purchasing for lab supplies for researchers.", skills:[11], subskills:[75]}, 
        { id:3, description: "Trained and assisted researchers on lab equipment usage and maintenance.", skills:[11], subskills:[78]},
        { id:4, description: "Compiled and managed year-end meetings.", skills:[11], subskills:[84]},
        { id:5, description: "Served as Lab Safety lead, working with EH&S on inspections and compliance.", skills:[11], subskills:[73]},
        { id:6, description: "Performed annual inventories and managed lab routine clean-up activities.", skills:[11], subskills:[73,84]},
        { id:7, description: "Managed and guided lab preparations for tours of distinguished guests.", skills:[11], subskills:[84]},
        { id:8, description: "Oversaw 40+ lab members and served as an intermediary for lab culture and conflict resolution.", skills:[11], subskills:[73,74]}
    ],
    company_image:"/images/harvard_seas_logo.jpeg", text_primary:"#000000", text_secondary:"#A51C30" },

    { id:3, company:"Wyss Institute for Biologically Inspired Engineering", start:"June 2015", end:"Aug 2018", jobtitle:"Research Assistant - Engineer",
    projects:[
        { id:1, description: "Served as the in-house engineer for all mechanical, software, and electrical engineering projects.", skills:[1,2,6,7,8,9,11,14], subskills:[]},
        { id:2, description: "Designed a microfluidic connecting robot for high-throughput Organs-On-Chip (OOC) testing", skills:[2,7,8,14], subskills:[10,14,51,56,57,58,65,71,77]},
        { id:3, description: "Assisted in developing the heart, brain, and pancreas on a chip technologies", skills:[2,14], subskills:[10,13,14,16]},
        { id:4, description: "Devised a new compact and low-powered electrospinning technology", skills:[2,3,8,12], subskills:[10,13,14,19,35,56,58,65,71,73,79]},
        { id:5, description: "Engineered a proposed high-speed light stimulator for photo-induced muscular cell stimulation", skills:[2,14], subskills:[10]},
        { id:6, description: "Created software for photolithography mask development for use with fat-cell culture islands", skills:[1,7,14], subskills:[1,52]},
        { id:7, description: "Performed cell-culture and transplantation for OOC experiments", skills:[14], subskills:[85]},
        { id:8, description: "Designed stainless steel quick connect systems for OOC replacement.", skills:[2,14], subskills:[10,13,16]},
        { id:9, description: "Developed high-speed real-time video processing software for muscular cell tracking.", skills:[7,14], subskills:[51,65,72,81]},
        { id:10, description: "Engineered an automated nanofiber collection system.", skills:[2,7,8,14], subskills:[10,13,14,51,56,57,58,65,71]},
        { id:11, description: "Developed a signal filtering circuit for tracking insulin in a microfluidic OOC.", skills:[8,14], subskills:[56,57,58,65]},
        { id:12, description: "Rendered 3D models and images for use in publications and grant applications.", skills:[10], subskills:[10,82]},
        { id:13, description: "Coded web-based administrative software with Harvard ID login for handling purchase requests and tracking grant purchases.", skills:[], subskills:[]},
        { id:14, description: "Redesigned the laboratory website through a CMS and custom front-end theme design.", skills:[7], subskills:[42,43,44,45,46,47,54]},
        { id:15, description: "Assisted in developing mathematical models for muscular thin film structure efficacy.", skills:[12,14], subskills:[52,83]}
    ],
    company_image:"/images/wyssinstitute_logo.jpeg", text_primary:"#121314", text_secondary:"#000000" },

    { id:4, company:"Sogang University", start:"May 2018", end:"June 2018", jobtitle:"Visiting Researcher",
    projects:[
        { id:1, description: "Modified existing FDM 3D printers into gel-based 3D bioprinters.", skills:[2,7,8,14], subskills:[10,14,51,56,57,58,65]},
        { id:2, description: "Built circuits to provide dynamic control over color changing chemical states of a new material.", skills:[2,7,8], subskills:[10,51,56,57,58,65]},
        { id:3, description: "Assisted in devising a bioreactor system for closed-environment biological testing.", skills:[2,14], subskills:[10]}
    ],
    company_image:"/images/sogang_logo.jpeg", text_primary:"#7d0000", text_secondary:"#a6a6a6" },
    { id:5, company:"University of Central Arkansas", start:"Mar 2014", end:"May 2015", jobtitle:"Undergraduate Student Researcher",
    projects:[
        { id:1, description: "Secured Arkansas Space Grant Consortium Funding for a NASA project.", skills:[11], subskills:[75]},
        { id:2, description: "Developed a software for dynamic design Venturi resonators into STL files for 3D printing.", skills:[1,2,3,7,12], subskills:[1,9,11,14,20,52]},
        { id:3, description: "3D printed and tested dynamically designed Venturi resonator systems with a closed-testing system, controlled by a Raspberry Pi.", skills:[1,2,7,8,12], subskills:[1,20,52,56,57,58,59,65,71]}
    ],
    company_image:"/images/uca_logo.jpeg", text_primary:"#7C878E", text_secondary:"#582C83" },
    { id:6, company:"University of Central Arkansas", start:"Jan 2014", end:"May 2014", jobtitle:"Undergraduate Learning Assistant",
    projects:[
        { id:1, description: "Assisted in teaching University Physics 1 labs-helping students understand the physics of their experiments and guide them through completing their assignments.", skills:[11, 12], subskills:[78]}
    ],
    company_image:"/images/uca_logo.jpeg", text_primary:"#7C878E", text_secondary:"#582C83" },
    { id:7, company:"Harvard School of Engineering and Applied Sciences", start:"Jun 2014", end:"Aug 2014", jobtitle:"REU Summer Intern",
    projects:[
        { id:1, description: "Utilized C++ and OpenCV to develop high-speed video processing software to analyze heart cell force exertion on Muscular Thin Films (MTFs) for use in Organs-On-a-Chip technologies. Results showed an over 200x increase in speed over prior processing techniques. GUI software was created to accommodate the software for ease of use for researchers. This was accomplished with the Qt framework.", skills:[7,9,14], subskills:[51,72, 81]}
    ],
    company_image:"/images/harvard_seas_logo.jpeg", text_primary:"#000000", text_secondary:"#A51C30" },
    { id:8, company:"Harvard School of Engineering and Applied Sciences", start:"Jun 2013", end:"Aug 2013", jobtitle:"REU Summer Intern",
    projects:[
        { id:1, description: "Assisted in engineering a Rotary Jet Spinning machine to create Extra-Cellular Matrix (ECM) nanofibers for use in 3D printed heart valves and heart ventricles.", skills:[2,7,8,14], subskills:[10,51,56,58,71, 80]}
    ],
    company_image:"/images/harvard_seas_logo.jpeg", text_primary:"#000000", text_secondary:"#A51C30" },
    { id:9, company:"United States Air Force", start:"Mar 2006", end:"Mar 2012", jobtitle:"Electronic Warfare Technician, SSgt",
    projects:[
        { id:1, description: "Served as POC of the C-130J LAIRCM test program with Northrop Grumman.", skills:[11, 13], subskills:[73,78]},
        { id:2, description: "Led shift repairs for EW systems aboard C-130E/H/J model aircraft in the AOR for Kandahar, Afghanistan in OEF.", skills:[11, 13], subskills:[73,74,77]},
        { id:3, description: "Rectified EW issue for communication aircraft in the entire AOR, allowing all comm sorties to resume in Iraq and Afghanistan.", skills:[12, 13], subskills:[77, 79]},
        { id:4, description: "Served as an EW technician for C-130E/H model aircraft in the AOR for Balad, Iraq in OIF.", skills:[11,13], subskills:[]},
        { id:5, description: "Developed merging software that combined and CTK systems for the 463rd AMXS and 19th AMXS in Little Rock Air Force Base.", skills:[6], subskills:[45, 46]},
        { id:6, description: "Devised the waterfall method to reduce wartime readiness response times for the Air Mobility Command, setting a new record.", skills:[11], subskills:[73, 77]}
    ],
    company_image:"/images/usaf_logo.jpeg", text_primary:"#000000", text_secondary:"#00458B" },
];

export default function ExperiencePage()
{
    //Cycle through each individual experience
    const ExperiencesList = experiences.map( exp => {  
        
        // Get associated skills and subskills
        var skill_list = [ ...new Set( exp.projects.flatMap(obj => obj.skills))].sort((a, b) => a - b);
        var subSkills_list = [...new Set(exp.projects.flatMap(obj => obj.subskills))].sort((a, b) => a - b);;

        // Find the associated skills and subskills in text form from skills.jsx
        const mappedSkills = skill_list.map( id => {
            const skillMap = skills.find( item => item.id === id );
            return skillMap ? skillMap.title : null;
        }).filter(val => val !== null);
        const mappedSubSkills = subSkills_list.map( id => {
            const subSkillMap = subskills.find( item => item.id === id );
            return subSkillMap ? subSkillMap.skill : null;
        }).filter(val => val !== null);

        // Cycle through each project/bullet point
        const bullet_points = exp.projects.map( ex => {    
            // Render the descriptions to include HTML tags for subscripts
            return (
                <li key={ex.id}>
                    <div className="text-sm md:text-base" dangerouslySetInnerHTML={{ __html: ex.description }}>
                    </div>
                </li>
            );
        });
        
        // Build skills list
        var skills_used_show = '';
        if (skill_list.length > 0)
        {
            skills_used_show = 'Skillsets Used: ';
        }

        // Include the subskills too
        var subskills_used_show = '';
        if (subSkills_list.length > 0)
        {
            subskills_used_show = 'Subskillsets Used: ';
        }

        // Build the Skills list for output
        const skills_listed = mappedSkills.map( (sk, idx) => {
            // Find the subskill object using the subskillId
            const skill_link = sk.toLowerCase().replace(/ /g, "_");
            const isLastskill = ( idx === mappedSkills.length-1 );
            return (
                <span key={idx}>
                    <a href={'/skills/'+skill_link} target="_blank" rel="noopener noreferrer" className="underline">{sk}{isLastskill?'':', '}</a>
                </span>
            );
        });

        // Build the Subskills list for output
        const subskills_listed = mappedSubSkills.map( (sk, idx) => {
            // Find the subskill object using the subskillId
            const subskill_link = sk.toLowerCase().replace(/ /g, "_");
            const isLastSubskill = ( idx === mappedSubSkills.length-1 );
            return (
                <span key={idx}>
                    <a href={'/skills/'+subskill_link} target="_blank" rel="noopener noreferrer" className="underline">{sk}{isLastSubskill?'':', '}</a>
                </span>
            );
        });

        return(
            <div key={exp.id} className="py-4 container mx-auto ">
                <div className="grid grid-rows-2 md:grid-cols-[100px_1fr]">
                    <div className="row-span-3 px-4 justify-center items-center">
                        <img src={exp.company_image} className="hidden md:flex justify-center items-center w-16 h-16" alt="Company Logo" />
                    </div>

                    <div className="block md:flex ExpNameDate justify-between font-bold text-base md:text-lg">
                        <div className="CompanyName">{exp.company}</div>
                        <div className="CompanyDate">{exp.start}-{exp.end}</div>
                    </div>

                    <div className="Job text-sm md:text-base italic text-slate-700 font-bold" style={{color: exp.text_secondary}}>
                        {exp.jobtitle}
                    </div>

                    <div className="JobDesc text-slate-800">
                        <ul className="text-sm md:text-base px-4 list-disc" >
                            {bullet_points}
                        </ul>

                        <div className="text-xs md:text-sm text-slate-600 italic">
                            {skills_used_show}{skills_listed}
                        </div>

                        <div className="text-xs md:text-sm text-slate-600 italic">
                            {subskills_used_show}{subskills_listed}
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return(
        <>
            <div className="text-2xl md:text-3xl">Experience</div>
            <div className="text-pretty">
                {ExperiencesList}
            </div>
        </>
    );
}
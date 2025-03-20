import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './Projects';
import { publications } from './Publications';
import { presentations } from './Publications';

// Dictionary of subskills for linking
export const subskills = [
    { id:1, skill:'Numpy' },
    { id:2, skill:'Pandas' },
    { id:3, skill:'SciPy' },
    { id:4, skill:'ASE' },
    { id:5, skill:'GPAW' },
    { id:6, skill:'SciKit-Learn' },
    { id:7, skill:'Tensorflow' },
    { id:8, skill:'PyTorch' },
    { id:9, skill:'PyQt' },
    { id:10, skill:'SolidWorks' },
    { id:11, skill:'FreeCAD' },
    { id:12, skill:'AutoDesk' },
    { id:13, skill:'CNC' },
    { id:14, skill:'3D Printing' },
    { id:15, skill:'Laser Cutting' },
    { id:16, skill:'Microfluidics' },
    { id:17, skill:'Quantum Chemistry' },
    { id:18, skill:'Molecular Dynamics' },
    { id:19, skill:'Fluid Dynamics' },
    { id:20, skill:'Acoustics' },
    { id:21, skill:'Bayesian Optimization' },
    { id:22, skill:'Gaussian Processes' },
    { id:23, skill:'Deep Neural Networks' },
    { id:24, skill:'Language Models' },
    { id:25, skill:'Sentiment Analysis' },
    { id:26, skill:'Physics Informed Neural Networks (PINNs)' },
    { id:27, skill:'Huggingface' },
    { id:28, skill:'Quantum Theory' },
    { id:29, skill:'2D Quantum Material Synthesis' },
    { id:30, skill:'2D Material Transferring' },
    { id:31, skill:'Chemical Vapor Deposition (CVD)' },
    { id:32, skill:'Atomic Force Microscopy (AFM)' },
    { id:33, skill:'Raman Spectroscopy' },
    { id:34, skill:'NV Magnetometry' },
    { id:35, skill:'Scanning Electron Microscopy (SEM)' },
    { id:36, skill:'Transmission Electron Microscopy (TEM)' },
    { id:37, skill:'Selected Area Electron Diffraction (SAED)' },
    { id:38, skill:'Density Functional Theory (DFT)' },
    { id:39, skill:'Time-Dependent Density Functional Theory (TD-DFT)' },
    { id:40, skill:'X-ray Diffraction (XRD)' },
    { id:41, skill:'Crystal Formation Thermodynamics' },
    { id:42, skill:'HTML' },
    { id:43, skill:'CSS' },
    { id:44, skill:'Javascript' },
    { id:45, skill:'MySQL' },
    { id:46, skill:'PHP' },
    { id:47, skill:'jQuery' },
    { id:48, skill:'NodeJS' },
    { id:49, skill:'ReactJS' },
    { id:50, skill:'JAX' },
    { id:51, skill:'C++' },
    { id:52, skill:'Python' },
    { id:53, skill:'CUDA' },
    { id:54, skill:'Web Development' },
    { id:55, skill:'GitHub' },
    { id:56, skill:'Circuit Diagram Design' },
    { id:57, skill:'EagleCAD' },
    { id:58, skill:'Soldering (Surface Mount & Through-hole)' },
    { id:59, skill:'Linux' },
    { id:60, skill:'MacOS' },
    { id:61, skill:'Windows' },
    { id:62, skill:'Slurm' },
    { id:63, skill:'High-Performance Computing (HPC)' },
    { id:64, skill:'TrueNAS' },
    { id:65, skill:'Hardward Design' },
    { id:66, skill:'Blender Python' },
    { id:67, skill:'Adobe Premiere' },
    { id:68, skill:'Adobe After Effects' },
    { id:69, skill:'Adobe Photoshop' },
    { id:70, skill:'Adobe Illustrator' },
    { id:71, skill:'Microcontroller Development' },
    { id:72, skill:'OpenCV' },
    { id:73, skill:'Safety & Compliance' },
    { id:74, skill:'Conflict Resolution' },
    { id:75, skill:'Grant Spending Management' },
    { id:76, skill:'Tailwind CSS' },
    { id:77, skill:'Large Scale Complex Problem Solving' },
    { id:78, skill:'Teaching/Training' },
    { id:79, skill:'Electrodynamics' },
    { id:80, skill:'LabView' },
    { id:81, skill:'Qt' },
    { id:82, skill:'Blender3D' },
    { id:83, skill:'Mathematical Modeling' },
    { id:84, skill:'Organization' },
    { id:85, skill:'Cell Culture' },
    { id:86, skill:'LMFit' },
    { id:87, skill:'Shell Scripting' }
]

//Collection of all skills to allow for connection to projects
export const skills = [
    { title: 'Python', id: 1, subskills: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 66, 72 ]},
    { title: 'Mechanical Engineering', id: 2, subskills:[ 10, 11, 12, 13, 14, 15, 16 ] },
    { title: 'Computational Physics', id: 3, subskills:[ 17, 18, 19, 20 ] },
    { title: 'Machine Learning', id: 4, subskills:[ 21, 22, 23, 24, 25, 26, 27 ] },
    { title: 'Condensed Matter Physics', id: 5, subskills:[ 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41 ] },
    { title: 'Web Development', id: 6, subskills:[ 42, 43, 44, 45, 46, 47, 48, 49, 50, 76 ] },
    { title: 'Software Engineering', id: 7, subskills:[ 51, 52, 53, 54, 55 ] },
    { title: 'Electrical Engineering', id: 8, subskills:[ 56, 57, 58, 71, 80 ] },
    { title: 'Computer Design', id: 9, subskills:[ 59, 60, 61, 62, 63, 64, 65 ] },
    { title: 'Photography and Videography', id: 10, subskills:[ 67, 68, 69, 70 ] },
    { title: 'Leadership', id: 11, subskills:[ 73, 74, 75, 77, 78 ] },
    { title: 'Theoretical Physics', id: 12, subskills:[17,18,19,20,79] },
    { title: 'Electronic Warfare', id: 13, subskills:[79,58] },
    { title: 'Biophysics', id: 14, subskills:[16,85] }
];



// build a display card for use on the website
function SkillsCard() {
    // Page information
    const { page } = useParams();
    var ret = '';
    if(page)
    {
        const page_display = page.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        //Ensure that the page variable actually exists in our skillset
        const skill = skills.find(ss => ss.title.toLowerCase().replace(/ /g, "_") === page);
        var ProjList = '';
        var PubList = '';
        var PresList = '';
        if(skill)
        {
            // Filter out any publications that don't contain our skills
            const filteredPublications = publications.filter( pub => pub.skillsUsed.includes(skill.id));
            // Filter out any presentations that don't contain our skills
            const filteredPresentations = presentations.filter( pres => pres.skillsUsed.includes(skill.id));
            // Filter out any projects that don't contain our skills
            const filteredProjects = projects.filter( project => project.skillsUsed.includes(skill.id));

            // Check the length of Publications
            if(filteredPublications.length===0)
            {
                PubList = <h1 className='font-bold italic text-center p-10 text-gray-700'>No Publications to list under this skillset!</h1>
            }
            else
            {
                //build the corresponding skills page
                PubList = filteredPublications.map( publication => 
                    <li key={publication.id} className='hover:bg-green-100 p-3 shadow bg-slate-100 border border-slate-500 m-3'>
                        <a href={publication.link} target="_blank" rel="noopener noreferrer">
                            <h2 className='text-lg p-4 bold'>
                                {publication.title}
                            </h2>
                            <div>
                                <p className='text-gray-500 text-sm p-4'>
                                    Subskills Used:&nbsp;
                                    {publication.subSkillsUsed.map( (subskillId, subidx) => {
                                        // Find the subskill object using the subskillId
                                        const subskill = subskills.find(ss => ss.id === subskillId);
                                        const isLastsubskill = subidx === publication.subSkillsUsed.length - 1;
                                        return (
                                            <span key={subskillId}>
                                                {subskill ? subskill.skill : ''}{isLastsubskill?'':', '}
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                        </a>
                    </li>
                );
            }

            // Check the length of Presentations
            if(filteredPresentations.length===0)
            {
                PresList = <h1 className='font-bold italic text-center p-10 text-gray-700'>No Presentations to list under this skillset!</h1>
            }
            else
            {
                //build the corresponding skills page
                PresList = filteredPresentations.map( presentation => 
                    <li key={presentation.id} className='hover:bg-green-50 p-3 shadow bg-slate-100 border border-slate-500 m-3'>
                        <a href={presentation.link} target="_blank" rel="noopener noreferrer" >
                            <h2 className='text-lg p-4 bold'>
                                {presentation.title}
                            </h2>
                            <div>
                                <p className='text-gray-500 text-sm p-4'>
                                    Subskills Used:&nbsp;
                                    {presentation.subSkillsUsed.map( (subskillId, subidx) => {
                                        // Find the subskill object using the subskillId
                                        const subskill = subskills.find(ss => ss.id === subskillId);
                                        const isLastsubskill = subidx === presentation.subSkillsUsed.length - 1;
                                        return (
                                            <span key={subskillId}>
                                                {subskill ? subskill.skill : ''}{isLastsubskill?'':', '}
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                        </a>
                    </li>
                );
            }
            
            // Check the length of Projects
            if(filteredProjects.length===0)
            {
                ProjList = <h1 className='font-bold italic text-center p-10 text-gray-700'>No Projects to list under this skillset!</h1>
            }
            else
            {
                //build the corresponding skills page
                ProjList = filteredProjects.map( project => 
                    <li key={project.id} className='hover:bg-green-50 p-3 shadow bg-slate-100 border border-slate-500 m-3'>
                        <a href={'/projects/'+project.title.toLowerCase().replace(/ /g, "_")} >
                            <h2 className='text-lg p-4 bold'>
                                {project.title}
                            </h2>
                            <div>
                                <p className='text-gray-800 text-base p-4'>
                                    {project.description}
                                </p>
                                <hr />
                                <p className='text-gray-500 text-sm p-4'>
                                    Subskills Used:&nbsp;
                                    {project.subSkillsUsed.map( (subskillId, subidx) => {
                                        // Find the subskill object using the subskillId
                                        const subskill = subskills.find(ss => ss.id === subskillId);
                                        const isLastsubskill = subidx === project.subSkillsUsed.length - 1;
                                        return (
                                            <span key={subskillId}>
                                                {subskill ? subskill.skill : ''}{isLastsubskill?'':', '}
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                        </a>
                    </li>
                );
            }

            ret = <><h1 className='font-bold italic text-left p-8 text-teal-900 text-xl'>Publications using skillset `{page_display}`</h1><ul>{PubList}</ul><hr className='p-2' />
            <h1 className='font-bold italic text-left p-8 text-teal-900 text-xl'>Presentations using skillset `{page_display}`</h1><ul>{PresList}</ul><hr className='p-2' />
            <h1 className='font-bold italic text-left p-8 text-teal-900 text-xl'>Projects using skillset `{page_display}`</h1><ul>{ProjList}</ul></>;
        }
        else
        {
            ret = <h1 className='font-bold italic text-center p-10 text-gray-700'>{page_display} does not exist in the skillset!</h1>;
        }
    }
    else
    {
        //show all skills
        const SkillsList = skills.map( (skill, index) => 
            <li key={skill.id} className='hover:bg-green-100 p-3 shadow bg-slate-100 border border-slate-500 m-3'>
                <a href={'/skills/'+skill.title.toLowerCase().replace(/ /g, "_")} >
                    <h2>
                        <span>{skill.title}</span>
                    </h2>
                    <div>
                        <p className='text-gray-500 text-sm'>
                            {skill.subskills.map( (subskillId,subidx) => {
                                // Find the subskill object using the subskillId
                                const subskill = subskills.find(ss => ss.id === subskillId);
                                const isLastsubskill = subidx === skill.subskills.length - 1;
                                return (
                                    <span key={subskillId}>
                                        {subskill ? subskill.skill : ''}{isLastsubskill?'':', '}
                                    </span>
                                );
                            })}
                        </p>
                    </div>
                </a>
            </li>
        );
        ret = <ul>{SkillsList}</ul>;
    }
    

    return ( ret );
}

export default SkillsCard;
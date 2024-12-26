// Collection of all projects for connecting to skills and pages.
// Class lets the code know which div to focus on
export const projects = [
    { title: 'Raman Spectroscope Rebuild', id: 1, skillsUsed:[ 1, 2, 7, 8, 9 ], subSkillsUsed: [ 1, 2, 3, 9, 10, 14, 33, 45, 52, 56, 57, 58, 61, 65 ], description: 'I disassembled an old broken Raman spectroscope and rebuilt it from the ground up. A new circuit board was designed for handling the motors for smooth data collection. A new CCD was installed and dynamically controlled from my custom operating software designed with Python and Qt Designer. The new system had autocalibration and live feeds from both the microscope and the CCD. The software also implemented an automated peak finder and peak fitting functions, along with other analysis functions.' }
];

export default function ProjectsPage()
{
    return(
        <>
            <div className="text-3xl">Projects</div>
            <div className="text-pretty">
                <p>Cool Projects things here built from a list</p>
            </div>
        </>
    );
}
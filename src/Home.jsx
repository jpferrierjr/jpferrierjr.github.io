import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { FaBluesky, FaSquareThreads, FaOrcid, FaGoogleScholar } from "react-icons/fa6";

import AboutPage from "./About";
import EducationPage from "./resume_components/Education";
import ExperiencePage from "./resume_components/Experience";
import PublicationsPage from "./resume_components/Publications";
import PresentationsPage from "./resume_components/Presentations";
import ProjectsPage from "./resume_components/Projects";
import OutreachPage from "./resume_components/Outreach";
import AwardsPage from "./resume_components/Awards";
import { OrcIDLink, ScholarLink } from "./resume_components/Publications";

export default function HomePage() {
    const curr_year = new Date().getFullYear();
    const leadership = curr_year-2008;
    const research = curr_year-2013;
    const software = curr_year-2010;
    const machlearn = curr_year - 2019;
    
    //Styles
    const iconSizes = "1em"
    const LIstyle = { color: "#0077B5", fontSize: iconSizes }
    const GHstyle = { color: "#2b3137", fontSize: iconSizes }
    const BSstyle = { color: "#208bfe", fontSize: iconSizes }
    const Thstyle = { color: "#0a0a0a", fontSize: iconSizes }
    const FBstyle = { color: "#4267B2", fontSize: iconSizes }
    const GSstyle = { color: "#666666", fontSize: iconSizes }
    const OIstyle = { color: "#A6CE39", fontSize: iconSizes }
    return (
    <>
        <div className="p-8 block content-center border shadow-md mt-4">
            <div className="Header flex">
                <div className="hidden md:flex Profile_pic justify-center items-center">
                    <img src="/images/profile.png" className="rounded-full max-h-64 min-w-24" alt="John" />
                </div>
                <div className="Name min-h-64 w-full text-center p-8">
                    <div className="NamePlate text-lg bold md:text-2xl lg:text-4xl">
                    Dr. John Phillip Ferrier, Jr
                    </div>
                    <ul className="ShortAboutList text-xs italic text-slate-800 md:text-base">
                        <li>{leadership}+ years of leadership experience.</li>
                        <li>{software}+ years of software development experience.</li>
                        <li>{research}+ years of scientific research experience.</li>
                        <li>{machlearn}+ years of machine learning experience.</li>
                    </ul>
                    <div className="ShortAboutText p-8 text-xs md:text-base">
                        <p>NSF Fellow &bull; USAF OIF/OEF EW Veteran &bull; Experimental/Computational Physicist</p>
                    </div>
                    <div className="Socials text-lg md:text-2xl lg:text-4xl text-center flex justify-center">
                        <span className="px-2 md:px-4">
                            <a href="https://www.linkedin.com/in/jpferrierjr/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={LIstyle} /></a>
                        </span>
                        <span className="px-2 md:px-4">
                            <a href={ScholarLink} target="_blank" rel="noopener noreferrer"><FaGoogleScholar style={GSstyle} /></a>
                        </span>
                        <span className="px-2 md:px-4">
                            <a href={OrcIDLink} target="_blank" rel="noopener noreferrer"><FaOrcid style={OIstyle} /></a>
                        </span>
                        <span className="px-2 md:px-4">
                            <a href="https://github.com/jpferrierjr" target="_blank" rel="noopener noreferrer"><FaGithubSquare style={GHstyle} /></a>
                        </span>
                        <span className="px-2 md:px-4">
                            <a href="https://bsky.app/profile/jpferrierjr.bsky.social" target="_blank" rel="noopener noreferrer"><FaBluesky style={BSstyle} /></a>
                        </span>
                        <span className="px-2 md:px-4">
                            <a href="https://www.threads.net/@johnny_fit_pants" target="_blank" rel="noopener noreferrer"><FaSquareThreads style={Thstyle} /></a>
                        </span>
                        <span className="px-2 md:px-4">
                            <a href="https://www.facebook.com/jpferrierjr" target="_blank" rel="noopener noreferrer"><FaFacebookSquare style={FBstyle} /></a>
                        </span>
                    </div>
                </div>
            </div>
            <hr className="p-2"/>
            <div className="About py-4">
                <AboutPage />
            </div>
            <hr className="py-4"/>
            <div className="Education py-4">
                <EducationPage />
            </div>
            <hr className="p-4"/>
            <div className="Experience py-4">
                <ExperiencePage />
            </div>
            <hr className="p-4"/>
            <div className="Publications py-4">
                <PublicationsPage />
            </div>
            <hr className="p-4"/>
            <div className="Presentations py-4">
                <PresentationsPage />
            </div>
            <hr className="p-4"/>
            <div className="Projects py-4">
                <ProjectsPage />
            </div>
            <hr className="p-4"/>
            <div className="Outreach py-4">
                <OutreachPage />
            </div>
            <hr className="p-4"/>
            <div className="Awards_and_honors py-4">
                <AwardsPage />
            </div>
        </div>
    </>);
}
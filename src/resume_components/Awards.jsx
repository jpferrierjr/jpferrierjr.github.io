const military_awards = [
    { id:1, title:"Meritorious Unit Award w/ 1 oak leaf cluster", link:"https://www.afpc.af.mil/Fact-Sheets/Display/Article/421933/meritorious-unit-award/" },
    { id:2, title:"AF Outstanding Unit Award", link:"https://www.afpc.af.mil/Fact-Sheets/Display/Article/421951/air-and-space-outstanding-unit-award/" },
    { id:3, title:"AF Good Conduct Medal w/ 1 oak leaf cluster", link:"https://www.afpc.af.mil/Fact-Sheets/Display/Article/421952/air-force-good-conduct-medal/" },
    { id:4, title:"National Defense Service Medal", link:"https://www.afpc.af.mil/Fact-Sheets/Display/Article/421890/national-defense-service-medal/" },
    { id:5, title:"Afghanistan Campaign Medal w/ 1 service star", link:"https://www.afpc.af.mil/Fact-Sheets/Display/Article/421949/afghanistan-campaign-medal/" },
    { id:6, title:"Iraq Campaign Medal w/ 1 service start", link:"https://www.afpc.af.mil/Fact-Sheets/Display/Article/421926/iraq-campaign-medal/" },
    { id:7, title:"Global War on Terrorism Service Medal", link:"https://www.afpc.af.mil/Fact-Sheets/Display/Article/421912/global-war-on-terrorism-service-medal/" },
    { id:8, title:"AF Expeditionary Service Ribbon w/ gold border & 1 oak leaf", link:"https://www.afpc.af.mil/Fact-Sheets/Display/Article/421941/air-and-space-expeditionary-service-ribbon/" },
    { id:9, title:"AF Longevity Service", link:"https://www.afpc.af.mil/Fact-Sheets/Display/Article/421867/air-and-space-longevity-service-award/" },
    { id:10, title:"USAF NCO PME Graduate Ribbon", link:"https://www.afpc.af.mil/Fact-Sheets/Display/Article/421908/usaf-nco-pme-graduate-ribbon/" },
    { id:11, title:"Small Arms Expert Marksman Ribbon w/ 1 service star", link:"https://www.afpc.af.mil/Fact-Sheets/Display/Article/421902/small-arms-expert-marksmanship-ribbon/" },
    { id:12, title:"AF Training Ribbon", link:"https://www.afpc.af.mil/Fact-Sheets/Display/Article/421945/air-and-space-training-ribbon/" },
    { id:13, title:"NATO Medal", link:"https://www.afpc.af.mil/Fact-Sheets/Display/Article/421924/non-article-5-north-atlantic-treaty-organization-medal-international-security-a/" }
]
const awards = [
    { id:1, title:"NSF GRFP Awardee", image:"/images/nsf_logo.png", link:"https://www.nsfgrfp.org/", description:"The NSF Graduate Research Fellowship Program (GRFP) is a highly competitive and prestigious fellowship awarded by the National Science Foundation (NSF) in the United States. It provides financial support to outstanding graduate students pursuing research-based master's and doctoral degrees in science, technology, engineering, and mathematics 1  (STEM) fields or in STEM education. The GRFP aims to recognize and support individuals early in their graduate careers who demonstrate the potential to make significant contributions to research and innovation." },
    { id:2, title:"Arkansas Space Grant Constortium Awardee", image:"/images/asgc_logo.png", link:"", description:"The Arkansas Space Grant Consortium (ASGC) is a pivotal part of a nationwide network funded by NASA to enhance America's aerospace science and technology capabilities. ASGC partners with 17 four-year universities and colleges across Arkansas, dedicated to advancing space science education, research, and public outreach. Through scholarships, research grants, and educational programs, ASGC supports students and faculty in STEM fields, aligning with NASA's mission to inspire the next generation of scientists, engineers, and explorers. " },
    { id:3, title:"NSF REU Grant Awardee", image:"/images/nsf_logo.png", link:"https://new.nsf.gov/funding/opportunities/reu-research-experiences-undergraduates", description:"The Research Experiences for Undergraduates (REU) program supports active research participation by undergraduate students in any of the areas of research funded by the National Science Foundation. REU projects involve students in meaningful ways in ongoing research programs or in research projects specifically designed for the REU program." },
    { id:4, title:"NNIN Grant Awardee", image:"/images/nnin_logo.gif", link:"https://www.nnin.org/", description:"The National Nanotechnology Infrastructure Network (NNIN) was an NSF-funded program that provided researchers across the US with access to advanced nanotechnology facilities and expertise.  Operating from 2004 to 2015, the NNIN consisted of 14 university sites equipped with state-of-the-art fabrication and characterization tools, fostering innovation in nanoscale science and engineering.  It has since been succeeded by the National Nanotechnology Coordinated Infrastructure (NNCI)." },
    { id:5, title:"USMA West Point Invited Speaker", image:"/images/usma_logo.png", link:"https://www.westpoint.edu/", description:"I was invited by Brigadier General Michael Phillips (Professor and Head, Department of Mathematical Sciences 2006-2016) to give a special talk over the utilization of Linear Algebra techniques for high-speed computer vision video processing to track cellular movement and extract the physics of biological systems." },
    { id:6, title:"SPS Blake Lilly Prize", image:"/images/sps_logo.jpg", link:"https://www.spsnational.org/awards/blake-lilly-prize/2014/university-central-arkansas", description:"The Blake Lilly Prize, named after the late Blake Lilly and given in his honor, recognizes SPS chapters and individuals who make a genuine effort to positively influence the attitudes of school children and the general public about physics." },
    { id:7, title:"SPS Marsh W. White Award", image:"/images/sps_logo.jpg", link:"https://www.spsnational.org/awards/marsh-w-white-outreach-award/2014/university-central-arkansas", description:"Marsh W. White Awards are made to SPS chapters to support projects designed to promote interest in physics among students and the general public. The Marsh W. White Award dates back to 1975 and is named in honor of Dr. Marsh W. White for his long years of service to Sigma Pi Sigma. Dr. White has served as Executive Secretary (1930-67), President (1968-70), and Historian (1970-90) of Sigma Pi Sigma." },
    { id:8, title:"SPS Outstanding Chapter Award", image:"/images/sps_logo.jpg", link:"https://www.spsnational.org/awards/outstanding-chapter", description:"The Society of Physics Students (SPS) Outstanding Chapter Award is given annually to recognize chapters that demonstrate excellence in physics activities, outreach, and community building.  It's a prestigious award that highlights the chapter's involvement in professional development, research, and promoting physics within their institution and beyond.  Winning chapters are considered to be among the top 10% of all SPS chapters nationwide." },
    { id:9, title:"2017 LG Ultrawide Festival Winner", image:"/images/lg_ultrawide.jpeg", link:"https://www.youtube.com/watch?v=EIBED5owJhc", description:"The 2017 LG Ultrawide Festival was a contest hosted by LG Electronics where participants submitted videos showcasing their 'dream setup' and how an LG ultrawide monitor would enhance it.  The grand prize winner received $10,000 worth of gaming gear, and other prizes included LG ultrawide monitors." }
]

export default function AwardsPage()
{
    const MilitaryAwardsList = military_awards.map( ma => 
            <div key={ma.id} className="Job text-base italic text-slate-700 font-bold">
                <a href={ma.link} target="_blank" rel="noopener noreferrer ">{ma.title}</a>
            </div>);

    const AwardsList = awards.map( aw => {
        return(
            <div key={aw.id} className="py-4 container mx-auto ">
                <div class="grid grid-cols-[120px_1fr]">
                    <div class="hidden md:flex row-span-2 p-4 justify-center items-center">
                        <div><img src={aw.image} className="justify-center items-center w-full" alt="Award" /> </div>
                    </div>
                    <div className="Award text-bold text-slate-700 text-xl">
                        <a href={aw.link} target="_blank" rel="noopener noreferrer ">{aw.title}</a>
                    </div>
                    <div className="AwardDesc text-base text-slate-800">
                        {aw.description}
                    </div>
                </div>
            </div>
        );
    });

    return(
        <>
            <div className="text-3xl">Awards & Honors</div>
            <div className="text-pretty">
                <div className="text-2xl">
                    Career Awards & Honors
                </div>
                <hr className="p-2" />
                {AwardsList}
                <hr className="p-2" />
                <div className="text-2xl">
                    Military Awards
                </div>
                <hr className="p-2" />
                <div className="py-4 container mx-auto ">
                    <div class="grid grid-cols-[250px_1fr_1fr]">
                        <div class="hidden md:flex p-4 px-6 justify-center items-center" style={{gridRow: "1 / 14"}}>
                            <div><img src="/images/military_awards/full_rack.png" className="justify-center items-center w-full" alt="USAF Full Rack" /> </div>
                        </div>
                        {MilitaryAwardsList}
                    </div>
                </div>
            </div>
        </>
    );
}
// List of education
export const education = [
    { id:1, school:"Northeastern University", degree:"PhD, Condensed Matter Physics", start:"May 2020", end:"Sep 2024",
    associations:["NSF Graduate Research Fellow", "Northeastern Graduate Student Ambassador"], dissertation:"Harnessing Machine Learning and Computational Modeling for Optimizing the Experimental Synthesis of 2D Quantum Materials",
    dissertation_link:"https://search.proquest.com/openview/d75ee8364ba717946b5e2b0663fbba0a/1?pq-origsite=gscholar&cbl=18750&diss=y", school_image:"/images/northeastern_logo.jpg", text_primary:"#000000", text_secondary:"#A4804A" },
    { id:2, school:"Northeastern University", degree:"MS, Condensed Matter Physics", start:"Sep 2018", end:"May 2020",
    associations:[], dissertation:false,
    dissertation_link:false, school_image:"/images/northeastern_logo.jpg", text_primary:"#000000", text_secondary:"#A4804A" },
    { id:3, school:"Harvard Extension School", degree:"Graduate Certificate, Nanotechnology", start:"Sep 2017", end:"May 2018",
    associations:[], dissertation:false,
    dissertation_link:false, school_image:"/images/harvard_extension_school_logo.jpeg", text_primary:"#000000", text_secondary:"#A51C30" },
    { id:4, school:"University of Central Arkansas", degree:"BS, Major: Physics, Minor: Mathematics", start:"Aug 2008", end:"May 2015",
    associations:["President, Society of Physics Students"], dissertation:false,
    dissertation_link:false, school_image:"/images/uca_logo.jpeg", text_primary:"#7C878E", text_secondary:"#582C83" }
];



export default function EducationPage()
{
    const EducationList = education.map( edu => {
        var dissHTML = "";
        var row_sp = "row-span-3";
        if(edu.dissertation){
            dissHTML = <p className="Dissertation text-slate-800 text-base"><a href={edu.dissertation_link} target="_blank" rel="noopener noreferrer" className="underline">{edu.dissertation}</a></p>;
            row_sp = "row-span-4";
        }
        const row_sp_cn = row_sp+" px-4 justify-center items-center"
        return( 
        <div key={edu.id} className="py-4 container mx-auto ">
            <div class="grid grid-cols-[100px_1fr]">
                <div class={row_sp_cn}>
                    <div><img src={edu.school_image} className="hidden md:flex justify-center items-center w-full" alt="School Logo" /> </div>
                </div>

                <div className="block md:flex SchoolNameDate justify-between font-bold text-lg">
                    <div className="SchoolName">{edu.school}</div>
                    <div className="SchoolDate">{edu.start}-{edu.end}</div>
                </div>

                <div className="Degree text-base italic text-slate-700 font-bold" style={{color: edu.text_secondary}}>
                    {edu.degree}
                </div>
                
                {dissHTML}
                
                <div className='text-gray-500 text-base'>
                    {edu.associations.map( (assoc, idx) => {
                        const isLast = idx === edu.associations.length - 1;
                        return (
                            <span key={idx}>
                                {assoc ? assoc : ''}{isLast?'':'; '}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>);
    });
    return(
        <>
            <div className="text-3xl">Education</div>
            <div className="text-pretty">
                {EducationList}
            </div>
        </>
    );
}
// I only explicitly built this because stupid Google Scholar doesn't allow for scraping
export const ScholarLink = "https://scholar.google.com/citations?user=VZYf1WUAAAAJ&hl=en";
export const OrcIDLink = 'https://orcid.org/0000-0003-2489-1066'
export const OrcID = '0000-0003-2489-1066'

export const publications = [
    { title: 'Robotic fluidic coupling and interrogation of multiple vascularized organ chips', id:1, 
        link:'https://www.nature.com/articles/s41551-019-0497-x', skillsUsed: [ 2 ], subSkillsUsed: [ 13, 15, 16 ] },
    { title: 'A tissue-engineered scale model of the heart ventricle', id:2, 
        link:'https://www.nature.com/articles/s41551-018-0271-5', skillsUsed: [ 2, 7, 8, 10 ], subSkillsUsed: [ 10, 14, 51, 56, 57, 58, 67, 71 ] },
    { title: 'Recent advances in 2D material theory, synthesis, properties, and applications', id:3, 
        link:'https://pubs.acs.org/doi/abs/10.1021/acsnano.2c12759', skillsUsed: [ 4, 5 ], subSkillsUsed: [ 21, 23, 28, 29 ] },
    { title: 'Synchronized stimulation and continuous insulin sensing in a microfluidic human Islet on a Chip designed for scalable manufacturing', id:4, 
        link:'https://pubs.rsc.org/en/content/articlehtml/2019/lc/c9lc00253g', skillsUsed: [ 8 ], subSkillsUsed: [ 56, 57, 58, 71 ] },
    { title: 'Automated fabrication of photopatterned gelatin hydrogels for organ-on-chips applications', id:5, 
        link:'https://iopscience.iop.org/article/10.1088/1758-5090/aa96de/meta', skillsUsed: [ 1, 7 ], subSkillsUsed: [ 1, 52 ] },
    { title: 'Toward improved myocardial maturity in an organ-on-chip platform with immature cardiac myocytes', id:6, 
        link:'https://journals.sagepub.com/doi/abs/10.1177/1535370217701006', skillsUsed: [ 7 ], subSkillsUsed: [ 72 ] },
    { title: 'A robotic platform for fluidically-linked human body-on-chips experimentation', id:7, 
        link:'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8057865/', skillsUsed: [ 2 ], subSkillsUsed: [ 13, 15, 16 ] },
    { title: 'Fattening chips: hypertrophy, feeding, and fasting of human white adipocytes in vitro', id:8, 
        link:'https://pubs.rsc.org/en/content/articlehtml/2020/lc/d0lc00508h', skillsUsed: [ 1 ], subSkillsUsed: [ 1 ] },
    { title: 'Dispersion-free highly accurate color recognition using excitonic 2D materials and machine learning', id:9, 
        link:'https://www.sciencedirect.com/science/article/pii/S1369702122002255', skillsUsed: [ 2, 5 ], subSkillsUsed: [ 12, 29 ] },
    { title: 'Harnessing Machine Learning and Computational Modeling for Optimizing the Experimental Synthesis of 2D Quantum Materials', id:10, 
        link:'https://search.proquest.com/openview/d75ee8364ba717946b5e2b0663fbba0a/1?pq-origsite=gscholar&cbl=18750&diss=y', skillsUsed: [ 1, 3, 4, 5, 7 ], subSkillsUsed: [ 1, 2, 3, 4, 5, 6, 7, 17, 18, 21, 22, 23, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 52, 55, 59, 60, 61, 62, 63 ] }
]

export const presentations = [
    { title:'Leveraging Deep Neural Networks and Density Functional Theory to guide two-dimensional material synthesis using Chemical Vapor Deposition', id: 1,
        link:'https://ui.adsabs.harvard.edu/abs/2023APS..MARN28009F/abstract', skillsUsed:[1, 3, 4, 5 ], subSkillsUsed:[ 1, 2, 3, 4, 5, 6, 7, 17, 18, 23, 28, 29, 30, 31, 33, 38, 39, 41, 52, 59, 60, 61, 62, 63 ] },
    { title:'Utilizing AI and TD-DFT Calculated Raman Response to Optimize CVD Synthesis Parameters of K<sub>2</sub>CoS<sub>2</sub>', id: 2,
        link:'https://www.mrs.org/meetings-events/presentation/2022_mrs_fall_meeting/2022_mrs_fall_meeting-3779638', skillsUsed:[1, 3, 4, 5 ], subSkillsUsed:[ 1, 2, 3, 4, 5, 6, 7, 17, 18, 23, 28, 29, 30, 31, 33, 38, 39, 41, 52, 59, 60, 61, 62, 63 ] },
    { title:'Engineering Three-Dimensional Biological Scaffolds Using a Modified Rotary Jet Spinning System', id: 3,
        link:'https://www.nnin.org/sites/default/files/2013_reu_ra/2013nninRA_Ferrier.pdf', skillsUsed:[ 2, 7, 8 ], subSkillsUsed:[ 10, 15, 51, 56, 57, 58 ] },
    { title:'Three-dimensional printed acoustic mufflers and aeroacoustic resonators', id: 4,
        link:'https://pubs.aip.org/asa/jasa/article-abstract/136/4_Supplement/2127/675676', skillsUsed:[ 1, 2, 3, 7, 8 ], subSkillsUsed:[ 1, 9, 11, 14, 20, 52, 56, 57, 58, 59, 71 ] },
    { title:'21st Annual Student Research Symposium', id: 5,
        link:'https://uca.edu/cose/files/2010/11/2015-CNSM-Poster-Symposium-Book.pdf', skillsUsed:[ 1, 2, 3, 7, 8 ], subSkillsUsed:[ 1, 9, 11, 14, 20, 52, 56, 57, 58, 59, 71 ] },
]

export const patents = [
    { title:'Microfluidic trapping chip and uses thereof for culture and assay of cell clusters and objects', id: 1,
        link:'https://patents.google.com/patent/US20210197196A1/en' },
]


export default function PublicationsPage()
{
    return(
        <>
            <div className="text-3xl">Publications</div>
            <div className="text-pretty">
                <p>Cool Publications things here built from a list</p>
            </div>
        </>
    );
}
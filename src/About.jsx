export default function AboutPage()
{
    return(
        <>
            <div className="text-3xl">About John</div>
            <div className="text-pretty">
                <p className="indent-8">John is decorated veteran of the United States Air Force, serving in both Iraq (OIF) and Afghanistan (OEF), and is a National Science Fellow. His expertise is in experimental <a href="https://en.wikipedia.org/wiki/Condensed_matter_physics" target="_blank" className="underline" rel="noopener noreferrer">condensed matter physics</a> with a strong background in computational physics and machine learning.
                His PhD work focused on utilizing Quantum Chemistry (<a href="https://en.wikipedia.org/wiki/Density_functional_theory" target="_blank" className="underline" rel="noopener noreferrer">Density Functional Theory</a>) simulations to predict the thermodynamic
                limitations of <a href="https://www.nature.com/collections/jehfiahbeb" target="_blank" className="underline" rel="noopener noreferrer">2D quantum material</a> synthesis in a Chemical Vapor Deposition (<a href="https://en.wikipedia.org/wiki/Chemical_vapor_deposition" target="_blank" className="underline" rel="noopener noreferrer">CVD</a>) system. John has worked on materials such
                as <a href="https://en.wikipedia.org/wiki/Graphene" target="_blank" className="underline" rel="noopener noreferrer">Graphene</a>, <a href="https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.035420" target="_blank" className="underline" rel="noopener noreferrer">K<sub>2</sub>CoS<sub>2</sub></a>, <a href="https://en.wikipedia.org/wiki/Molybdenum_disulfide" target="_blank" className="underline" rel="noopener noreferrer">MoS<sub>2</sub></a>, and <a href="https://en.wikipedia.org/wiki/Molybdenum_diselenide" target="_blank" className="underline" rel="noopener noreferrer">MoSe<sub>2</sub></a>.</p>
                <p className="indent-8">His research has also involved <a href='https://search.proquest.com/openview/d75ee8364ba717946b5e2b0663fbba0a/1?pq-origsite=gscholar&cbl=18750&diss=y' className="underline" target="_blank" rel="noopener noreferrer">developing Deep Neural Network and Bayesian Optimization with Gaussian Processes models with Tensorflow 
                to analyze experimental results to converge synthesis. His work utilizing these techniques has led to the discovery of new methods
                for synthesizing high quality monolayer graphene with lower costs and energy usage.</a></p>
            </div>
        </>
    );
}

import { useState } from "react";

export default function Navigation() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (<>
        <nav className="w-screen z-40 border-b-slate-500 shadow bg-slate-900">
            <div className="w-5/6 justify-self-center flex p-8 text-slate-50">
                <div className="flex w-full">
                    <div className={isNavOpen ? "hidden": "block max-w-80 sm:max-h-28"}>
                        <div className="text-slate-50 text-lg bold">
                            John Ferrier, PhD
                        </div>
                        <div className="text-slate-500 text-sm italic">
                            Condensed Matter Physicist with expertise in Machine Learning, 2D Materials Synthesis, and Computational Physics
                        </div>
                    </div>
                    <button className={isNavOpen ? "hidden": "md:hidden navbar-burger flex items-center text-blue-600 p-3 w-full justify-end" } onClick={() => setIsNavOpen((prev) => !prev)}>
                        <svg className="block h-8 w-8 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <div className={isNavOpen ? "block w-screen h-screen z-50" : "hidden"}>
                    <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
                        <svg
                            className="h-8 w-8 text-gray-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                    <ul className="inline-block w-full py-8">
                        <li className="p-4 hover:bg-green-200 hover:text-slate-900"><a href='/'>Home</a></li>
                        <li className="p-4 hover:bg-green-200 hover:text-slate-900"><a href='/publications'>Publications</a></li>
                        <li className="p-4 hover:bg-green-200 hover:text-slate-900"><a href='/projects'>Projects</a></li>
                        <li className="p-4 hover:bg-green-200 hover:text-slate-900"><a href='/skills'>Skillsets</a></li>
                    </ul>
                </div>
                <ul className="hidden md:flex w-full justify-end">
                    <li className="p-4 hover:bg-green-200 hover:text-slate-900"><a href='/'>Home</a></li>
                    <li className="p-4 hover:bg-green-200 hover:text-slate-900"><a href='/publications'>Publications</a></li>
                    <li className="p-4 hover:bg-green-200 hover:text-slate-900"><a href='/projects'>Projects</a></li>
                    <li className="p-4 hover:bg-green-200 hover:text-slate-900"><a href='/skills'>Skillsets</a></li>
                </ul>
            </div>
        </nav>
    </>);
}
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import SLMJS from './SLM';
import SkillsCard from "./resume_components/Skills";
import HomePage from './Home';
import Navigation from './Navigation';




function App() {
  return (
    <>
    <Navigation />
    <div className='w-5/6 justify-self-center'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsCard />} />
          <Route path="/skills/" element={<SkillsCard />} />
          <Route path="/skills/:page" element={<SkillsCard />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;

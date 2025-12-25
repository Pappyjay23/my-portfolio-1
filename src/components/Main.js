import React from 'react';
import About from './About';
import Contact from './Contact';
import HeroSection from './HeroSection';
import Skills from './Skills';
import Works from './Works';

const Main = ({nav, handleNav, closeNav}) => {
  return(
    <div onClick={closeNav } className='main'>
        <HeroSection nav={nav} handleNav={handleNav} />
        <About />
        <Skills />
        <Works />
        <Contact />
    </div>
  )
};

export default Main;

import React from 'react';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';


const Home = () => {
    return (
        <>
            <Projects />
            <div className='relative -top-44'>
                <About />
            </div>
            {/* <Skills /> */}
            <Contact />
        </>
    );
};

export default Home;
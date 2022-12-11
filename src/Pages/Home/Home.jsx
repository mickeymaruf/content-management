import React from 'react';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';


const Home = () => {
    return (
        <>
            <Projects />
            <div className='relative -top-32 ml-16'>
                <h1 className='text-5xl font-medium'>Skills</h1>
                <div className='w-20 h-1 bg-white mt-2 rounded-full'></div>
            </div>
            <Skills />
            <Contact />
        </>
    );
};

export default Home;
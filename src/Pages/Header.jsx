import React, { useState } from 'react';
import picture from '../assets/picture.png'
import { TypeAnimation } from 'react-type-animation';
import { BsDownload } from 'react-icons/bs';
import Navbar from '../components/Navbar';

const Header = () => {
    return (
        <header id='home' className='bannerBg pb-64'>
            <Navbar />
            <section className='w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-between py-8'>
                <div className='flex-1'>
                    <h2 className='text-3xl'>
                        <span className='wave'>👋</span> Hi there,
                    </h2>

                    <h1 className='font-bold mt-3 mb-5'>
                        <span className='text-5xl block'>I'm Maruf</span>
                        <span className='text-[2rem] md:text-5xl'>
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer', // Types 'One'
                                    1000, // Waits 1s
                                    'MERN Stack Developer', // Deletes 'One' and types 'Two'
                                    2000, // Waits 2s
                                    'Front Stac', // Types 'Three' without deleting 'Two'
                                ]}
                                // wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <p className='text-xl font-thin'>
                        I'm a full-stack JavaScript developer with a passion for developing scalable web applications and working across the full stack. I've built some web apps from the ground up using ReactJs, NodeJs, and MongoDB.
                    </p>
                    <a className='inline-block' target="_blank" href="https://drive.google.com/file/d/1NRpCgZKKHvl80tYBgPLPhwb6OkmX6Gx6/view?usp=share_link">
                        <button className='btn flex items-center gap-3 mt-5'><BsDownload /> Resume</button>
                    </a>
                </div>
                <div className='flex-1'>
                    <img className='my__Picture ml-auto' src={picture} alt="" />
                </div>
            </section>
        </header>
    );
};

export default Header;
import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillHome, AiOutlineProject } from 'react-icons/ai'
import picture from '../assets/picture.png'
import { TypeAnimation } from 'react-type-animation';
import { BsDownload } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import { HiBars3BottomLeft, HiOutlineXMark, HiWrenchScrewdriver } from 'react-icons/hi2';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <header id='home' className='bannerBg pb-64'>
            <nav className='relative'>
                <div className='w-11/12 mx-auto flex justify-between items-center py-8'>
                    <h1 className='text-3xl font-bold'>MARUF</h1>
                    <ul className='hidden md:flex gap-10 text-xl text-muted'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <ul className='hidden md:flex gap-10'>
                        <li><a target="_blank" href="https://github.com/mickeymaruf"><AiFillGithub className='h-8 w-8' /></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/mickeymaruf/"><AiFillLinkedin className='h-8 w-8' /></a></li>
                        <li><a target="_blank" href="https://www.facebook.com/mickeymaruf"><AiFillFacebook className='h-8 w-8' /></a></li>
                    </ul>
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HiBars3BottomLeft className={`h-8 w-8 ${toggle && 'opacity-0'} duration-300`} />
                    </div>
                </div>
            </nav>
            <div className={`md:hidden backdrop-blur-lg py-10 ${toggle ? 'right-0' : '-right-20'} top-0 fixed h-screen duration-500 flex flex-col justify-center z-50 border-l border-slate-900`}>
                <div className='px-5 absolute top-0 pt-8' onClick={() => setToggle(!toggle)}>
                    <HiOutlineXMark className='h-8 w-8' />
                </div>
                <ul className='px-5 flex flex-col gap-8'>
                    <li><a href="#home"><AiFillHome className='h-8 w-8' /></a></li>
                    <li><a href="#skills"><HiWrenchScrewdriver className='h-8 w-8' /></a></li>
                    <li><a href="#projects"><AiOutlineProject className='h-8 w-8' /></a></li>
                    <li><a href="#contact"><AiOutlinePhone className='h-8 w-8' /></a></li>
                    <li><a target="_blank" href="https://github.com/mickeymaruf"><AiFillGithub className='h-8 w-8' /></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/mickeymaruf/"><AiFillLinkedin className='h-8 w-8' /></a></li>
                    <li><a target="_blank" href="https://www.facebook.com/mickeymaruf"><AiFillFacebook className='h-8 w-8' /></a></li>
                </ul>
            </div>
            <section className='w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-between py-8'>
                <div className='flex-1'>
                    <h2 className='text-3xl'>
                        <span className='wave'>👋</span> Hi there,
                    </h2>

                    <h1 className='text-5xl font-bold mt-3 mb-5'>
                        I'm Maruf <br />
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
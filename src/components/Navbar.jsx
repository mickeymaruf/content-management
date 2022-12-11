import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillHome, AiOutlineProject } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai';
import { HiBars3BottomLeft, HiOutlineXMark, HiWrenchScrewdriver } from 'react-icons/hi2';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <nav className='relative'>
                <div className='w-11/12 mx-auto flex justify-between items-center py-8'>
                    <Link to="/"><h1 className='text-3xl font-bold'>MARUF</h1></Link>
                    <ul className='hidden md:flex gap-10 text-xl text-muted'>
                        <li><Link to="/#projects">Projects</Link></li>
                        <li><Link to="/#skills">Skills</Link></li>
                        <li><Link to="/#about">About</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>
                        <li><Link to="/#contact">Contact</Link></li>
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
        </>
    );
};

export default Navbar;
import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import { HiBars3BottomLeft, HiOutlineXMark } from 'react-icons/hi2';
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
                    <div className='md:hidden cursor-pointer' onClick={() => setToggle(!toggle)}>
                        <HiBars3BottomLeft className={`h-8 w-8 ${toggle && 'opacity-0'} duration-300`} />
                    </div>
                </div>
            </nav>
            <div className={`md:hidden backdrop-blur-lg py-10 ${toggle ? 'right-0' : '-right-20'} top-0 fixed h-screen duration-500 flex flex-col justify-center z-50 border-l border-slate-900`}>
                <div className='px-3 absolute top-0 left-1/2 -translate-x-1/2 pt-8 cursor-pointer' onClick={() => setToggle(!toggle)}>
                    <HiOutlineXMark className='h-8 w-8' />
                </div>
                <ul className='px-3 flex flex-col items-center gap-6 text-center'>
                    <Link to="#home"><li className='w-full bg-slate-700 text-xs font-medium p-1 -rotate-45'>Home</li></Link>
                    <Link to="#projects"><li className='w-full bg-slate-700 text-xs font-medium p-1 -rotate-45'>Projects</li></Link>
                    <Link to="#about"><li className='w-full bg-slate-700 text-xs font-medium p-1 -rotate-45'>About</li></Link>
                    <Link to="#skills"><li className='w-full bg-slate-700 text-xs font-medium p-1 -rotate-45'>Skills</li></Link>
                    <Link to="/blog"><li className='w-full bg-slate-700 text-xs font-medium p-1 -rotate-45'>Blogs</li></Link>
                    <Link to="#contact"><li className='w-full bg-slate-700 text-xs font-medium p-1 -rotate-45'>Contact</li></Link>
                    <li><a target="_blank" href="https://github.com/mickeymaruf"><AiFillGithub className='h-8 w-8' /></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/mickeymaruf/"><AiFillLinkedin className='h-8 w-8' /></a></li>
                    <li><a target="_blank" href="https://www.facebook.com/mickeymaruf"><AiFillFacebook className='h-8 w-8' /></a></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
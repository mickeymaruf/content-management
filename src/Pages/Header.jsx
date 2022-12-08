import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import picture from '../assets/picture.png'

const Header = () => {
    return (
        <header>
            <nav className='w-11/12 mx-auto flex justify-between items-center py-8'>
                <h1 className='text-3xl font-bold'>MARUF</h1>
                <ul className='flex gap-10 text-xl text-muted'>
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <ul className='flex gap-10'>
                    <li><AiFillGithub className='h-8 w-8' /></li>
                    <li><AiFillLinkedin className='h-8 w-8' /></li>
                    <li><AiFillFacebook className='h-8 w-8' /></li>
                </ul>
            </nav>
            <div className='w-10/12 mx-auto flex items-center justify-between py-8'>
                <div className='flex-1'>
                    <h2 className='text-3xl'>
                        👋 Hi there,
                    </h2>
                    <h1 className='text-5xl font-bold mt-3 mb-5'>
                        I'm Maruf <br />
                        Full Stack Developer
                    </h1>
                    <p className='text-xl font-thin'>
                        I'm a full-stack JavaScript developer with a passion for developing scalable web applications and working across the full stack. I've built some web apps from the ground up using ReactJs, NodeJs, and MongoDB.
                    </p>
                </div>
                <div className='flex-1'>
                    <img className='my__Picture ml-auto' src={picture} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;
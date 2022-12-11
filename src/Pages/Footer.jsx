import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='w-10/12 mx-auto border-t border-slate-800 text-slate-300'>
            <div className='flex flex-col md:flex-row gap-10 md:gap-40 py-10'>
                <div>
                    <p className='text-sm font-bold text-slate-500'>CALL</p>
                    <h2 className='text-lg mt-4'>+880 1827407166</h2>
                </div>
                <div>
                    <p className='text-sm font-bold text-slate-500'>EMAIL</p>
                    <h2 className='text-lg mt-4'>mickeymaruf@gmail.com</h2>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-center justify-between pb-12 pt-5 px-3'>
                <p className='text-lg text-slate-400'>© {new Date().getFullYear()} Md Maruf Hossain</p>
                <ul className='flex gap-8'>
                    <li><a target="_blank" href="https://github.com/mickeymaruf"><AiFillGithub className='h-8 w-8' /></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/mickeymaruf/"><AiFillLinkedin className='h-8 w-8' /></a></li>
                    <li><a target="_blank" href="https://www.facebook.com/mickeymaruf"><AiFillFacebook className='h-8 w-8' /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
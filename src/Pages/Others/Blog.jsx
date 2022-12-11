import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='bg-slate-900 min-h-screen text-white flex flex-col items-center justify-center'>
            <h1 className='text-5xl'>Cooming Soon...</h1>
            <Link to="/"><button className='btn mt-8 flex items-center gap-2 text-sm'><AiOutlineArrowLeft /> Go Home</button></Link>
        </div>
    );
};

export default Blog;
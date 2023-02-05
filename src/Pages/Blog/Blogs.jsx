import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

const Blogs = () => {
    return (
        <section className='bg-[url("https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png")] bg-no-repeat bg-cover bg-center py-10'>
            <div className='w-10/12 mx-auto grid grid-cols-3 gap-5'>
                {
                    [...Array(10).keys()].map(i => <BlogCard />)
                }
            </div>
        </section>
    );
};

export default Blogs;
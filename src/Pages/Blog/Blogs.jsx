import React from 'react';
import { useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getBlogsData from '../../redux/thunk/blogs/getBlogsData';
import BlogCard from './BlogCard';

const Blogs = () => {
    const blogs = useSelector(state => state.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogsData());
    }, [])

    return (
        <section className='bg-[url("https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png")] bg-no-repeat bg-cover bg-center py-10'>
            <div className='w-10/12 mx-auto'>
                <div className='flex justify-between items-center mb-8'>
                    <div className='flex gap-2 text-sm items-center'>
                        <p>Tags:</p>
                        <div className='bg-slate-600 px-3 py-2 w-fit rounded-full'>React</div>
                        <div className='bg-slate-600 px-3 py-2 w-fit rounded-full'>Node</div>
                        <div className='bg-slate-600 px-3 py-2 w-fit rounded-full'>Mongo</div>
                        <div className='bg-slate-600 px-3 py-2 w-fit rounded-full'>Science</div>
                        <div className='bg-slate-600 px-3 py-2 w-fit rounded-full'>Redux</div>
                        <div className='bg-slate-600 px-3 py-2 w-fit rounded-full'>Life</div>
                        <div className='bg-slate-600 px-3 py-2 w-fit rounded-full'>Computer Science</div>
                    </div>
                    <div className='flex gap-2 text-sm'>
                        <div className='bg-slate-600 px-3 py-2 w-fit rounded-full'>Sort by first upload</div>
                        <div className='bg-slate-600 px-3 py-2 w-fit rounded-full'>Sort by last upload</div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;
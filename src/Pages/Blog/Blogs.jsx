import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleSort } from '../../redux/actionCreators/filterActions';
import getBlogsData from '../../redux/thunk/blogs/getBlogsData';
import BlogCard from './BlogCard';
import Breadcrumbs from './Components/Breadcrumbs';

const Blogs = () => {
    const blogs = useSelector(state => state.blog.blogs);
    const { sortBy } = useSelector(state => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogsData());
    }, [])

    return (
        <section className='bg-[url("https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png")] bg-no-repeat bg-cover bg-center py-10'>
            <div className='w-10/12 mx-auto'>
                <Breadcrumbs />
            </div>
            <div className='w-10/12 mx-auto grid grid-cols-12 items-start gap-10'>
                <div className='col-span-4 sticky top-0 border border-slate-600 p-5 rounded-lg'>
                    <p>Tags:</p>
                    <div className='mt-3 mb-8 flex flex-wrap gap-2 text-sm items-center'>
                        <div className='bg-slate-600 px-3 py-2 w-fit rounded-full'>React</div>
                        <div className='bg-slate-600 px-3 py-2 w-fit rounded-full'>Node</div>
                        <div className='bg-slate-600 px-3 py-2 w-fit rounded-full'>Mongo</div>
                        <div className='bg-slate-600 px-3 py-2 w-fit rounded-full'>Science</div>
                        <div className='bg-slate-600 px-3 py-2 w-fit rounded-full'>Redux</div>
                        <div className='bg-slate-600 px-3 py-2 w-fit rounded-full'>Life</div>
                        <div className='bg-slate-600 px-3 py-2 w-fit rounded-full'>Computer Science</div>
                    </div>
                    <p>Sort by:</p>
                    <div className='mt-3 flex gap-2 text-sm'>
                        <button onClick={() => dispatch(toggleSort('first_upload'))} type='button' className={`${sortBy === 'first_upload' ? 'bg-indigo-700' : 'bg-slate-600'} px-3 py-2 w-fit rounded-full`}>First upload</button>
                        <button onClick={() => dispatch(toggleSort('last_upload'))} type='button' className={`${sortBy === 'last_upload' ? 'bg-indigo-700' : 'bg-slate-600'} px-3 py-2 w-fit rounded-full`}>Last upload</button>
                    </div>
                    <div>
                        <Link to="/create-blog">
                            <button type='submit' className='btn mt-8 mx-auto flex items-center bg-slate-700 gap-2 text-sm'>Create A Blog</button>
                        </Link>
                    </div>
                </div>
                <div className='col-span-8 grid grid-cols-2 gap-5'>
                    {
                        blogs
                            .sort((a, b) => {
                                if (sortBy === 'first_upload') {
                                    return new Date(b.createdAt) - new Date(a.createdAt)
                                }
                                return new Date(a.createdAt) - new Date(b.createdAt)
                            })
                            .map(blog => <BlogCard key={blog._id} blog={blog} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;
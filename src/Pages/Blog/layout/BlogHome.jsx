import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { toggleSort, toggleTag } from '../../../redux/actionCreators/filterActions';
import getBlogsData from '../../../redux/thunk/blogs/getBlogsData';
import Breadcrumbs from '../Components/Breadcrumbs';

const tagsList = ["React", "Node", "Next.js", "Science", "Redux", "RedwoodJS", "Computer"];

const BlogHome = () => {
    const { sortBy, tags } = useSelector(state => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogsData());
    }, [])

    return (
        <section className='bg-[url("https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png")] bg-no-repeat bg-cover bg-center py-10'>
            <div className='w-10/12 mx-auto'>
                <Breadcrumbs />
            </div>
            <div className='w-10/12 mx-auto lg:grid grid-cols-12 items-start gap-10'>
                <div className='col-span-4 lg:sticky top-0 border border-slate-600 p-5 rounded-lg'>
                    <p>Tags:</p>
                    <div className='mt-3 mb-8 flex flex-wrap gap-2 text-sm items-center'>
                        {
                            tagsList.map((tag, idx) => <button onClick={() => dispatch(toggleTag(tag))} type="button" key={idx} className={`${tags.includes(tag) ? 'bg-indigo-700' : 'bg-slate-600'} px-3 py-2 w-fit rounded-full`}>{tag}</button>)
                        }
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

                <div className='col-span-8 mt-10 lg:mt-0'>
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default BlogHome;
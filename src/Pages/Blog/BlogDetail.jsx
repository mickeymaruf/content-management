import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Breadcrumbs from './Components/Breadcrumbs';

const BlogDetail = () => {
    const blog = useLoaderData();
    const { _id, title, thumbURL, description } = blog;

    return (
        <section className='bg-[url("https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png")] bg-no-repeat bg-cover bg-center py-10 mb-10'>
            <div className='w-6/12 mx-auto'>
                <Breadcrumbs />
            </div>
            <div className="w-6/12 mx-auto p-6 shadow-md backdrop-blur-3xl border border-slate-700 text-gray-100 rounded-lg">
                <h1 className='text-4xl font-bold mb-4'>{title}</h1>
                <p className="flex items-center text-sm mb-5">
                    6 min ago
                </p>

                <div className="flex space-x-4 mb-5">
                    <img alt="" src="https://avatars.githubusercontent.com/u/99499442?v=4" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Maruf</a>
                        <span className="text-xs dark:text-gray-400">@mickeymaruf</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={thumbURL} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    </div>
                    <div className="space-y-2">
                        <p className="leading-snug dark:text-gray-400">{description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetail;
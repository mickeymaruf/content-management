import React from 'react';
import Breadcrumbs from './Components/Breadcrumbs';

const BlogDetail = () => {
    return (
        <section className='bg-[url("https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png")] bg-no-repeat bg-cover bg-center py-10 mb-10'>
            <div className='w-6/12 mx-auto'>
                <Breadcrumbs />
            </div>
            <div className="w-6/12 mx-auto p-6 shadow-md backdrop-blur-3xl border border-slate-700 text-gray-100 rounded-lg">
                <h1 className='text-4xl font-bold mb-4'>Memetoberfest 2022 - an open source meme contest by daily.dev!</h1>
                <p className="flex items-center text-sm mb-5">
                    6 min ago
                </p>

                <div className="flex space-x-4 mb-5">
                    <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Leroy Jenkins</a>
                        <span className="text-xs dark:text-gray-400">@InHuOfficial</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    </div>
                    <div className="space-y-2">
                        <p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetail;
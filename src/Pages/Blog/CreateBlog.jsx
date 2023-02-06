import React from 'react';
import { useDispatch } from 'react-redux';
import postBlogData from '../../redux/thunk/blogs/postBlogData';
import Breadcrumbs from './Components/Breadcrumbs';

const CreateBlog = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const thumbURL = form.thumbURL.value;
        const description = form.description.value;
        const tags = form.tags.value;

        const blog = { title, thumbURL, description, tags };
        dispatch(postBlogData(blog))
        form.reset();
    }

    return (
        <section className='bg-[url("https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png")] bg-no-repeat bg-cover bg-center py-10 mb-10'>
            <div className='w-6/12 mx-auto'>
                <Breadcrumbs />
            </div>
            <form onSubmit={handleSubmit} className="w-6/12 mx-auto flex flex-col space-y-12 backdrop-blur-3xl rounded-lg shadow-md p-6">
                <fieldset>
                    <div className="mb-2">
                        <p className="font-medium text-2xl">Create a Blog</p>
                    </div>
                    <div className='mb-2'>
                        <label className="block text-sm mb-2">Post title</label>
                        <input type="text" name="title" placeholder="Lorem ipsum dolor sit, amet adipisicing" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-slate-900 bg-opacity-40 border border-slate-600 p-2 focus:ring-slate-400 dark:border-gray-700" required />
                    </div>
                    <div className='mb-2'>
                        <label className="block text-sm mb-2">Thumb URL</label>
                        <input type="text" name="thumbURL" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-slate-900 bg-opacity-40 border border-slate-600 p-2 focus:ring-slate-400 dark:border-gray-700" required />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm mb-2">Description</label>
                        <textarea name="description" placeholder="What is the blog about?" rows={4} className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-slate-900 bg-opacity-40 border border-slate-600 p-2 focus:ring-slate-400 dark:border-gray-700" required></textarea>
                    </div>
                    <div className='mb-2'>
                        <label className="block text-sm mb-2">Tags</label>
                        <input type="text" name="tags" placeholder="React, Node, MongoDB" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-slate-900 bg-opacity-40 border border-slate-600 p-2 focus:ring-slate-400 dark:border-gray-700" required />
                    </div>
                    {/* <div>
                        <label className="block text-sm mb-2">Photo</label>
                        <div className="flex items-center space-x-2">
                            <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                            <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">Change</button>
                        </div>
                    </div> */}
                    <button type='submit' className='btn mt-8 flex items-center bg-slate-700 gap-2 text-sm'>Create</button>
                </fieldset>
            </form>
        </section>
    );
};

export default CreateBlog;
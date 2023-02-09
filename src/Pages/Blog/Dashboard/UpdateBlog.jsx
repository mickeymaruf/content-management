import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import updateBlogData from '../../../redux/thunk/blogs/updateBlogData';
import Breadcrumbs from '../Components/Breadcrumbs';

const UpdateBlog = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const blog = useLoaderData();
    const { _id, title, thumbURL, description, tags } = blog;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const thumbURL = form.thumbURL.value;
        const description = form.description.value;
        const tags = form.tags.value;

        const blog = { title, thumbURL, description, tags };
        dispatch(updateBlogData(_id, blog))
            .then(data => {
                if (data.status === "success") {
                    navigate("/dashboard");
                    toast('Blog posted!', {
                        icon: '👏',
                    });
                }
            })

    }

    return (
        <section className='bg-[url("https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png")] bg-no-repeat bg-cover bg-center py-10 mb-10'>
            <div className='w-6/12 mx-auto'>
                <Breadcrumbs />
            </div>
            <form onSubmit={handleSubmit} className="w-6/12 mx-auto flex flex-col space-y-12 backdrop-blur-3xl rounded-lg shadow-md p-6">
                <fieldset>
                    <div className="mb-2">
                        <p className="font-medium text-2xl">Update a Blog</p>
                    </div>
                    <div className='mb-2'>
                        <label className="block text-sm mb-2">Post title</label>
                        <input type="text" name="title" placeholder="Lorem ipsum dolor sit, amet adipisicing" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-slate-900 bg-opacity-40 border border-slate-600 p-2 focus:ring-slate-400 dark:border-gray-700" required defaultValue={title} />
                    </div>
                    <div className='mb-2'>
                        <label className="block text-sm mb-2">Thumb URL</label>
                        <input type="text" name="thumbURL" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-slate-900 bg-opacity-40 border border-slate-600 p-2 focus:ring-slate-400 dark:border-gray-700" required defaultValue={thumbURL} />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm mb-2">Description</label>
                        <textarea name="description" placeholder="What is the blog about?" rows={4} className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-slate-900 bg-opacity-40 border border-slate-600 p-2 focus:ring-slate-400 dark:border-gray-700" required defaultValue={description}></textarea>
                    </div>
                    <div className='mb-2'>
                        <label className="block text-sm mb-2">Tags</label>
                        <input type="text" name="tags" placeholder="React, Node, MongoDB" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-slate-900 bg-opacity-40 border border-slate-600 p-2 focus:ring-slate-400 dark:border-gray-700" required defaultValue={tags} />
                    </div>
                    <button type='submit' className='btn mt-8 flex items-center bg-slate-700 gap-2 text-sm'>Update</button>
                </fieldset>
            </form>
        </section>
    );
};

export default UpdateBlog;
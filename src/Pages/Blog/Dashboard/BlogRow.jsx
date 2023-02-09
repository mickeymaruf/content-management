import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import deleteBlogData from '../../../redux/thunk/blogs/deleteBlogData';
import { FiEdit } from 'react-icons/fi';
import { TbTrash } from 'react-icons/tb';

const BlogRow = (blog) => {
    const { _id, title, thumbURL, description, tags } = blog.blog;
    const dispatch = useDispatch();

    return (
        <div className="flex w-full mb-4 p-3 items-center gap-3 rounded-lg shadow-md border border-slate-600 backdrop-blur-xl text-gray-100">
            <img className='w-44 rounded-lg' src={thumbURL} alt="" />
            <div>
                <Link to={`/blog/${_id}`}>
                    <h4 className='hover:underline underline-offset-2'>{title.length > 35 ? title.slice(0, 35) + '...' : title}</h4>
                </Link>
                <p className='text-sm text-slate-500'>4 hours ago</p>
            </div>
            <div className='ml-auto mr-4 space-x-1'>
                <Link to={`/update-blog/${_id}`}>
                    <button type="button"><FiEdit size={20} /></button>
                </Link>
                <button onClick={() => dispatch(deleteBlogData(_id))} type="button"><TbTrash size={23} /></button>
            </div>
        </div>
    );
};

export default BlogRow;
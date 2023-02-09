import { useSelector } from 'react-redux';
import BlogCard from './BlogCard';

const Blogs = () => {
    const blogs = useSelector(state => state.blog.blogs);
    const { sortBy, tags } = useSelector(state => state.filter);

    return (
        <div className='grid md:grid-cols-2 gap-5'>
            {
                blogs
                    .sort((a, b) => {
                        if (sortBy === 'first_upload') {
                            return new Date(b.createdAt) - new Date(a.createdAt)
                        }
                        return new Date(a.createdAt) - new Date(b.createdAt)
                    })
                    .filter(blog => {
                        if (!tags.length) return blog;
                        // filter logic
                        return tags.filter(tag => blog.tags.split(", ").includes(tag)).length
                    })
                    .map(blog => <BlogCard key={blog._id} blog={blog} />)
            }
        </div>
    );
};

export default Blogs;
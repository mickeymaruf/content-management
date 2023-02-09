import { useSelector } from 'react-redux';
import BlogRow from './BlogRow';

const Dashboard = () => {
    const blogs = useSelector(state => state.blog.blogs);
    const { sortBy, tags } = useSelector(state => state.filter);

    return (
        <>
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
                        // filtering logic
                        return tags.filter(tag => blog.tags.split(", ").includes(tag)).length
                    })
                    .map(blog => <BlogRow key={blog._id} blog={blog} />)
            }
        </>
    );
};

export default Dashboard;
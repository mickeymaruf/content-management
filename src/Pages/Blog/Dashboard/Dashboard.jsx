import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import BlogRow from './BlogRow';

const Dashboard = () => {
    const { blogs, history } = useSelector(state => state.blog);
    const { sortBy, tags } = useSelector(state => state.filter);
    const location = useLocation();

    return (
        <>
            {
                location.pathname.includes("history")
                    ? history.length
                        ? history.map(blog => <BlogRow key={blog._id} blog={blog} />)
                        : <p>No history found !!! <Link className="underline" to="/">Continue Reading.</Link></p>

                    : blogs
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
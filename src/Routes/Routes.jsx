import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import BlogDetail from "../Pages/Blog/BlogDetail";
import Blogs from "../Pages/Blog/Blogs";
import CreateBlog from "../Pages/Blog/CreateBlog";
import Home from "../Pages/Home/Home";
import Project from "../Pages/Projects/Project";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Blogs />
            },
            {
                path: '/blog/:id',
                element: <BlogDetail />
            },
            {
                path: '/create-blog',
                element: <CreateBlog />
            },
        ]
    },
    // {
    //     path: '/projects/:id',
    //     element: <Project />
    // },
    // {
    //     path: '/blog',
    //     element: <Blog />
    // }
])

export default router;
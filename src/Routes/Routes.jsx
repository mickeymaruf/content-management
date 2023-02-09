import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import BlogDetail from "../Pages/Blog/BlogDetail";
import BlogHome from "../Pages/Blog/layout/BlogHome";
// import Blogs from "../Pages/Blog/Blogs";
import CreateBlog from "../Pages/Blog/CreateBlog";
import UpdateBlog from "../Pages/Blog/Dashboard/UpdateBlog";
import Blogs from "../Pages/Blog/Blogs";
import Dashboard from "../Pages/Blog/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <BlogHome />,
                children: [
                    {
                        path: '/',
                        element: <Blogs />,
                    },
                    {
                        path: '/dashboard',
                        element: <Dashboard />,
                    },
                    {
                        path: '/history',
                        element: <Dashboard />,
                    },
                ]
            },
            {
                path: '/blog/:id',
                element: <BlogDetail />,
                loader: ({ params }) => fetch(`https://portfolio-server-iota-ten.vercel.app/blogs/${params.id}/`)
            },
            {
                path: '/create-blog',
                element: <CreateBlog />
            },
            {
                path: '/update-blog/:id',
                element: <UpdateBlog />,
                loader: ({ params }) => fetch(`https://portfolio-server-iota-ten.vercel.app/blogs/${params.id}/`)
            },
        ]
    }
])

export default router;
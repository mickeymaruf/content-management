import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Others/Blog";
import Project from "../Pages/Projects/Project";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
        ]
    },
    {
        path: '/projects/:id',
        element: <Project />
    },
    {
        path: '/blog',
        element: <Blog />
    }
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Blogs from "../pages/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/contact",
                element: <div>contact</div>,
            },

            {
                path: "/admin/login",
                element: <Login />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            // <ProtectedRoute>
            <DashboardLayout />
            // </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "/dashboard/projects",
                element: <Projects />,
            },
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "/dashboard/projects",
                element: <Projects />,
            },
            {
                path: "/dashboard/skills",
                element: <Skills />,
            },
            {
                path: "/dashboard/blogs",
                element: <Blogs />,
            },
        ],
    },
    // {
    //     path: "*",
    //     element: <NotFound />,
    // },
]);

export default router;

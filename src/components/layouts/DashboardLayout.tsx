import { NavLink, Outlet } from "react-router-dom";
import { TbGitPullRequest } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
import { BookText, FileText, Goal } from "lucide-react";

const DashboardLayout = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-12 min-h-screen px-0">
                    {/* Sticky Sidebar */}
                    <div className="md:col-span-4 lg:col-span-3 p-4 lg:p-10 text-center min-h-screen text-black bg-red-200">
                        <div className="sticky top-0">
                            <div className="my-3">
                                <h2 className="text-xl capitalize text-txt">mehedi</h2>
                                <h2 className="text-md text-txt">REID : xhsis</h2>
                            </div>
                            <div className="my-5 space-y-4">
                                <NavLink
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 border p-2 rounded-md ${
                                            isActive ? "bg-black text-white" : "text-txt"
                                        }`
                                    }
                                    to="/"
                                >
                                    <FaUsers className="w-5 h-5 text-accent" />
                                    Portfolio
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 border p-2 rounded-md ${
                                            isActive ? "bg-black text-white" : "text-txt"
                                        }`
                                    }
                                    to="/dashboard"
                                    end
                                >
                                    <BookText className="w-5 h-5 text-accent" />
                                    Dashboard
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 border p-2 rounded-md ${
                                            isActive ? "bg-black text-white" : "text-txt"
                                        }`
                                    }
                                    to="/dashboard/projects"
                                >
                                    <TbGitPullRequest className="w-5 h-5 text-accent" />
                                    Projects
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 border p-2 rounded-md ${
                                            isActive ? "bg-black text-white" : "text-txt"
                                        }`
                                    }
                                    to="/dashboard/skills"
                                >
                                    <Goal className="w-5 h-5 text-accent" />
                                    Skills
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 border p-2 rounded-md ${
                                            isActive ? "bg-black text-white" : "text-txt"
                                        }`
                                    }
                                    to="/dashboard/blogs"
                                >
                                    <FileText className="w-5 h-5 text-accent" />
                                    Blogs
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="md:col-span-8 lg:col-span-9 p-4 lg:p-10 rounded-md bg-red-50">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;

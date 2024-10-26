import { useRef } from "react";
import TitleAnimation from "./TitleAnimation";
import { IBlog } from "../../types";
import BlogCard from "./BlogCard";
import { useGetBlogsQuery } from "@/redux/features/blogs.api";
import { Button } from "./button";
import { Link } from "react-router-dom";

const LatestBlogs = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { data, error, isLoading } = useGetBlogsQuery({});

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching blogs</div>;

    return (
        <>
            <div className="container mx-auto min-h-screen" ref={containerRef}>
                <TitleAnimation text="Blogs" container={containerRef} />

                <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data?.data && data.data.length > 0 ? (
                        data.data.map((blog: IBlog) => (
                            <div key={blog._id}>
                                <BlogCard blog={blog} />
                            </div>
                        ))
                    ) : (
                        <div>No blogs available.</div>
                    )}
                </div>
            </div>
            <div className="text-center">
                <Button>
                    <Link to='/all-blogs'>See All Blogs</Link>
                </Button>
            </div>
        </>
    );
};

export default LatestBlogs;

import BlogCard from "@/components/ui/BlogCard";
import TitleAnimation from "@/components/ui/TitleAnimation";
import { useGetBlogsQuery } from "@/redux/features/blogs.api";
import { IBlog } from "@/types";
import { useRef } from "react";

const AllBlogs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, error, isLoading } = useGetBlogsQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching blogs</div>;
    return (
        <div>

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
        </div>
    );
};

export default AllBlogs;

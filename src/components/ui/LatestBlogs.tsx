import { useRef } from "react";
import TitleAnimation from "./TitleAnimation";
import { IBlog } from "../../types";
import BlogCard from "./BlogCard";

const LatestBlogs = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const blogPosts: IBlog[] = [
        {
            id: "1",
            title: "Getting Started with React",
            excerpt:
                "Learn the basics of React and start building your first app.",
            date: "2023-05-15",
            category: "React",
        },
        {
            id: "2",
            title: "Advanced TypeScript Techniques",
            excerpt: "Dive deep into TypeScript and learn advanced concepts.",
            date: "2023-06-02",
            category: "TypeScript",
        },
        {
            id: "3",
            title: "Building Scalable APIs with Node.js",
            excerpt:
                "Discover best practices for creating robust and scalable APIs.",
            date: "2023-06-20",
            category: "Node.js",
        },
        {
            id: "4",
            title: "CSS Grid Layout Mastery",
            excerpt: "Master CSS Grid and create complex layouts with ease.",
            date: "2023-07-05",
            category: "CSS",
        },
        {
            id: "5",
            title: "Introduction to GraphQL",
            excerpt:
                "Learn how to use GraphQL to build efficient and flexible APIs.",
            date: "2023-07-18",
            category: "GraphQL",
        },
        {
            id: "6",
            title: "State Management with Redux",
            excerpt:
                "Explore Redux for managing complex application states in React. Explore Redux for managing complex application states in React.",
            date: "2023-08-01",
            category: "React",
        },
    ];
    return (
        <div className="container mx-auto" ref={containerRef}>
            <TitleAnimation text="Blogs" container={containerRef} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                blogPosts?.map((blog) => <div key={blog.id}>
                  <BlogCard blog={blog}/>
                </div>)
              }
            </div>
        </div>
    );
};

export default LatestBlogs;

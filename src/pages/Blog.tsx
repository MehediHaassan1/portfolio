import { useGetBlogQuery } from "@/redux/features/blogs.api";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { blogId } = useParams();
  const { data, error, isLoading } = useGetBlogQuery(blogId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching blog</div>;

  // Ensure the data is present
  const blog = data?.data;

  if (!blog) {
    return <div>Blog not found</div>; // Handle case where the blog does not exist
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      {blog.thumbnail && (
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-auto rounded-lg mb-4"
        />
      )}
      <div className="mb-4">
        <span className="text-sm text-gray-500">
          Category: <strong>{blog.category}</strong>
        </span>
        <span className="text-sm text-gray-500 ml-4">
          Created At: <strong>{new Date(blog.createdAt).toLocaleDateString()}</strong>
        </span>
      </div>
      <div
        className="blog-content prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default Blog;

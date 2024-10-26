import { Link } from "react-router-dom";
import { IBlog } from "../../types";
import moment from "moment";

interface IProps {
    blog: IBlog;
}

const BlogCard = ({ blog }: IProps) => {
    console.log(blog);
    const truncateText = (text: string, maxLength: number) => {
        return text.length > maxLength
            ? `${text.slice(0, maxLength)}...`
            : text;
    };

    return (
        <div>
            <div className="max-w-2xl h-56 flex flex-col cursor-pointer px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                        {moment(blog?.createdAt).format("ll")}
                    </span>
                    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
                        {blog.category}
                    </a>
                </div>
                <div className="mt-4 flex-grow">
                    <img
                        className="object-cover w-full h-48"
                        src={blog?.thumbnail}
                        alt={blog?.title}
                    />
                </div>

                {/* Title with two lines truncation */}
                <div className="mt-2 flex-grow">
                    <a
                        href="https://stackdiary.com/"
                        className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline line-clamp-2"
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {truncateText(blog.title, 30)}
                    </a>
                </div>

                {/* "Read more" button aligned at the bottom */}
                <div className="flex items-end justify-between mt-4">
                    <Link
                        to={`/all-blogs/${blog._id}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        Read more ⟶
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;

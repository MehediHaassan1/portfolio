// Blogs.js
import BlogModal from "@/components/modals/BlogModal";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    useCreateBlogsMutation,
    useDeleteBlogsMutation,
    useGetBlogsQuery,
    useUpdateBlogsMutation,
} from "@/redux/features/blogs.api";
import { IBlog } from "@/types";
import { Edit, PlusCircle, Trash } from "lucide-react";
import { useState } from "react";

const Blogs = () => {
    const { data } = useGetBlogsQuery({});
    const [createBlog] = useCreateBlogsMutation();
    const [updateBlog] = useUpdateBlogsMutation();
    const [deleteBlog] = useDeleteBlogsMutation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState<IBlog | null>(null);

    const handleAddBlogPost = (newPost:IBlog) => {
        createBlog(newPost);
    };

    const handleUpdateBlogPost = (updatedPost:IBlog) => {
        const { _id, ...data } = updatedPost;

        updateBlog({
            id: _id,
            data,
        });
    };

    const handleDeleteBlogPost = (id:string) => {
      deleteBlog(id)
    };

    const openModalForCreate = () => {
        setSelectedPost(null);
        setIsModalOpen(true);
    };

    const openModalForEdit = (post:IBlog) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const handleSave = (data:IBlog) => {
        if (selectedPost) {
            handleUpdateBlogPost({ ...data, _id: selectedPost._id });
        } else {
            handleAddBlogPost(data);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Blog Posts
                </h1>
                <Button onClick={openModalForCreate}>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add New Post
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.data &&
                    data?.data?.map((post:IBlog) => (
                        <Card key={post._id}>
                            <CardHeader>
                                <CardTitle>{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{post.category}</p>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => openModalForEdit(post)}
                                >
                                    <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() =>
                                        handleDeleteBlogPost(post._id as string)
                                    }
                                >
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
            </div>

            {isModalOpen && (
                <BlogModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSave}
                    initialData={selectedPost as IBlog || {}}
                />
            )}
        </div>
    );
};

export default Blogs;

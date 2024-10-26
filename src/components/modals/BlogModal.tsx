/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IBlog } from "@/types";
import uploadImageToCloudinary from "@/utils/uploadImageToCloudinary";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Define props interface
interface BlogModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: IBlog) => void;
    initialData?: IBlog;
}

const BlogModal: React.FC<BlogModalProps> = ({ isOpen, onClose, onSave, initialData = {} }) => {
    const [content, setContent] = useState<string>("");
    const [formData, setFormData] = useState<{
        title: string;
        thumbnail: File | null; // File type for the thumbnail
        category: string;
    }>({
        title: "",
        thumbnail: null,
        category: "",
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen && initialData) {
            setFormData({
                title: initialData.title || "",
                thumbnail: initialData.thumbnail ? null : null, // Load existing thumbnail if available
                category: initialData.category || "",
            });
            setContent(initialData.content || "");
        }
    }, [isOpen, initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        let imageUrl = formData.thumbnail || '';

        // Check if a new image file is selected for upload
        if (formData.thumbnail instanceof File) {
            const response = (await uploadImageToCloudinary(formData.thumbnail)) as string;
            console.log(response);
            imageUrl = response 
        }

        await onSave({
            ...formData,
            content,
            thumbnail: imageUrl as string,
        });

        // Clear form data after submission
        setFormData({ title: "", thumbnail: null, category: "" });
        setContent("");
        setIsLoading(false);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {initialData._id ? "Update Blog Post" : "Add New Blog Post"}
                    </DialogTitle>
                    <DialogDescription>
                        {initialData._id ? "Edit the details of your blog post." : "Enter the details of your new blog post."}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="postTitle" className="text-right">Title</Label>
                            <Input
                                id="postTitle"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="postThumbnail" className="text-right">Thumbnail</Label>
                            <Input
                                id="postThumbnail"
                                name="thumbnail"
                                type="file"
                                accept="image/*"
                                onChange={handleChange}
                                className="col-span-3"
                            />
                            {initialData.thumbnail && (
                                <img
                                    src={initialData.thumbnail}
                                    alt="Current thumbnail"
                                    className="col-span-3 max-h-20 mt-2 rounded-md"
                                />
                            )}
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="postCategory" className="text-right">Category</Label>
                            <select
                                id="postCategory"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="col-span-3 border rounded-md p-2"
                            >
                                <option value="">Select a category</option>
                                <option value="React">React</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="TypeScript">TypeScript</option>
                                <option value="Web Development">Web Development</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="postContent" className="text-right">Content</Label>
                            <ReactQuill
                                id="postContent"
                                className="col-span-3"
                                theme="snow"
                                value={content}
                                onChange={setContent}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? "Saving..." : initialData._id ? "Update Post" : "Add Post"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default BlogModal;

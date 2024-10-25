import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";
import uploadImageToCloudinary from "@/utils/uploadImageToCloudinary";

const ProjectModal = ({ onSubmit, project, closeModal }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState(project ? project.thumbnail : null);
    const [newThumbnailFile, setNewThumbnailFile] = useState(null);
    const [liveLink, setLiveLink] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (project) {
            setTitle(project.title);
            setDescription(project.description);
            setLiveLink(project.liveLink);
            setThumbnail(project.thumbnail);
        } else {
            setTitle("");
            setDescription("");
            setLiveLink("");
            setThumbnail(null);
        }
        setNewThumbnailFile(null);
    }, [project]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let uploadedImageUrl = thumbnail;

        if (newThumbnailFile || !project) {
            uploadedImageUrl = await uploadImageToCloudinary(newThumbnailFile);
        }

        setLoading(false);

        const formData = {
            title,
            description,
            liveLink,
            thumbnail: uploadedImageUrl || "",
        };

        onSubmit(formData);
        // closeModal();
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files;
        setNewThumbnailFile(file);
    };

    return (
        <Dialog open onOpenChange={closeModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {project ? "Edit Project" : "Add New Project"}
                    </DialogTitle>
                    <DialogDescription>
                        {project
                            ? "Update the details of your project."
                            : "Enter the details of your new project."}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="thumbnail" className="text-right">
                                Thumbnail
                            </Label>
                            <input
                                type="file"
                                id="thumbnail"
                                accept="image/*"
                                onChange={handleThumbnailChange}
                                className="col-span-3 border p-2 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="live-link" className="text-right">
                                Live Link
                            </Label>
                            <Input
                                id="live-link"
                                value={liveLink}
                                onChange={(e) => setLiveLink(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={loading}>
                            {loading ? "Uploading..." : project ? "Update Project" : "Add Project"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ProjectModal;

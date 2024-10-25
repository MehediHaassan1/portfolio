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
import { FormEventHandler, useEffect, useState } from "react";
import uploadImageToCloudinary from "@/utils/uploadImageToCloudinary";

// Define types for the project and component props
interface Project {
    title: string;
    description: string;
    thumbnail: string;
    liveLink: string;
}

interface ProjectModalProps {
    onSubmit: (data: ProjectFormData) => void;
    project?: Project | null;
    closeModal: () => void;
}

interface ProjectFormData {
    title: string;
    description: string;
    liveLink: string;
    thumbnail: string;
}

const ProjectModal = ({ onSubmit, project, closeModal }: ProjectModalProps) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [thumbnail, setThumbnail] = useState<string | null>(project ? project.thumbnail : null);
    const [newThumbnailFile, setNewThumbnailFile] = useState<FileList | null>(null);
    const [liveLink, setLiveLink] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

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

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setLoading(true);

        let uploadedImageUrl: string | null = thumbnail || null;

        if (newThumbnailFile || !project) {
            uploadedImageUrl = (await uploadImageToCloudinary(newThumbnailFile)) || "";
        }

        setLoading(false);

        const formData: ProjectFormData = {
            title,
            description,
            liveLink,
            thumbnail: uploadedImageUrl || "",
        };

        onSubmit(formData);
    };

    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files || null;
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

import ProjectModal from "@/components/modals/ProjectModal";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    useCreateProjectsMutation,
    useDeleteProjectsMutation,
    useGetProjectsQuery,
    useUpdateProjectsMutation,
} from "@/redux/features/projects.api";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Projects = () => {
    const { data } = useGetProjectsQuery({});
    const [createProject] = useCreateProjectsMutation();
    const [updateProject] = useUpdateProjectsMutation();
    const [deleteProject] = useDeleteProjectsMutation();

    const [editingProject, setEditingProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddProject = (newProject) => {
        if (!editingProject) {
            const { title, description, liveLink, thumbnail } = newProject;
            if (!title || !description || !liveLink || !thumbnail) {
                toast.error(
                    "All fields are required for creating a new project!"
                );
                return; // Prevents modal from closing if there’s an error
            } else {
                createProject(newProject);
            }
        } else {
            updateProject({ data: newProject, id: editingProject._id });
        }

        // Reset state and close modal only if project was created or updated successfully
        setEditingProject(null);
        setIsModalOpen(false);
    };

    const handleCreateProject = () => {
        setEditingProject(null);
        setIsModalOpen(true);
    };

    const handleEditProject = (project) => {
        setEditingProject(project);
        setIsModalOpen(true);
    };

    const handleDeleteProject = (id) => {
        deleteProject(id);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Projects
                </h1>
                <Button onClick={handleCreateProject}>Add New Project</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.data &&
                    data?.data?.map((project) => (
                        <Card key={project._id}>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-[224px] h-[105px] object-cover"
                                />
                                <p className="text-gray-600">
                                    {project.description.length > 50
                                        ? `${project.description.slice(
                                              0,
                                              50
                                          )} ...`
                                        : project.description}
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => handleEditProject(project)}
                                >
                                    <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() =>
                                        handleDeleteProject(project._id)
                                    }
                                >
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
            </div>

            {isModalOpen && (
                <ProjectModal
                    onSubmit={handleAddProject}
                    project={editingProject}
                    closeModal={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

export default Projects;

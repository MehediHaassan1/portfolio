import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Edit, PlusCircle, Trash } from "lucide-react";
import SkillModal from "@/components/modals/SkillModal";
import {
    useCreateSkillsMutation,
    useDeleteSkillsMutation,
    useGetSkillsQuery,
    useUpdateSkillsMutation,
} from "@/redux/features/skills.api";
import { ISkill } from "@/types";

const Skills = () => {
    const [createSkill] = useCreateSkillsMutation();
    const { data } = useGetSkillsQuery({});
    const [deleteSkill] = useDeleteSkillsMutation();
    const [updateSkill] = useUpdateSkillsMutation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState<ISkill | null>(null);

    const handleAddOrUpdateSkill = (newSkill: ISkill) => {
        if (newSkill._id) {
            updateSkill({ id: newSkill?._id, data: newSkill });
        } else {
            createSkill(newSkill);
        }
        setIsModalOpen(false);
    };

    const handleDeleteSkill = (id: string) => {
        deleteSkill(id);
    };

    const openModalForNewSkill = () => {
        setSelectedSkill(null); // Clear selection when adding a new skill
        setIsModalOpen(true);
    };

    const openModalForEditSkill = (skill: ISkill) => {
        setSelectedSkill(skill); // Set the selected skill for editing
        setIsModalOpen(true);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Skills
                </h1>
                <Button onClick={openModalForNewSkill}>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add New Skill
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.data &&
                    data?.data.map((skill: ISkill) => (
                        <Card key={skill._id}>
                            <CardHeader>
                                <CardTitle>{skill.skillName}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <img
                                    src={skill.skillImage}
                                    alt={skill.skillName}
                                    className="rounded-full h-28 w-28 object-cover"
                                />
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => openModalForEditSkill(skill)}
                                >
                                    <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() =>
                                        handleDeleteSkill(skill._id as string)
                                    }
                                >
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
            </div>
            <SkillModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddOrUpdateSkill}
                skill={selectedSkill} // Pass selected skill to modal
            />
        </div>
    );
};

export default Skills;

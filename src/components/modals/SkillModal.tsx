import { useEffect, useState } from "react";
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
import uploadImageToCloudinary from "@/utils/uploadImageToCloudinary";
import { ISkill } from "@/types"; 

interface SkillModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (skill: ISkill) => void; 
    skill: ISkill | null; 
}

const SkillModal: React.FC<SkillModalProps> = ({ isOpen, onClose, onSubmit, skill }) => {
    const [skillName, setSkillName] = useState("");
    const [skillImage, setSkillImage] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState(""); 

    useEffect(() => {
        // Reset state when the modal opens for a new skill or closes
        if (isOpen) {
            if (skill) {
                setSkillName(skill.skillName);
                setImageUrl(skill.skillImage); 
                setSkillImage(skill.skillImage); 
            } else {
                setSkillName("");
                setImageUrl(""); 
                setSkillImage(null);
            }
        }
    }, [isOpen, skill]);

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;
        if (file) {
            setImageUrl(URL.createObjectURL(file[0]));
            const imageLink = await uploadImageToCloudinary(file);
            setSkillImage(imageLink as string);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newSkill = {
            _id: skill?._id,
            skillName,
            skillImage: skillImage || imageUrl,
        };
        onSubmit(newSkill);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{skill ? "Edit Skill" : "Add New Skill"}</DialogTitle>
                    <DialogDescription>
                        {skill ? "Update the details of your skill." : "Enter the details of your new skill."}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="skillName" className="text-right">
                                Skill Name
                            </Label>
                            <Input
                                id="skillName"
                                value={skillName}
                                onChange={(e) => setSkillName(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="skillImage" className="text-right">
                                Skill Image
                            </Label>
                            <Input
                                id="skillImage"
                                type="file"
                                onChange={handleImageChange}
                                className="col-span-3"
                            />
                        </div>
                        {imageUrl && (
                            <div className="grid grid-cols-3 justify-center mt-4">
                                <img
                                    src={imageUrl}
                                    alt="Skill Preview"
                                    className="col-start-2 h-28 rounded-full object-cover w-full"
                                />
                            </div>
                        )}
                    </div>
                    <DialogFooter>
                        <Button type="submit">{skill ? "Update Skill" : "Add Skill"}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default SkillModal;

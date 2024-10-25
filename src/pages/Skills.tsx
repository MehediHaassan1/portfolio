import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit, PlusCircle, Trash } from "lucide-react";
import { useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([
    { id: 1, name: 'React', level: 90 },
    { id: 2, name: 'Node.js', level: 85 },
    { id: 3, name: 'TypeScript', level: 80 },
    { id: 4, name: 'UI/UX Design', level: 75 },
  ])

  const handleAddSkill = (newSkill) => {
    setSkills([...skills, { id: skills.length + 1, ...newSkill }])
  }

  const handleDeleteSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id))
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Skills</h1>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <PlusCircle className="mr-2 h-4 w-4" /> Add New Skill
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Skill</DialogTitle>
                      <DialogDescription>
                        Enter the details of your new skill.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={(e) => {
                      e.preventDefault()
                      const formData = new FormData(e.target)
                      handleAddSkill({
                        name: formData.get('skillName'),
                        level: parseInt(formData.get('skillLevel'))
                      })
                    }}>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="skillName" className="text-right">
                            Name
                          </Label>
                          <Input id="skillName" name="skillName" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="skillLevel" className="text-right">
                            Level (0-100)
                          </Label>
                          <Input id="skillLevel" name="skillLevel" type="number" min="0" max="100" className="col-span-3" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Add Skill</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill) => (
                  <Card key={skill.id}>
                    <CardHeader>
                      <CardTitle>{skill.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-gray-600 h-2.5 rounded-full" style={{width: `${skill.level}%`}}></div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDeleteSkill(skill.id)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
    </div>
  );
};

export default Skills;
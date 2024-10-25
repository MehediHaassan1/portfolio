import { User } from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";

const Dashboard = () => {
    return (
        <div>
            <>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                    Dashboard
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <Card>
                        <CardHeader>Total Projects</CardHeader>
                        {/* <div className="h-4 w-4 text-muted-foreground" /> */}
                        <CardContent>
                            <div className="text-2xl font-bold">{3}</div>
                            <p className="text-xs text-muted-foreground">
                                +2 from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <User className="h-4 w-4 text-muted-foreground" />{" "}
                            Skills
                        </CardHeader>
                        {/*  */}
                        <CardContent>
                            <div className="text-2xl font-bold">{5}</div>
                            <p className="text-xs text-muted-foreground">
                                +1 new skill added
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <User className="h-4 w-4 text-muted-foreground" />
                            Blogs
                        </CardHeader>
                        {/*  */}
                        <CardContent>
                            <div className="text-2xl font-bold">{2}</div>
                            <p className="text-xs text-muted-foreground">
                                +1 new blogs added
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                    <div className="col-span-4">
                        <div>
                            <div>Recent Projects</div>
                        </div>
                        <div>
                            <div defaultValue="all" className="w-full">
                                <div>
                                    <div>All Projects</div>
                                    <div>Active</div>
                                    <div>Completed</div>
                                </div>
                                <div>
                                    <div className="space-y-4">
                                        {[1, 2, 3, 4, 5].map((project) => (
                                            <div
                                                key={project}
                                                className="flex items-center"
                                            >
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                                <span className="font-medium">
                                                    project name
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="space-y-4">
                                        {[1, 2, 3, 4, 5]
                                            .slice(0, 2)
                                            .map((project) => (
                                                <div
                                                    key={project}
                                                    className="flex items-center"
                                                >
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                    <span className="font-medium">
                                                        project name
                                                    </span>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="space-y-4">
                                        {[1, 2, 3, 4, 5]
                                            .slice(-1)
                                            .map((project) => (
                                                <div
                                                    key={project}
                                                    className="flex items-center"
                                                >
                                                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                                                    <span className="font-medium">
                                                        project name
                                                    </span>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div>
                            <div>Top Skills</div>
                            <div>Your most endorsed skills</div>
                        </div>
                        <div>
                            <div className="space-y-4">
                                {[1, 2, 3, 4, 5].map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center justify-between"
                                    >
                                        <span className="font-medium">
                                            skill name
                                        </span>
                                        <div className="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded-full"
                                                style={{ width: 70 }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Dashboard;

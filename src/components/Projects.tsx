import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
    const projects = [
        {
            title: "Crypto Screener Application",
            image: "https://images.unsplash.com/photo-1725610588150-c4cd8b88affd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
            live: "",
        },
        {
            title: "Crypto Screener Application",
            image: "https://images.unsplash.com/photo-1725610588150-c4cd8b88affd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
            live: "",
        },
        {
            title: "Crypto Screener Application",
            image: "https://images.unsplash.com/photo-1725610588150-c4cd8b88affd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
            live: "",
        },
    ];

    return (
        <div className="min-h-screen w-full bg-black">
            <div className="container mx-auto">
                <div className="w-fit relative py-10">
                    <h1 className="text-7xl md:text-9xl font-extrabold opacity-10 text-gray-100">
                        Projects
                    </h1>
                    <h1 className="absolute inset-0 flex justify-center items-center text-4xl lg:text-6xl font-bold text-white tracking-widest">
                        Projects
                    </h1>
                </div>

                <div className="max-w-5xl mx-auto space-y-10 py-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row ${
                                index % 2 === 1 ? "md:flex-row-reverse" : ""
                            } items-center justify-center w-full h-full p-5 space-y-5 md:space-y-0 md:space-x-5`}
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-1/2 h-full bg-red-500 overflow-hidden rounded-lg flex justify-center items-center">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="w-full md:w-1/2 h-full space-y-5 text-left">
                                <h1 className="text-white text-6xl">
                                    0{index + 1}
                                </h1>
                                <h3 className="text-white text-2xl lg:text-3xl">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-500">
                                    {project.description}
                                </p>
                                <a href={project.live} className="mt-5 block">
                                    <FiExternalLink className="text-white size-6" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

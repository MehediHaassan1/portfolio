import { FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongoose } from "react-icons/si";
import { FaNode, FaGithub } from "react-icons/fa6";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import TitleAnimation from "./TitleAnimation";
import { useRef } from "react";

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const skills = [
        { icon: <FaJs className="size-16" />, name: "JavaScript" },
        { icon: <BiLogoTypescript className="size-16" />, name: "TypeScript" },
        { icon: <FaReact className="size-16" />, name: "ReactJS" },
        { icon: <RiNextjsFill className="size-16" />, name: "NextJS" },
        { icon: <FaNode className="size-16" />, name: "NodeJS" },
        { icon: <SiExpress className="size-16" />, name: "ExpressJS" },
        { icon: <BiLogoMongodb className="size-16" />, name: "MongoDB" },
        { icon: <SiMongoose className="size-16" />, name: "Mongoose" },
        {
            icon: <RiTailwindCssFill className="size-16" />,
            name: "Tailwind CSS",
        },
        { icon: <FaBootstrap className="size-16" />, name: "Bootstrap" },
        { icon: <IoLogoFirebase className="size-16" />, name: "Firebase" },
        { icon: <FaGithub className="size-16" />, name: "Github" },
    ];

    return (
        <div id="skills" ref={containerRef} className="container mx-auto my-10">
            <TitleAnimation text="Skills" container={containerRef} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-between gap-6">
                {skills.map((item) => (
                    <div className="size-44  mx-auto border border-black rounded relative group flex items-center justify-center hover:text-white hover:bg-black duration-500 transition-all">
                        {item.icon}
                        <p className="absolute w-full bottom-0  text-center group-hover:bottom-5 transition-all duration-500 opacity-0 group-hover:opacity-100 text-2xl text-white">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

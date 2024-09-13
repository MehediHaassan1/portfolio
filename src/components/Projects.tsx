import { FiExternalLink } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import TitleAnimation from "./TitleAnimation";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const container = useRef<HTMLDivElement | null>(null);
    const projectDescRefs = useRef<HTMLDivElement[]>([]);
    const projectImageRefs = useRef<HTMLDivElement[]>([]);

    const addToRefs = (
        el: HTMLDivElement | null,
        refArray: React.MutableRefObject<HTMLDivElement[]>
    ) => {
        if (el && !refArray.current.includes(el)) {
            refArray.current.push(el);
        }
    };

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            projectImageRefs.current.forEach((imageRef, index) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                });
                tl.to(imageRef, { y: -100 }, 0);
                tl.to(projectDescRefs.current[index], { y: -250 }, 0);
            });
        });

        return () => context.revert();
    }, []);

    const projects = [
        {
            title: "Ride Ease",
            image: "https://i.ibb.co.com/HrRF3nB/ride-ease.png",
            description:
                "Our Car Rental Reservation System streamlines the entire vehicle booking and rental process, allowing customers to easily reserve cars tailored to their needs. With our intuitive and user-friendly interface, customers can book a vehicle without any hassle, ensuring a seamless experience from start to finish.",
            live: "https://ride-ease-dusky.vercel.app",
        },
        {
            title: "Camp Craze",
            image: "https://i.ibb.co.com/d7Ych8j/camp-craze.png",
            description:
                "Camp Craze is an e-commerce platform for camping enthusiasts, offering a seamless shopping experience for camping gear and accessories. Simplifying the process of exploring and purchasing essentials, it ensures a hassle-free and enjoyable shopping journey.",
            live: "https://camp-crazee.vercel.app",
        },
    ];

    return (
        <div id="projects" ref={container} className="min-h-screen w-full">
            <div className="container mx-auto">
                <TitleAnimation text="Projects" container={container} />

                <div className="max-w-5xl mx-auto space-y-28 py-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row ${
                                index % 2 === 1 ? "md:flex-row-reverse" : ""
                            } items-center justify-center w-full h-full p-5 space-y-5 md:space-y-0 md:space-x-5`}
                        >
                            {/* Image Section */}
                            <div
                                ref={(el) => addToRefs(el, projectImageRefs)}
                                className="w-full md:w-1/2 h-full bg-red-500 overflow-hidden rounded-lg flex justify-center items-center"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text Section */}
                            <div
                                ref={(el) => addToRefs(el, projectDescRefs)}
                                className="w-full md:w-1/2 h-full space-y-5 text-left"
                            >
                                <h1 className="text-6xl">0{index + 1}</h1>
                                <h3 className="text-2xl lg:text-3xl">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-500">
                                    {project.description}
                                </p>
                                <a
                                    href={project.live}
                                    target="_black"
                                    className="mt-5 block"
                                >
                                    <FiExternalLink className="size-6" />
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

import { useRef, useState } from "react";
import logo from '../../assets/main-logo.svg';
import { Cross as Hamburger } from "hamburger-react";
import { FiDownload } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import resume from "../../assets/files/resume.pdf";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const smContainer = useRef<HTMLDivElement | null>(null);
    const textRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const addToTextRefs = (el: HTMLAnchorElement | null) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };

    const navigationMenu = [
        { path: "#skills", title: "Skills" },
        { path: "#about-me", title: "About Me" },
        { path: "#projects", title: "Projects" },
        { path: "#contact-me", title: "Contact Me" },
    ];

    useGSAP(() => {
        if (!smContainer.current) return;

        if (isOpen) {
            gsap.set(smContainer.current, {
                y: "-100%",
                height: 0,
                opacity: 0,
            });
            gsap.to(smContainer.current, {
                y: 0,
                height: "calc(100vh - 3rem)",
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                onComplete: () => {
                    gsap.fromTo(
                        textRefs.current,
                        { opacity: 0, y: -40 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: "power3.out",
                            stagger: 0.2,
                        }
                    );
                },
            });
        } else {
            gsap.to(textRefs.current, {
                opacity: 0,
                y: -40,
                duration: 0.6,
                ease: "power3.in",
                stagger: 0.1,
                onComplete: () => {
                    gsap.to(smContainer.current, {
                        y: "0",
                        height: 0,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.in",
                    });
                },
            });
        }
    }, [isOpen]);

    return (
        <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 sticky top-0 left-0 right-0 z-10">
            <div className="container mx-auto relative">
                <div className="h-12 lg:h-20 w-full flex items-center justify-between ">
                    <div>
                        <img src={logo} alt="M." className="size-12" />
                    </div>

                    {/* large device */}
                    <div className="md:flex items-center md:gap-3 lg:gap-5 hidden">
                        {navigationMenu.map((item, idx) => (
                            <a
                                className="md:px-3 md:py-2 px-5 py-3 text-black font-semibold md:text-[18px] text-[20px]"
                                href={item.path}
                                key={idx}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className=" text-md lg:text-xl px-3 py-2 lg:px-5 lg:py-4 bg-black text-white rounded">
                            <a
                                className="flex items-center gap-2"
                                href={resume}
                                download="Mehedi_Hassan_Resume"
                            >
                                Resume <FiDownload />
                            </a>
                        </button>
                        <div className="md:hidden">
                            <Hamburger
                                toggled={isOpen}
                                toggle={setOpen}
                                size={32}
                                duration={0.8}
                            />
                        </div>
                    </div>
                </div>
                {/* small & medium device */}
                <div
                    ref={smContainer}
                    className="absolute left-0 right-0 bg-black flex items-center justify-center md:hidden"
                    style={{
                        top: "3rem",
                        bottom: 0,
                        overflow: "hidden",
                    }}
                >
                    <div className="flex flex-col gap-4 items-center justify-center px-4 py-8 text-white space-y-5">
                        {navigationMenu.map((item, idx) => (
                            <div key={idx} className="overflow-hidden">
                                <a
                                    ref={addToTextRefs}
                                    href={item.path}
                                    className="h-fit bg-black text-2xl p-0 block"
                                >
                                    {item.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

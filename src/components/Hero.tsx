import bannerImage from "../assets/banner-image.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaFacebook } from "react-icons/fa6";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
    const iconRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (iconRef.current) {
            const icons: NodeListOf<HTMLAnchorElement> =
                iconRef.current.querySelectorAll("a");

            icons.forEach((icon: HTMLAnchorElement) => {
                const magneticEffect = (e: MouseEvent) => {
                    const boundingRect = icon.getBoundingClientRect();
                    const iconCenterX =
                        boundingRect.left + boundingRect.width / 2;
                    const iconCenterY =
                        boundingRect.top + boundingRect.height / 2;
                    const distX = (e.clientX - iconCenterX) / 2; // Adjust effect strength
                    const distY = (e.clientY - iconCenterY) / 2;

                    gsap.to(icon, {
                        x: distX,
                        y: distY,
                        duration: 0.4,
                        ease: "power3.out",
                    });
                };

                const resetPosition = () => {
                    gsap.to(icon, {
                        x: 0,
                        y: 0,
                        duration: 0.6,
                        ease: "power3.out",
                    });
                };

                icon.addEventListener("mousemove", magneticEffect);
                icon.addEventListener("mouseleave", resetPosition);

                // Clean up event listeners on unmount
                return () => {
                    icon.removeEventListener("mousemove", magneticEffect);
                    icon.removeEventListener("mouseleave", resetPosition);
                };
            });
        }
    }, []);

    return (
        <div className="container mx-auto min-h-screen my-10">
            <div className="min-h-screen w-full flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div className="h-full w-full md:w-1/2 order-last md:order-first">
                    <h1 className="text-[28px] md:text-[24px] lg:text-[36px]">
                        Hello I'am{" "}
                        <span className="font-bold">Mehedi Hassan</span>
                    </h1>
                    <h1 className="text-[32px] md:text-[24px] lg:text-[40px]">
                        MERN Stack{" "}
                        <span className="font-bold outline-text">
                            Developer
                        </span>
                    </h1>
                    <h1 className="text-[36px] md:text-[28px] lg:text-[44px] font-bold">
                        Bangladesh 2.0
                    </h1>
                    <p className="text-[16px] lg:text-[18px] my-4 lg:my-10 text-zinc-600">
                        I am Mehedi Hassan, a passionate MERN stack developer
                        with a knack for creating dynamic, full-stack web
                        applications. My expertise spans from building seamless
                        user interfaces to managing robust backend services. I'm
                        dedicated to leveraging the latest technologies to
                        deliver high-quality solutions.
                    </p>
                    <div className="flex items-center gap-8" ref={iconRef}>
                        <a
                            href="https://github.com/MehediHaassan1"
                            target="_blank"
                            className="size-12 flex items-center justify-center rounded"
                        >
                            <FaGithub className="size-8 text-black" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mehedi-hassan-barat/"
                            target="_blank"
                            className="size-12 flex items-center justify-center rounded "
                        >
                            <FaLinkedin className="size-8 text-black" />
                        </a>
                        <a
                            href="https://www.instagram.com/mehedi_hassan_538/"
                            target="_blank"
                            className="size-12 flex items-center justify-center rounded "
                        >
                            <FaSquareInstagram className="size-8 text-black" />
                        </a>
                        <a
                            href="https://www.facebook.com/mmehedihassanbarat/"
                            target="_blank"
                            className="size-12 flex items-center justify-center rounded "
                        >
                            <FaFacebook className="size-8 text-black" />
                        </a>
                    </div>
                </div>
                <div className="w-4/5 mx-auto md:mx-0 md:w-1/2 border-black border-b-2 md:flex items-center justify-center">
                    <img
                        src={bannerImage}
                        alt="banner"
                        className="h-full w-full lg:w-4/5"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;

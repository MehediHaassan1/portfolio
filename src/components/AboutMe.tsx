import { useRef } from "react";
import aboutMe from "../assets/about-me.svg";
import TitleAnimation from "./TitleAnimation";

const AboutMe = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <div
            id="about-me"
            ref={containerRef}
            className="container mx-auto min-h-screen py-10"
        >
            <TitleAnimation
                text="About"
                sub="About Me"
                container={containerRef}
            />

            <div className="h-full w-full flex flex-col lg:flex-row items-center justify-between gap-6">
                <img src={aboutMe} alt="" />
                <div className="space-y-5 text-zinc-500">
                    <p>
                        I’m a dedicated full-stack developer with a strong
                        background in both design and development, specializing
                        in MERN Stack. I’m driven by a passion for transforming
                        ideas into polished digital experiences that not only
                        function seamlessly but also delight users. Crafting
                        exceptional user interfaces with pixel-perfect
                        precision, optimizing performance, and delivering
                        high-quality, readable code are the core values I bring
                        to every project.
                    </p>
                    <p>
                        Since beginning my journey in 2022, I’ve embraced
                        continuous growth and evolution, constantly adapting to
                        new technologies and methodologies. Now, in my early
                        thirties, after 2 years of dedication, I’m at the
                        forefront of building innovative web applications using
                        cutting-edge technologies like TypeScript, React.js,
                        Next.js, Node.js, TailwindCSS. Each day, I strive to
                        push boundaries, bringing both the technical and visual
                        aspects of products to life.
                    </p>
                    <p>
                        Beyond coding, I actively engage with the tech
                        community, especially around early-stage startups,
                        drawing inspiration from their journeys on platforms
                        like LinkedIn, YouTube, and Dev.to. I regularly share my
                        experiences, learnings, and tech tips on these
                        platforms, where I also build in public. Additionally,
                        I’m a regular contributor on GitHub, collaborating with
                        fellow developers and open-source enthusiasts.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface TitleAnimationProps {
    text: string;
    sub?: string;
    container: React.RefObject<HTMLDivElement>;
}

const TitleAnimation: React.FC<TitleAnimationProps> = ({
    text,
    sub,
    container,
}) => {
    const charactersRef = useRef<(HTMLSpanElement | null)[]>([]);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            charactersRef.current.forEach((char) => {
                if (char) {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: container.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    });
                    const top = Math.floor(Math.random() * -50) - 25;
                    tl.to(char, { y: top }, 0);
                }

                char!.addEventListener("mouseenter", () => {
                    gsap.to(char, {
                        scale: 1.3,
                        duration: 0.8,
                        ease: "elastic.out(1, 0.3)",
                    });
                });

                char!.addEventListener("mouseleave", () => {
                    gsap.to(char, {
                        scale: 1,
                        duration: 0.8,
                        ease: "elastic.out(1, 0.3)",
                    });
                });
            });
        });

        return () => context.revert();
    }, [container]);

    return (
        <div>
            <div className="w-fit relative py-10">
                <h1 className="text-7xl md:text-9xl font-extrabold opacity-20 text-black">
                    {text}
                </h1>
                <h1 className="absolute inset-0 flex justify-center items-center text-4xl lg:text-6xl font-bold tracking-widest">
                    {(sub ? sub : text)
                        .split("")
                        .map((letter: string, i: number) => (
                            <span
                                key={i}
                                ref={(el) => (charactersRef.current[i] = el)}
                                className="inline-block relative"
                            >
                                {letter}
                            </span>
                        ))}
                </h1>
            </div>
        </div>
    );
};

export default TitleAnimation;

import TitleAnimation from "./TitleAnimation";
import { useRef } from "react";
import { useGetSkillsQuery } from "@/redux/features/skills.api";
import { ISkill } from "@/types";

const LatestSkills = () => {
    const { data } = useGetSkillsQuery({});
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div id="skills" ref={containerRef} className="container mx-auto my-10">
            <TitleAnimation text="Skills" container={containerRef} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-between gap-6">
                {data?.data &&
                    data?.data?.map((item: ISkill, idx: number) => (
                        <div
                            key={idx}
                            className="size-44  mx-auto border border-black rounded relative group flex items-center justify-center hover:text-black  duration-500 transition-all"
                        >
                            <img src={item.skillImage} alt={item?.skillName} />
                            <p className="absolute w-full bottom-0  text-center group-hover:bottom-5 transition-all duration-500 opacity-0 group-hover:opacity-100 text-2xl text-black">
                                {item.skillName}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default LatestSkills;

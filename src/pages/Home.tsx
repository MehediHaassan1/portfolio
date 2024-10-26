import LatestSkills from "@/components/ui/LatestSkills";
import AboutMe from "../components/ui/AboutMe";
import Contact from "../components/ui/Contact";
import Hero from "../components/ui/Hero";
import LatestBlogs from "../components/ui/LatestBlogs";
import LatestProjects from "../components/ui/LatestProjects";

const Home = () => {
    return (
        <div>
            <Hero />
            <LatestSkills />
            <AboutMe />
            <LatestProjects />
            <LatestBlogs />
            <Contact />
        </div>
    );
};

export default Home;

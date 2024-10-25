import AboutMe from "../components/ui/AboutMe";
import Contact from "../components/ui/Contact";
import Hero from "../components/ui/Hero";
import LatestBlogs from "../components/ui/LatestBlogs";
import Projects from "../components/ui/Projects";
import Skills from "../components/ui/Skills";

const Home = () => {
    return (
        <div>
            <Hero />
            <Skills />
            <AboutMe />
            <Projects />
            <LatestBlogs />
            <Contact />
        </div>
    );
};

export default Home;

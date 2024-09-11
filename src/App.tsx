import { useEffect } from "react";
import Lenis from "lenis";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time:number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <Skills />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;

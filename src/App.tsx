import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
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

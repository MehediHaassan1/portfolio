import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Skills />
            <AboutMe />
            <Projects />    
        </>
    );
}

export default App;

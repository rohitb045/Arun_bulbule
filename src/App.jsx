import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import Skill from "./components/Skill";
import Experience from "./components/Ex";

export default function App() {
  return (
    <div className="bg-background text-on-surface">
      <Navbar />
      <Hero />
      <About />
      <Work />
     <Skill />
     <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
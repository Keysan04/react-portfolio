import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Info from "./components/Info";
import Skill from "./components/Skill";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <input type="checkbox" id="darkMode" />

      <div className="wrapper">
        <label htmlFor="darkMode">
          <i class="fa-solid fa-circle-half-stroke"></i>
        </label>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Work />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}

        <Hero />
        <Info />
        <Skill />
        <Work />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

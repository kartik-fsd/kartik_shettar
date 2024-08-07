import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project.jsx";
import Resume from "../pages/Resume";
import ContactForm from "../pages/ContactForm";
import NOT_FOUND from "../pages/NOT_FOUND.jsx";
//import TransitionComponent from "../Components/Transisition/Transition";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<NOT_FOUND />} />
      </Routes>
    </>
  );
};

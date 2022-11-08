import "./App.css";
import React from "react";
import Header from "./components/Header";
// import About from "./components/About";
import Home from "./components/Home";
import Resume from "./components/Resume";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Repos from "./components/repos";


const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
          {/* <Route path="/About" element={<About />} />  */}
          {/* <Route exact path="/Projects" element={<Projects />} /> */}
          {/* <Route path="/Resume" element={<Resume />} /> */}
        </Routes>

      </BrowserRouter>
    </>
  );
};

export default App;

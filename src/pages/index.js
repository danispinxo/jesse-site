import * as React from "react";
import "normalize.css";
import "./styles.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TopNavbar from "../components/Navbar";
import Homepage from "./Homepage";
import About from "./About";
import Contact from "./Contact";
import Resources from "./HelpAndResources";
import Services from "./Services";
import Guide from "./Guide";

export default function IndexPage () {
  return (
    <BrowserRouter>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/services" element={<Services />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
  </BrowserRouter>
  )
};

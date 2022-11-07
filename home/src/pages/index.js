import * as React from "react";
import "../styles/homepage.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TopNavbar from "../components/Navbar";
import Homepage from "./Homepage";
import About from "./About";
import Contact from "./Contact";
import Resources from "./HelpAndResources";
import Services from "./Services";
import Guide from "./Guide";

const IndexPage = () => {
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
}

export default IndexPage

export const Head = () => {
  <head>
    <title>Jesse Pajuäär Therapy Studios</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;1,400;1,500&family=Lato:ital,wght@0,100;0,400;0,700;0,900;1,400&family=Playfair+Display:wght@600;700;800;900&display=swap');
      @import-normalize;
    </style>
  </head>
}

import * as React from "react";
import TopNavbar from "./components/Navbar";
import Homepage from "./Homepage";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Guide from "./Guide";
import Resources from "./HelpAndResources";
import Footer from "./components/Footer";

const IndexPage = () => {
  return (
    <div>
      <TopNavbar />
      <Homepage />
      <Services />
      <About />
      <Contact />
      <Guide />
      <Resources />
      <Footer />      
    </div>
  )
}

export default IndexPage

export const Head = () => {
  <title>Jesse Pajuaar Therapy Studios</title>
};

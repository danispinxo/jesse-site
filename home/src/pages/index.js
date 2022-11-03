import * as React from "react";
import TopNavbar from "./components/Navbar";
import Homepage from "./Homepage";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Resources from "./HelpAndResources";

const IndexPage = () => {
  return (
    <div>
      <TopNavbar />
      <Homepage />
      <Services />
      <About />
      <Contact />
      <Resources />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

import * as React from "react";
import TopNavbar from "./components/Navbar";
import Homepage from "./Homepage";
import Services from "./Services";

const IndexPage = () => {
  return (
    <div>
      <TopNavbar />
      <Homepage />
      <Services />      
    </div>
  )
}

export default IndexPage

export const Head = () => {
  <title>Jesse Pajuaar Therapy Studios</title>
};

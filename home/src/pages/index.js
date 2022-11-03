import * as React from "react";
import "../styles/homepage.scss";
import TopNavbar from "./components/Navbar";
import Homepage from "./Homepage";

const IndexPage = () => {
  return (
    <div>
      <TopNavbar />
      <Homepage />
    </div>
  )
}

export default IndexPage

export const Head = () => {
  <head>
    <title>Jesse Pajuäär Therapy Studios</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;1,400;1,500&family=Lato:ital,wght@0,100;0,400;0,700;0,900;1,400&family=Playfair+Display:wght@600;700;800;900&display=swap');
    </style>
  </head>
}

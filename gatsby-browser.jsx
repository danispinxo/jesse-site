import * as React from 'react'
import Logo from './src/images/Logo.webp'
import TopNavbar from './src/components/Navbar'

// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
  return (<>
    <TopNavbar />
    {element}
  </>)
}

export const Head = () => {
  return (
    <>
      <html lang="en" />
      <meta name='description' content='Information and contact page for Toronto-based art therapist and psychotherapist.' />
      <link rel="icon" type="image/png" href={Logo}/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;1,400;1,500&family=Lato:ital,wght@0,100;0,400;0,700;0,900;1,400&family=Playfair+Display:wght@600;700;800;900&display=swap" rel="stylesheet"/>
      <title>Jesse Pajuäär Therapy Studios</title>
    </>
  )
}

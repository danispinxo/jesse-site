import React from 'react'
import 'normalize.css'
import './styles.scss'
import { Link } from 'gatsby'
import Logo from '../images/Logo.webp'
import Modal from '../components/Modal'
import JessePhoto from '../images/JessePajuaar.webp'

export default function Homepage () {
  const isBrowser = typeof window !== 'undefined'

  let opened = false
  
  if (isBrowser) {
    opened = typeof window.localStorage.getItem('opened') === 'string'
  }

  return (
    <main>
      <Modal opened={opened}/>

      <div className="quote-banner">
        <div className="quotation-text">
          <div className="quotation">
            &quot;Experience is not what happens to you.<br />
            It is what you do with what happens to you.&quot; <br />
            <div className="name-holder"> - Aldous Huxley -</div>
          </div>

          <Link to="/contact">
            <button className="talk-btn">Let&apos;s Talk</button>
          </Link>

        </div>
      </div>

      <div className='page-content'>
        <div className="about-me">
          <div className="about-me-text">
            <h2 className="about-me-title">About Me</h2>
            <h3 className="about-me-name">Jesse Pajuäär</h3>
            <h4 className="about-me-qualifications">Registered Psychotherapist, DTATI, HBA.</h4>
            <p className="about-me-approach">
              I approach each session with the belief that you are the expert of your own life. There are no judgements or assumptions made during our time. <br/><br/>
              My focus is on collaborating with you to create a space where your voice, your wants, and your unique perspective  can not only be heard, but supported and advocated for.
            </p>
            <p className="about-me-approach">
              You are not the problem, the problem is the problem.
            </p>
          </div>
            
          <img src={JessePhoto} alt="Headshot of Jesse Pajuaar"/>
        </div>

        <div className="homepage-contact">
          <p className="homepage-contact-text">
            Do you feel you need to make some changes but don&apos;t know where or how to begin?
          </p>
          <Link to="/contact">
            <button className="homepage-contact-btn">Contact me now for a no-fee 15 minute consultation</button>
          </Link>
        </div>
      </div>

      <div className="psychology-today-verification">
        <iframe title="Psychology Today Verified -- Jesse Pajuaar" src="https://www-jptherapystudios-com.filesusr.com/html/900dd1_259a81179feffed44176301ed25faa6a.html" />
        <p>&copy; 2022, Jesse Pajuäär Therapy Studios</p>
      </div>
    </main>
  )
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

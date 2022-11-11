import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import '../pages/styles.scss'

export default function TopNavbar () {
  return (
    <div className="navbar">
      <div className="links">
        <link to="/">Home</link>
        <link to="/services">Services</link>
        <link to="/about">About</link>
        <link to="/contact">Contact</link>
        <link to="/resources">Help & Resources</link>
      </div>

      <div className="title">
        <h1>Jesse Pajuäär Therapy Studios</h1>
      </div>

      <div className="btn-holder">
        <a href="https://oab.owlpractice.ca/jpts">
          <button className="client-btn">
            <FontAwesomeIcon icon={faHome} /> <br/>
            Client Portal
          </button>
        </a>
      </div>

    </div>
  )
}

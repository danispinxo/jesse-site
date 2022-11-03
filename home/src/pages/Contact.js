import * as React from "react";

export default function Contact () {
  return (
    <main>
      <h1>Get In Touch</h1>
      <h4>Note: My practice has been moved online for the foreseeable future. Consequent therapy sessions will be limited to secure video or telephone sessions.</h4>

      <div className="contact-info">
        <p>The right fit is the most important part of finding the right therapist.</p>

        <a href="https://www.jptherapystudios.com/4-stepguide">See more on how to choose the right therapist for you</a>

        <p>To contact me for a no-fee 15 minute phone consultation simply fill out the form to the right.</p>
      </div>

      <div className="contact-form">
        <form className="contact-form">
        
          <div className="first-name-form">
            <label for="first-name-id">First Name</label>
            <input name="first-name" id="first-name-id" type="text" placeholder="" required="true" aria-required="true" maxlength="20" value="" />
          </div>

          <div className="last-name-form">
            <label for="last-name-id">Last Name</label>
            <input name="last-name" id="last-name-id" type="text" placeholder="" required="true" aria-required="true" maxlength="35" value="" />
          </div>

          <div className="email-form">
            <label for="email-id">Email address</label>
            <input name="email" id="email-id" type="email" placeholder="" required="true" aria-required="true" pattern="^.+@.+\.[a-zA-Z]{2,63}$" maxlength="250" value="" />
          </div>
          
          <div className="phone-form">
            <label for="phone-id">Phone</label>
            <input name="phone" id="phone-id" type="tel" placeholder="" required="true" aria-required="true" maxlength="12" minlength="12" value=""/>
          </div>

          <div className="location-form" >
            <label for="location-id" >Location</label>
            <input name="location" id="location-id" type="text" placeholder="e.g., Toronto, ON" required="" aria-required="true" maxlength="250" value="" />
          </div>

          <div className="refer-form">
            <label for="refer-id">How did you hear about JPTS?</label>
            <select id="refer-id" required="true" aria-required="true">
              <option value="" disabled="">Choose an option</option>
              <option value="Recommendation" aria-selected="false">Recommendation</option>
              <option value="Psychology Today" aria-selected="false">Psychology Today</option>
              <option value="Affordable Therapy" aria-selected="false">Affordable Therapy</option>
              <option value="CRPO directory" aria-selected="false">CRPO directory</option>
              <option value="CATA directory" aria-selected="false">CATA directory</option>
              <option value="Google search" aria-selected="false">Google search</option>
              <option value="Other" aria-selected="false">Other</option>
            </select>
          </div>
            
          <div className="message-form">
            <label for="message-id">Message</label>
            <textarea name="message" id="message-id" type="text" placeholder="What's been troubling you?" required="true" aria-required="true" maxlength="100" value="" />
          </div>
          
          <div className="form-submit-btn">
            <button>
              <span>Send</span>
            </button>
          </div>
          
          <div className="thanks-msg">
            <p>Thanks for submitting! Be sure to sheck your SPAM folder for a response.</p>
          </div>
        </form>
      </div>
    </main>
  )
}
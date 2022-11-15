import React from 'react'
import './styles.scss'
import './contact.scss'
import { useForm, ValidationError } from '@formspree/react'
import { Link } from 'gatsby'
import Logo from '../images/Logo.png'
import Footer from '../components/Footer'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'

export default function Contact () {
  const [state, handleSubmit] = useForm('xkneyzbr')

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>
  }

  return (
    <main className='page-content'>
      <div className="contact-title-holder">
        <p className="contact-title">Get In Touch</p>
      </div>

      <div className="covid-note">
        <h3>Note: My practice has been moved online for the foreseeable future. Consequent therapy sessions will be limited to secure video or telephone sessions.</h3>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <img className="logo" src={Logo} alt="JPTS Logo" />
          <p>The right fit is the most important part of finding the right therapist.</p>

          <Link to="/guide">Read more about how to choose the right therapist for you!</Link>

          <p>To contact me for a no-fee 15 minute phone consultation simply fill out the form to the right.</p>
        </div>

        <div className="contact-form">
          <p className="form-identifier">
            <span className="name">Jesse Pajuäär, RP, DTATI, HBA</span> <br/>
            Toronto, Ont. Canada.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{ display: 'block' }}
          >
            <TextField
              className="input"
              id="standard-basic"
              name="first-name"
              label="First Name"
              variant="standard"
              required
              fullWidth
            />
            <TextField
              className="input"
              id="standard-basic"
              name="last-name"
              label="Last Name"
              variant="standard"
              required
              fullWidth
            />
            <TextField
              className="input"
              id="standard-basic"
              name="email"
              label="Email"
              variant="standard"
              required
              fullWidth
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <TextField
              className="input"
              id="standard-basic"
              name="phone"
              label="Phone"
              variant="standard"
              required
              fullWidth
            />
            <TextField
              className="input"
              id="standard-basic"
              name="location"
              label="Location"
              variant="standard"
              helperText="e.g., Toronto, ON"
              required
              fullWidth
            />
            <FormControl className="input" fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                How did you hear about JPTS?
              </InputLabel>
              <NativeSelect
                helperText="Choose an Option"
                inputProps={{
                  name: 'referal',
                  id: 'uncontrolled-native'
                }}
              >
                <option>Recommendation</option>
                <option>Psychology Today</option>
                <option>Affordable Therapy</option>
                <option>CRPO Directory</option>
                <option>CATA Directory</option>
                <option>Google Search</option>
                <option>Other</option>
              </NativeSelect>
            </FormControl>
            <TextField
              className="input"
              id="outlined-multiline-static"
              name="message"
              label="Message"
              multiline
              rows={4}
              helperText="What's been troubling you?"
              fullWidth
            />
            <br />
            <button className="form-submit-btn" type="submit">Send</button>
            <ValidationError errors={state.errors} />
          </form>
        </div>
      </div>

      <Footer />
    </main>
  )
}

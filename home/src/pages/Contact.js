import * as React from "react";
import "../styles/index.scss";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../images/Logo.png";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function Contact () {
  return (
    <main>
      <div className="contact-title-holder">
        <p className="contact-title">Get In Touch</p>  
      </div>

      <div className="covid-note">
        <h3>Note: <br/> My practice has been moved online for the foreseeable future. Consequent therapy sessions will be limited to secure video or telephone sessions.</h3>      
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <img className="logo" src={Logo} alt="JPTS Logo" />
          <p>The right fit is the most important part of finding the right therapist.</p>

          <Link as={Link} to="/guide">Read more about how to choose the right therapist for you!</Link>

          <p>To contact me for a no-fee 15 minute phone consultation simply fill out the form to the right.</p>
        </div>

        <div className="contact-form">
          <p className="form-identifier">
            <span className="name">Jesse Pajuäär, RP, DTATI, HBA</span> <br/>
            Toronto, Ont. Canada.            
          </p>

          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="First Name" variant="standard" required />
            <TextField id="standard-basic" label="Last Name" variant="standard" required/>
            <TextField id="standard-basic" label="Email" variant="standard" required fullWidth/>
            <TextField id="standard-basic" label="Phone" variant="standard" required/>
            <TextField id="standard-basic" label="Location" variant="standard" helperText="e.g., Toronto, ON" required/>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                How did you hear about JPTS?
              </InputLabel>
              <NativeSelect
                helperText="Choose an Option"
                inputProps={{
                  name: 'referal',
                  id: 'uncontrolled-native',
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
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              helperText="What's been troubling you?"
              defaultValue=" "
            />
            <br />
            <button className="form-submit-btn">Send</button>            
          </Box>
        </div>
      </div>

      <Footer />
    </main>
  )
}
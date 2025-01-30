"use client";

import "../styles/styles.scss";
import "../styles/contact.scss";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import Script from "next/script";
import SubmitModal from "../components/SubmitModal";
import Footer from "../components/Footer";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Contact() {
  const [state, handleSubmit] = useForm("xkneyzbr");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (state.succeeded) {
    return (
      <main className="page-content">
        <div className="contact-title-holder">
          <h1 className="contact-title">Get In Touch</h1>
        </div>

        <SubmitModal />

        <div className="submit-contact-body">
          <div className="contact-info">
            <img className="logo" src="/images/Logo.webp" alt="JPTS Logo" />
            <p>
              The right fit is the most important part of finding the right
              therapist.
            </p>

            <Link href="/guide">
              Read more about how to choose the right therapist for you!
            </Link>

            <p>
              To contact me for a no-fee 15 minute phone consultation simply
              fill out the form to the right.
            </p>
          </div>
        </div>

        <Footer />
      </main>
    );
  }

  return (
    <main className="page-content">
      <div className="contact-title-holder">
        <h1 className="contact-title">Get In Touch</h1>
      </div>

      <div className="covid-note">
        <p>
          My practice has been moved online for the foreseeable future. <br />{" "}
          Therapy sessions will therefore be limited to <br /> secure video or
          telephone sessions. <br /> Get in touch for more information.
        </p>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <img className="logo" src="/images/Logo.webp" alt="JPTS Logo" />
          <p>
            The right fit is the most important part of finding the right
            therapist.
          </p>

          <Link href="/guide">
            Read more about how to choose the right therapist for you!
          </Link>

          <p className="border-bottom-text">
            To contact me for a no-fee 15 minute phone consultation simply fill
            out the form to the right.
          </p>

          <p>I am affiliated with the following organizations:</p>

          <div className="affiliation-images">
            <a
              href="http://www.canadianarttherapy.org"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="affiliation-img"
                src="/images/CATA.webp"
                alt="CATA Logo"
              />
            </a>

            <a href="http://www.crpo.ca" target="_blank" rel="noreferrer">
              <img
                className="affiliation-img"
                src="/images/CRPO.webp"
                alt="CRPO Logo"
              />
            </a>

            <a href="http://www.tati.on.ca" target="_blank" rel="noreferrer">
              <img
                className="affiliation-img"
                src="/images/TATI.webp"
                alt="TATI Logo"
              />
            </a>

            <a
              href="http://www.estonianartiststoronto.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="affiliation-img"
                src="/images/EKKT.webp"
                alt="EKKT Logo"
              />
            </a>
          </div>
        </div>

        <div className="contact-form">
          <p className="form-identifier">
            <span className="name">Jesse Pajuäär, RP, RCAT, DTATI, HBA</span>
          </p>

          <form onSubmit={handleSubmit} style={{ display: "block" }}>
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
            <ValidationError
              className="error"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <TextField
              className="input"
              id="standard-basic"
              name="phone"
              label="Phone"
              variant="standard"
              required
              fullWidth
            />
            <ValidationError
              className="error"
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
            <div className="checkbox-container">
              <p>
                I am currently only accepting clients residing in the province
                of Ontario. Please check the box below to confirm that you are a
                current Ontario resident.
              </p>
              <FormControlLabel
                control={<Checkbox />}
                label="Ontario Resident"
              />
            </div>
            <FormControl className="input" fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                How did you hear about JPTS?
              </InputLabel>
              <NativeSelect
                helpertext="Choose an Option"
                inputProps={{
                  name: "referal",
                  id: "uncontrolled-native",
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
            <div className="captcha-holder">
              {isClient && (
                <div
                  className="g-recaptcha"
                  data-sitekey="6LfzzPwiAAAAADR5tUVeL1r4cpMwVTxoamtBAkIT"
                  data-size="normal"
                />
              )}
              <br />
            </div>
            <button
              className="form-submit-btn"
              type="submit"
              disabled={state.submitting}
            >
              Send
            </button>
            <ValidationError className="error" errors={state.errors} />
          </form>
        </div>
      </div>

      <Footer />
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />
    </main>
  );
}

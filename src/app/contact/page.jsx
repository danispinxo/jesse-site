"use client";
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

  return (
    <main className="page-content">
      <section className="page-hero">
        <div className="hero-content">
          <h1>
            Contact Me
            <span className="subtitle">
              Ready to start your journey? Let's chat!
            </span>
          </h1>
        </div>
      </section>

      <div className="covid-note">
        <p>
          Online therapy from the comfort of your own space!
          <br />
          All sessions are currently conducted via secure video or phone calls.
          <br />
          Same great support, just a different (and cozy!) setting.
        </p>
      </div>

      {state.succeeded ? (
        <SubmitModal />
      ) : (
        <div className="contact-body">
          <div className="contact-info">
            <img className="logo" src="/images/Logo.webp" alt="JPTS Logo" />
            <p>
              Finding the right therapist is like finding the perfect pair of
              shoes ... the fit has to be just right! That connection matters,
              and I'm here to help you find that match.
            </p>
            <p>Not sure where to start?</p>
            <p className="guide-link">
              <Link href="/guide">
                Check out my guide on choosing
                <br />
                the right therapist!
              </Link>
            </p>

            <p className="border-bottom-text">
              Curious to see if we're a good fit? Let's have a no-pressure,
              no-fee 15-minute chat! Just fill out the form to the right and
              I'll get back to you soon.
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

              <a href="http://www.tati.on.ca" target="_blank" rel="noreferrer">
                <img
                  className="affiliation-img tati-logo"
                  src="/images/TATI.webp"
                  alt="TATI Logo"
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
                  of Ontario. Please check the box below to confirm that you are
                  a current Ontario resident.
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
                helperText="What's on your mind? Share as much or as little as you'd like!"
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
                Send Message ✨
              </button>
              <ValidationError className="error" errors={state.errors} />
            </form>
          </div>
        </div>
      )}

      <Footer />
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />
    </main>
  );
}

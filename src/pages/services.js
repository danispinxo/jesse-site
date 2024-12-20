import * as React from "react";
import "./styles.scss";
import "./about-and-services.scss";
import { Link } from "gatsby";
import Footer from "../components/Footer";
import Psychotherapy from "../images/Psychotherapy.webp";
import ArtTherapy from "../images/ArtTherapy.webp";
import LowIncome from "../images/LowIncome.webp";

export default function Services() {
  return (
    <main className="page-content">
      <div className="services-title-holder">
        <p className="services-title">Available Services</p>
      </div>

      <div className="help-list">
        <h3>Therapy can help you take charge.</h3>
        <ul>
          <li>Do you feel distant or disconnected from your partner?</li>
          <li>Are you facing separation or divorce?</li>
          <li>
            Are you negotiating a difficult personal decision or challenge?
          </li>
          <li>Do you struggle with parenting?</li>
          <li>
            Are you overcome by negative thought patterns or cruel self-talk?
          </li>
          <li>Do you feel stuck, burned-out or overwhelmed?</li>
          <li>Are you frustrated by self-sabotaging behaviour?</li>
          <li>Do you feel unhappy or dissatisfied in your own skin?</li>
        </ul>
      </div>

      <div className="session-format">
        <h3>Session Formats</h3>
        <p>
          I am currently taking on new clients in a limited capacity. <br />I am
          able to meet with you via the following teletherapy options:
        </p>
        <ul>
          <li>Video sessions</li>
          <li>Telephone consultations and sessions</li>
        </ul>
        <p>
          Please contact me using the form found on the{" "}
          <a href="/contact">Contact</a> page for more information.
        </p>
      </div>

      <div className="section">
        <div className="section-label">
          <p className="label-title">Psychotherapy Session</p>
          <p className="label-subtitle">Individual</p>
          <div className="section-image-holder">
            <img className="section-image" src={Psychotherapy} />
          </div>
        </div>

        <div className="section-content">
          <p>
            Psychotherapy for individuals specializing in anxiety and stress,
            self esteem, relationships difficulties, and personal development.
          </p>
          <p>
            Build upon what was discussed in previous weeks, or explore new
            topics or concerns that have taken precedence in your life.
          </p>
          <p>
            In these sessions you are the expert of your own life. There are no
            judgements or assumptions made during our time; the focus is on
            collaborating with you to create a space where your voice, your
            wants, and your unique perspectives are not only heard, but
            supported and advocated for.
          </p>
          <p>Pricing: $140 / 50 mins.</p>
          <p>Format: Video and telephone sessions</p>
        </div>
      </div>

      <div className="section">
        <div className="section-label">
          <p className="label-title">
            Art <br /> Psychotherapy
          </p>
          <div className="section-image-holder">
            <img className="section-image" src={ArtTherapy} />
          </div>
        </div>

        <div className="section-content">
          <p>
            Using creative practices as a way to help reframe and (re)examine
            how we look at ourselves, our relationships, and the world. Art
            psychotherapy isn&apos;t about the end goal of creating “Art,” but
            about the process.
          </p>
          <p>
            This process means tapping into parts of the brain that often get
            overlooked or underused, but actually provide a wealth of knowledge
            about how we each uniquely experience and perceive the world.
          </p>
          <p>Pricing: $140 / 50 mins.</p>
          <p>Format: Video and telephone sessions</p>
        </div>
      </div>

      <div className="section">
        <div className="section-label">
          <p className="label-title">Reduced Rate & Sliding Scale</p>
          <p className="label-subtitle">Low-income &amp; students</p>
          <div className="section-image-holder">
            <img className="section-image" src={LowIncome} />
          </div>
        </div>

        <div className="section-content">
          <p>
            Sliding scale options are available* to those individuals
            demonstrating special need on a case-by-case basis. Please inquire
            for further details.
          </p>
          <p>*Sliding scale rates are subject to availability</p>
          <p>Pricing: $90-130 / 50 mins.</p>
          <p>Format: Video and telephone sessions</p>
        </div>
      </div>

      <div className="consult-box">
        <div className="consult-text">
          <p>No Fee Telephone Consultation - 15 min.</p>
        </div>

        <Link to="/contact">
          <button className="consult-btn">Book Now</button>
        </Link>
      </div>

      <Footer />
    </main>
  );
}

export { Head } from "./index";

"use client";
import "../styles/styles.scss";
import "../styles/about.scss";
import Link from "next/link";
import Footer from "../components/Footer";
import ImagePlaceholder from "../components/ImagePlaceholder";

export default function AboutPage() {
  return (
    <main className="page-content">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <h1>
            About Me
            <span className="subtitle">Your Journey to Well-being</span>
          </h1>
          <p className="hero-text">
            With years of experience in men's mental health, I provide a safe and understanding
            environment for growth and healing.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="profile-section">
        <div className="profile-content">
          <div className="profile-image">
            <ImagePlaceholder
              width={400}
              height={500}
              text="Therapist Profile"
            />
          </div>
          <div className="profile-text">
            <h2>Professional Background</h2>
            <p>
              As a licensed therapist specializing in men's mental health, I bring both
              professional expertise and genuine understanding to each session. My approach
              combines evidence-based techniques with compassionate support to help you
              navigate life's challenges.
            </p>
            <div className="credentials">
              <h3>Credentials & Education</h3>
              <ul>
                <li>Licensed Professional Counselor</li>
                <li>Master's in Clinical Psychology</li>
                <li>Certified in Cognitive Behavioral Therapy</li>
                <li>Specialized Training in Men's Mental Health</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="philosophy-content">
          <h2>My Approach to Therapy</h2>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <h3>Client-Centered</h3>
              <p>Your unique experiences and needs guide our therapeutic journey together.</p>
            </div>
            <div className="philosophy-item">
              <h3>Evidence-Based</h3>
              <p>Using proven therapeutic techniques tailored to your specific situation.</p>
            </div>
            <div className="philosophy-item">
              <h3>Holistic Focus</h3>
              <p>Addressing mental, emotional, and social aspects of well-being.</p>
            </div>
            <div className="philosophy-item">
              <h3>Goal-Oriented</h3>
              <p>Working together to achieve meaningful and lasting positive change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-content">
          <h2>Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Take the First Step?</h2>
          <p>Schedule a free consultation to discuss how we can work together.</p>
          <button className="cta-button">Book Your Consultation</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const values = [
  {
    title: "Trust",
    description: "Building a foundation of trust and confidentiality in every therapeutic relationship."
  },
  {
    title: "Empowerment",
    description: "Helping you develop the tools and confidence to overcome challenges."
  },
  {
    title: "Growth",
    description: "Fostering personal development and positive change through understanding."
  },
  {
    title: "Authenticity",
    description: "Creating a space where you can be genuinely yourself without judgment."
  }
];

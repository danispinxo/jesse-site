import "../styles/styles.scss";
import "../styles/services.scss";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <main className="page-content">
      <section className="services-header">
        <h1 className="services-title">Available Services</h1>
      </section>

      <section className="help-list defined-section">
        <h3 className="help-title">Therapy can help you take charge.</h3>
        <ul className="help-items">
          <li>Do you feel distant or disconnected from your partner?</li>
          <li>Are you facing separation or divorce?</li>
          <li>
            Are you negotiating a difficult personal decision or challenge?
          </li>
          <li>Do you struggle with parenting?</li>
          <li>
            Are you overcome by negative thought patterns or cruel self-talk?
          </li>
          <li>Do you feel stuck, burned-out, or overwhelmed?</li>
          <li>Are you frustrated by self-sabotaging behavior?</li>
          <li>Do you feel unhappy or dissatisfied in your own skin?</li>
        </ul>
      </section>

      <section className="session-format defined-section">
        <h3 className="section-title">Session Formats</h3>
        <p className="session-info">
          I am currently taking on new clients in a limited capacity. <br />I am
          able to meet with you via the following teletherapy options:
        </p>
        <ul className="session-options">
          <li>Video sessions</li>
          <li>Telephone consultations and sessions</li>
        </ul>
        <p className="contact-info">
          Please contact me using the form found on the{" "}
          <Link href="/contact" className="contact-link">
            Contact
          </Link>{" "}
          page for more information.
        </p>
      </section>

      <ServiceSection
        title="Psychotherapy Session"
        subtitle="Individual"
        image="/images/Psychotherapy.webp"
        description={[
          "Psychotherapy for individuals specializing in anxiety and stress, self-esteem, relationship difficulties, and personal development.",
          "Build upon what was discussed in previous weeks, or explore new topics or concerns that have taken precedence in your life.",
          "In these sessions, you are the expert of your own life. There are no judgments or assumptions made during our time; the focus is on collaborating with you to create a space where your voice, your wants, and your unique perspectives are not only heard but supported and advocated for.",
        ]}
        pricing="Pricing: $140 / 50 mins."
        format="Format: Video and telephone sessions"
      />

      <ServiceSection
        title="Art Psychotherapy"
        image="/images/ArtTherapy.webp"
        description={[
          "Using creative practices as a way to help reframe and (re)examine how we look at ourselves, our relationships, and the world.",
          "Art psychotherapy isn't about the end goal of creating 'Art,' but about the process.",
          "This process means tapping into parts of the brain that often get overlooked or underused but actually provide a wealth of knowledge about how we each uniquely experience and perceive the world.",
        ]}
        pricing="Pricing: $140 / 50 mins."
        format="Format: Video and telephone sessions"
      />

      <ServiceSection
        title="Reduced Rate & Sliding Scale"
        subtitle="Low-income & Students"
        image="/images/LowIncome.webp"
        description={[
          "Sliding scale options are available* to those individuals demonstrating special need on a case-by-case basis. Please inquire for further details.",
          "*Sliding scale rates are subject to availability.",
        ]}
        pricing="Pricing: $90-130 / 50 mins."
        format="Format: Video and telephone sessions"
      />

      <section className="consult-box defined-section">
        <p className="consult-text">No Fee Telephone Consultation - 15 min.</p>
        <Link href="/contact">
          <button className="consult-btn">Book Now</button>
        </Link>
      </section>

      <Footer />
    </main>
  );
}

const ServiceSection = ({
  title,
  subtitle,
  image,
  description,
  pricing,
  format,
}) => {
  return (
    <section className="service-section defined-section">
      <div className="section-label">
        <h4 className="label-title">{title}</h4>
        {subtitle && <p className="label-subtitle">{subtitle}</p>}
        <div className="section-image-holder">
          <img className="section-image" src={image} alt={`${title} Image`} />
        </div>
      </div>
      <div className="section-content">
        {description.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        <p className="pricing">{pricing}</p>
        <p className="format">{format}</p>
      </div>
    </section>
  );
};

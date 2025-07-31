"use client";
import "normalize.css";
import "./styles/styles.scss";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faArrowRight,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            "Experience is not what happens to you. It is what you do with what
            happens to you."
            <span className="emphasis">- Aldous Huxley</span>
          </h1>
          <p className="hero-text">
            Do you feel you need to make some changes but don't know where or
            how to begin?
          </p>
          <Link href="/contact">
            <button className="cta-button home-contact-button">
              <FontAwesomeIcon icon={faPaperPlane} />
              Contact me now for a no-fee 15-minute consultation
            </button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <span className="hero-image-accent" />
          <Image
            className="hero-image"
            src="/images/JessePajuaar.webp"
            alt="Professional headshot of Jesse Pajuäär, a registered psychotherapist"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="treeline-divider">
        <div className="treeline-element">
          <img
            src="/images/Treeline.webp"
            alt="Forest treeline silhouette"
            className="treeline-image"
          />
        </div>
      </section>
      <section className="about-me-section">
        <h2>About Me</h2>
        <h3>Jesse Pajuäär</h3>
        <div className="why-content">
          <p>Registered Psychotherapist, RCAT, DTATI, HBA. </p>
          <p>
            Ontario therapist offering psychotherapy and art therapy sessions.
          </p>
          <p>
            I approach each session with the belief that you are the expert of
            your own life. There are no judgements or assumptions made during
            our time.
          </p>
          <p>
            My focus is on collaborating with you to create a space where your
            voice, your wants, and your unique perspective can not only be
            heard, but supported and advocated for.
          </p>
        </div>
      </section>

      <section className="approach-list-section">
        <h2>My Approach to Therapy</h2>
        <div className="approach-list-grid">
          {approaches.map((item, idx) => (
            <div className="approach-list-item" key={idx}>
              <span className="approach-list-icon">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
              <div>
                <span className="approach-list-title">{item.title}</span>
                <span className="approach-list-desc">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="specialties-list-section">
        <h2>
          Specializing in Art Therapy, Anxiety, Self-Esteem, and Relationship
          Issues
        </h2>
        <div className="specialties-list-grid">
          {specialties.map((specialty, index) => (
            <div key={index} className="specialties-list-item">
              <span className="specialties-list-icon">
                <FontAwesomeIcon icon={faLeaf} />
              </span>
              <span className="specialties-list-text">{specialty}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <div className="contact-content">
          <h2>You are not the problem, the problem is the problem.</h2>
          <div className="contact-info">
            <p>Schedule your consultation today</p>
            <a href="/contact">
              <button className="cta-button">Get Started</button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const specialties = [
  "Addiction",
  "Anger Management",
  "Anxiety",
  "Bisexuality",
  "Body Positivity",
  "Codependency",
  "Coping Skills",
  "Creativity",
  "Depression",
  "Family Conflict",
  "Grief",
  "Infidelity",
  "LGBTQ+",
  "Life Coaching",
  "Life Transitions",
  "Men's Issues",
  "Narcissistic Personality",
  "Peer Relationships",
  "Racial Identity",
  "Relationship Issues",
  "Self Esteem",
  "Sex-Positive, Kink Allied",
  "Stress",
  "Transgender",
  "Trauma and PTSD",
  "Women's Issues",
  "Work-Life Balance",
];

const approaches = [
  {
    title: "Anti-Oppressive",
    desc: "Acknowledge and address systemic barriers to mental health care.",
  },
  {
    title: "Art Therapy",
    desc: "Use creative expression as a tool for self-discovery and healing.",
  },
  {
    title: "Attachment Focused",
    desc: "Understand how early relationships shape current experiences and behaviors.",
  },
  {
    title: "Compassionate Inquiry",
    desc: "Gently uncover underlying emotional and psychological patterns.",
  },
  {
    title: "Existential",
    desc: "Explore the meaning of life and personal values in the therapeutic process.",
  },
  {
    title: "Expressive Arts",
    desc: "Integrate various art forms to facilitate emotional expression and healing.",
  },
  {
    title: "Mindfulness",
    desc: "Cultivate present-moment awareness to reduce stress and enhance well-being.",
  },
  {
    title: "Narrative",
    desc: "Reframe personal stories to empower and create new perspectives.",
  },
  {
    title: "Relational",
    desc: "Emphasize the importance of relationships in shaping emotional health.",
  },
  {
    title: "Somatic",
    desc: "Address the connection between the body and mind in the healing process.",
  },
  {
    title: "Strengths Based",
    desc: "Focus on individual strengths to foster resilience and growth.",
  },
  {
    title: "Trauma Informed",
    desc: "Create a safe space that acknowledges and respects the impact of trauma.",
  },
];

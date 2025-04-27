"use client";
import "normalize.css";
import "./styles/styles.scss";
import Link from "next/link";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ImagePlaceholder from "./components/ImagePlaceholder";

export default function HomePage() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Experience is not what happens to you. It is what you do with what
            happens to you.
            <span className="emphasis">Aldous Huxley</span>
          </h1>
          <p className="hero-text">
            Do you feel you need to make some changes but don't know where or
            how to begin?
          </p>
          <Link href="/contact">
            <button className="cta-button">
              <FontAwesomeIcon
                icon={faPaperPlane}
                style={{ marginRight: "0.5rem" }}
              />
              Contact me now for a no-fee 15-minute consultation
            </button>
          </Link>
        </div>
        <div className="hero-image-container">
          <Image
            className="hero-image"
            src="/images/JessePajuaar.webp"
            alt="Headshot of Jesse Pajuaar"
          />
        </div>
      </section>

      <section className="why-section">
        <div className="forest-overlay">
          <h2>About Me: Jesse Pajuäär</h2>
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
        </div>
      </section>

      <section className="approach">
        <div className="approach-content">
          <div className="approach-text">
            <h2>Therapy can help you take charge</h2>
            <ul>
              <li>Do you feel distant or disconnected from your partner?</li>
              <li>Are you facing separation or divorce?</li>
              <li>
                Are you negotiating a difficult personal decision or challenge?
              </li>
              <li>Do you struggle with parenting?</li>
              <li>
                Are you overcome by negative thought patterns or cruel
                self-talk?
              </li>
              <li>Do you feel stuck, burned-out, or overwhelmed?</li>
              <li>Are you frustrated by self-sabotaging behavior?</li>
              <li>Do you feel unhappy or dissatisfied in your own skin?</li>
            </ul>
            <a href="/about">
              <button className="secondary-button">
                Learn More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </div>
          <div className="approach-image">
            <ImagePlaceholder
              width={600}
              height={400}
              text="Serene Mountain Landscape"
            />
          </div>
        </div>
      </section>

      <section className="specialties">
        <h2>
          Specializing in Art Therapy, Anxiety, Self-Esteem, and Relationship
          Issues
        </h2>
        <div className="specialties-grid">
          {specialties.map((specialty, index) => (
            <div key={index} className="specialty-item">
              <h3>{specialty}</h3>
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
  "Anxiety",
  "Self Esteem",
  "Relationship Issues",
  "Men's Issues",
  "Addiction",
  "Anger Management",
  "Bisexuality",
  "Body Positivity",
  "Codependency",
  "Coping Skills",
  "Depression",
  "Family Conflict",
  "Grief",
  "Infidelity",
  "Lesbian",
  "LGBTQ+",
  "Life Coaching",
  "Life Transitions",
  "Men's Issues",
  "Narcissistic Personality (NPD)",
  "Peer Relationships",
  "Racial Identity",
  "Sex-Positive, Kink Allied",
  "Stress",
  "Transgender",
  "Trauma and PTSD",
  "Women's Issues",
];

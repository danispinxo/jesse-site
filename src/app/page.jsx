"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faArrowRight,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { approaches, specialties } from "./scripts/constants";

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
            width={320}
            height={320}
            priority
            sizes="(max-width: 768px) 250px, 320px"
          />
        </div>
      </section>

      <section className="treeline-divider">
        <div className="treeline-element">
          <img
            src="/images/Treeline-800.webp"
            srcSet="/images/Treeline-600.webp 600w, /images/Treeline-800.webp 800w, /images/Treeline-1200.webp 1200w, /images/Treeline.webp 1536w"
            sizes="100vw"
            alt="Forest treeline silhouette"
            className="treeline-image"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
      <section className="about-me-section" aria-labelledby="about-heading">
        <div className="about-me-content">
          <h2 id="about-heading">About Me</h2>
          <h3>Jesse Pajuäär</h3>
          <div className="why-content">
            <p>
              <strong>
                Registered Psychotherapist, RCAT, DTATI, HBA, Clinical
                Supervisor.
              </strong>
            </p>
            <p>
              Ontario therapist offering psychotherapy and art therapy sessions.
            </p>
            <p>
              We all want a better life and we're doing the best we can with
              what we have. But we get stuck sometimes, caught in routines,
              unsure how to create the change we long for. Even asking “What do
              I want?” can feel overwhelming, pushing us to live for others
              while sensing something is missing. Everything we do meets some
              need, or we wouldn't do it. Therapy needn't be about “fixing
              people.” It can be a space of liberation, resistance, and
              transformation. Getting to the heart of what we truly need or want
              can be the beginning of the shift that empowers us. That clarity
              becomes the opening chapter to a story centered on your voice, not
              others.
            </p>
            <p>
              I approach each session with the belief that you are the expert of
              your own life. There are no judgements or assumptions made during
              our time; my focus is on collaborating with you to create a space
              where your voice, your wants, and your unique perspectives are not
              only heard, but supported and advocated for.
            </p>
          </div>
        </div>
      </section>

      <section
        className="approach-list-section"
        aria-labelledby="approach-heading"
      >
        <h2 id="approach-heading">My Approach to Therapy</h2>
        <div className="approach-list-grid" role="list">
          {approaches.map((item, idx) => (
            <div className="approach-list-item" key={idx} role="listitem">
              <span className="approach-list-icon" aria-hidden="true">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
              <div>
                <h3 className="approach-list-title">{item.title}</h3>
                <p className="approach-list-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="specialties-list-section"
        aria-labelledby="specialties-heading"
      >
        <h2 id="specialties-heading">
          Specializing in Art Therapy, Anxiety, Self-Esteem, and Relationship
          Issues
        </h2>
        <div className="specialties-list-grid" role="list">
          {specialties.map((specialty, index) => (
            <div key={index} className="specialties-list-item" role="listitem">
              <span className="specialties-list-icon" aria-hidden="true">
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

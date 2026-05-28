"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "../_components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const consultationUrl = "https://jpts.noustalk.com/contactme";
const therapyWithMePoints = [
  "Space to explore your thoughts and emotions without judgment",
  "Gentle curiosity about how your past shapes your present",
  "Attention to how stress, trauma, and emotion live in the body",
  "Support in understanding your identity, values, and sense of self",
  "Conversations about masculinity, roles, and expectations that may feel hard to name",
  "Creative and expressive tools when words aren't enough",
  "Awareness of how social, cultural, and political systems impact your well-being",
  "A focus on your strengths, resilience, and capacity for growth",
  "A pace that feels safe, collaborative, and respectful",
];
const reasonsForComingGroups = [
  {
    title: "You feel",
    items: [
      "anxious, overwhelmed, or stuck in your thoughts",
      "angry more often than you'd like",
      "weighed down by shame or self-criticism",
      'pressure around masculinity, femininity, or who you\'re "supposed" to be',
    ],
  },
  {
    title: "Your relationships",
    items: [
      "feel confusing, painful, or repetitive",
      "are shaped by old family dynamics",
      "are recovering from betrayal or infidelity",
    ],
  },
  {
    title: "You're navigating",
    items: [
      "a major life transition",
      "questions about identity, gender, or sexuality",
      "work stress or burnout",
      "the lasting impact of trauma",
      "questions around who you are, your identity, or where you belong",
    ],
  },
  {
    title: "You want",
    items: [
      "to reconnect with creativity",
      "to feel more at home in yourself",
    ],
  },
];

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Feeling stuck, overwhelmed, or disconnected?
            <span className="subtitle">You don't have to navigate it alone.</span>
          </h1>
          <p className="hero-text">
            I work with adults exploring anxiety, life transitions, identity,
            relationships, and the impact of past experiences.
          </p>
          <Link
            href={consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cta-button home-contact-button">
              Book a Free Consultation
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

      <section className="about-me-section" aria-labelledby="about-heading">
        <div className="about-me-content">
          <h2 id="about-heading">About Me</h2>
          <h3>Jesse Pajuäär</h3>
          <div className="why-content">
            <p className="about-credentials">
              <strong>Registered Psychotherapist, RCAT-S, DTATI, HBA</strong>
            </p>
            <p className="about-subtitle">
              Offering psychotherapy, art therapy, and clinical supervision
              across Ontario
            </p>
            <p className="about-lede">
              I believe therapy should feel like a place where you can exhale.
            </p>
            <p>
              Many people come to me feeling stuck, overwhelmed, or unsure of
              what they need, only knowing that something doesn't feel right.
              You don't need to have the right words or a clear goal to begin.
              We start wherever you are.
            </p>
            <p>
              In our work together, you can expect a space that is
              collaborative, non-judgmental, and grounded in curiosity. I
              approach each session with the belief that you are the expert in
              your own life, and my role is to help you make sense of patterns,
              reconnect with yourself, and move toward a life that feels more
              aligned and meaningful.
            </p>
            <p>
              My practice is informed by a feminist, anti-oppressive, and
              social-justice lens that honours your lived experience and the
              systems that shape it. You don't have to carry things alone here.
            </p>
          </div>
        </div>
      </section>

      <section className="home-cta-strip" aria-label="Consultation booking">
        <div className="home-cta-strip-content">
          <p>
            Start with a free consultation and see whether working together
            feels like the right fit.
          </p>
          <Link
            href={consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cta-button">Book a Free Consultation</button>
          </Link>
        </div>
      </section>

      <section
        className="approach-list-section"
        aria-labelledby="approach-heading"
      >
        <div className="approach-content">
          <h2 id="approach-heading">What Therapy With Me Feels Like</h2>
          <p className="approach-intro">
            You don't need to have the right words when you arrive. We start wherever you are.
          </p>
          <p className="approach-intro">
            Our work together helps you slow down, notice what's happening inside, and make sense of patterns that may have been with you for a long time. We look at your story, your relationships, your body, and the systems you live within - not as problems to fix, but as places to understand.
          </p>
          <h3 className="approach-subheading">In our sessions, you can expect:</h3>
          <div className="approach-list-grid" role="list">
            {therapyWithMePoints.map((item, idx) => (
              <div className="approach-list-item" key={idx} role="listitem">
                <span className="approach-list-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
                <div>
                  <p className="approach-list-desc">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="approach-summary">
            This is therapy that honors the whole person: your history, your body, your relationships, and your lived experience.
          </p>
        </div>
      </section>

      <section
        className="specialties-list-section"
        aria-labelledby="specialties-heading"
      >
        <div className="specialties-content">
          <h2 id="specialties-heading">You might be here because...</h2>
          <div className="specialties-list-grid">
            {reasonsForComingGroups.map((group) => (
              <section className="specialty-group" key={group.title}>
                <h3 className="specialty-group-title">{group.title}</h3>
                <ul className="specialty-group-list">
                  {group.items.map((item) => (
                    <li className="specialty-group-item" key={item}>
                      <span className="specialty-group-icon" aria-hidden="true">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      <span className="specialties-list-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-quote-section" aria-label="Quote">
        <p className="hero-quote">
          "Experience is not what happens to you. It is what you do with what
          happens to you."
          <span>- Aldous Huxley</span>
        </p>
      </section>

      <Footer />

    </main>
  );
}


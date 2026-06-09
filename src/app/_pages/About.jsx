"use client";
import "../styles/about.scss";
import Image from "next/image";
import Footer from "../_components/Footer";
import { faArrowRight, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const consultationUrl = "https://jpts.noustalk.com/contactme";
const supportApproaches = [
  "Art therapy",
  "Narrative therapy",
  "Couples therapy",
  "Identity, performance, and masculinity",
  "Political & Social Justice",
  "Attachment",
];
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

export default function About() {
  return (
    <main className="page-content about-page">
      <section className="page-hero">
        <div className="hero-content">
          <h1>
            About
            <span className="subtitle">
              What can you expect from working with me?
            </span>
          </h1>
        </div>
      </section>

      <section className="profile-section">
        <div className="profile-content">
          <div className="profile-image-wrapper">
            <span className="profile-image-accent" aria-hidden="true" />
            <Image
              className="profile-image"
              src="/images/Headshot2.jpg"
              alt="Headshot of Jesse Pajuaar"
              width={280}
              height={280}
              sizes="(max-width: 480px) 150px, (max-width: 640px) 180px, (max-width: 768px) 220px, 280px"
              style={{ height: "auto" }}
              priority
            />
          </div>
          <div className="profile-text">
            <h2>How I Can Help</h2>
            <p>
              We all want a fuller, more meaningful life, and most of us are
              doing the best we can with what we have. Still, it is easy to
              get stuck: caught in routines, living for others, or sensing
              that something important is missing. Even asking "What do I
              want?" can feel overwhelming. Therapy does not have to be about
              fixing what is "wrong." It can be a space for clarity,
              liberation, and meaningful change. Everything we do meets a
              need, or we would not do it; and getting curious about those
              needs can open the door to a life that feels more aligned and
              self-directed. You do not need to have it all figured out to
              begin therapy.
            </p>
            <p>
              I approach each session with the belief that you are the expert
              of your own life. There are no judgements or assumptions made
              during our time; my focus is on collaborating with you to
              create a space where your voice, your wants, and your unique
              perspectives are not only heard, but supported and advocated
              for. You do not have to carry it alone.
            </p>
            <p>
              You are not the problem, the problem is the problem; you need
              not limit your life to it. I bring a feminist and social-justice
              lens that honours you and centres your lived experience in
              context. Together, we focus on what matters most to you,
              nurture your sense of agency, and create space for change that
              feels possible and true to the life you want to live.
            </p>
          </div>
        </div>
      </section>

      <section className="about-details-section">
        <div className="about-details-content">
          <div className="about-summary">
            <h2>About Me</h2>
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
              what they need, only knowing that something does not feel right.
              You do not need to have the right words or a clear goal to begin.
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
              systems that shape it. You do not have to carry things alone
              here.
            </p>
          </div>

          <div className="credentials-card">
            <h3>Credentials & Education</h3>
            <ul>
              <li>8 years of experience</li>
              <li>Registered Psychotherapist (RP)</li>
              <li>Registered Canadian Art Therapist Supervisor (RCAT-S)</li>
              <li>Master's level Diploma in Art Therapy (DTATI)</li>
              <li>Honours Bachelor of Arts (HBA) in Psychotherapy</li>
              <li>
                Licensed Member of the College of Registered Psychotherapists
                of Ontario
              </li>
              <li>
                Professional Member of the Canadian Art Therapy Association
              </li>
              <li>
                Verified on{" "}
                <a
                  href="https://www.psychologytoday.com/ca/therapists/jesse-pajuaar-toronto-on/818157"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  Psychology Today
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="values-list-section">
        <div className="values-content">
          <h2>Areas I Commonly Support Clients With</h2>
          <p className="values-intro">
            I often work with people navigating anxiety, depression, trauma,
            relationship challenges, identity exploration, grief, family
            conflict, work stress, addiction, self-esteem, and life
            transitions. I also provide affirming support for 2SLGBTQIA+
            clients, those exploring gender and sexuality, and individuals
            seeking sex-positive and kink-allied therapy.
          </p>
          <ul className="support-approach-list" role="list">
            {supportApproaches.map((item) => (
              <li className="support-approach-item" key={item} role="listitem">
                <span className="support-approach-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={faLeaf} />
                </span>
                <span className="support-approach-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="therapy-feels-section">
        <div className="therapy-feels-content">
          <h3>What Therapy With Me Feels Like</h3>
          <p className="therapy-feels-intro">
            You don't need to have the right words when you arrive. We start
            wherever you are.
          </p>
          <p className="therapy-feels-intro">
            Our work together helps you slow down, notice what's happening
            inside, and make sense of patterns that may have been with you for
            a long time. We look at your story, your relationships, your body,
            and the systems you live within - not as problems to fix, but as
            places to understand.
          </p>
          <h4 className="therapy-feels-subheading">
            In our sessions, you can expect:
          </h4>
          <div className="therapy-feels-list" role="list">
            {therapyWithMePoints.map((item, idx) => (
              <div className="therapy-feels-item" key={idx} role="listitem">
                <span className="therapy-feels-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
                <p className="therapy-feels-text">{item}</p>
              </div>
            ))}
          </div>
          <p className="therapy-feels-summary">
            This is therapy that honors the whole person: your history, your
            body, your relationships, and your lived experience.
          </p>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Take the First Step?</h2>
          <p>
            Schedule a free consultation to discuss how we can work together.
          </p>
          <a
            href={consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cta-button">Book a Free Consultation</button>
          </a>
        </div>
      </section>

      <section className="affiliation-section">
        <div className="affiliation-content">
          <h2>Affiliations</h2>

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
      </section>

      <Footer />
    </main>
  );
}


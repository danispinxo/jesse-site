"use client";
import "normalize.css";
import "./styles/styles.scss";
import Link from "next/link";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import JessePhoto from "../../public/images/JessePajuaar.webp";
import Logo from "../../public/images/Logo.webp";

export default function HomePage() {
  return (
    <main>
      <div className="quote-banner">
        <div className="quotation-container">
          <blockquote className="quotation">
            <p>
              &#8220;Experience is not what happens to you. It is what you do
              with what happens to you.&#8221;
            </p>
            <footer className="quotation-author">- Aldous Huxley -</footer>
          </blockquote>

          <Link href="/contact">
            <button className="talk-btn">Let&apos;s Talk</button>
          </Link>
        </div>
      </div>

      <div className="page-content">
        <div className="about-me">
          <div className="about-me-text">
            <h2 className="about-me-title">About Me</h2>
            <h3 className="about-me-name">Jesse Pajuäär</h3>
            <h4 className="about-me-qualifications">
              Registered Psychotherapist, RCAT, DTATI, HBA.
            </h4>
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
            <p>You are not the problem, the problem is the problem.</p>
          </div>

          <Image
            className="about-me-image"
            src="/images/JessePajuaar.webp"
            alt="Headshot of Jesse Pajuaar"
          />
        </div>

        <div className="homepage-contact">
          <div className="contact-content">
            <p className="contact-text">
              Do you feel you need to make some changes but don&apos;t know
              where or how to begin?
            </p>
            <Link href="/contact">
              <button className="contact-btn">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ marginRight: "0.5rem" }}
                />
                Contact me now for a no-fee 15-minute consultation
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="psychology-today-verification">
        <iframe
          title="Psychology Today Verified -- Jesse Pajuaar"
          src="https://www-jptherapystudios-com.filesusr.com/html/900dd1_259a81179feffed44176301ed25faa6a.html"
        />
        <p>&copy; 2024, Jesse Pajuäär Therapy Studios</p>
      </div>
    </main>
  );
}

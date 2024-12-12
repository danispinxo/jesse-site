import "normalize.css";
import "./styles/styles.scss";
import "./styles/about-and-services.scss";
import Link from "next/link";
import Image from "next/image";
import JessePhoto from "../../public/images/JessePajuaar.webp";
import Logo from "../../public/images/Logo.webp";

export default function HomePage() {
  return (
    <main>
      <div className="quote-banner">
        <div className="quotation-text">
          <div className="quotation">
            &#8220;Experience is not what happens to you.
            <br />
            It is what you do with what happens to you.&#8221; <br />
            <div className="name-holder"> - Aldous Huxley -</div>
          </div>

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
              Registered Psychotherapist, DTATI, HBA.
            </h4>
            <p className="about-me-approach">
              Toronto-based therapist offering psychotherapy and art therapy
              sessions.
            </p>
            <p className="about-me-approach">
              I approach each session with the belief that you are the expert of
              your own life. There are no judgements or assumptions made during
              our time.
            </p>
            <p className="about-me-approach">
              My focus is on collaborating with you to create a space where your
              voice, your wants, and your unique perspective can not only be
              heard, but supported and advocated for.
            </p>
            <p className="about-me-approach">
              You are not the problem, the problem is the problem.
            </p>
          </div>

          <Image
            src="/images/JessePajuaar.webp" // use path relative to public/
            alt="Headshot of Jesse Pajuaar"
            width={500} // specify width
            height={500} // specify height
          />
        </div>

        <div className="homepage-contact">
          <p className="homepage-contact-text">
            Do you feel you need to make some changes but don&apos;t know where
            or how to begin?
          </p>
          <Link href="/contact">
            <button className="homepage-contact-btn">
              Contact me now for a no-fee 15 minute consultation
            </button>
          </Link>
        </div>
      </div>

      <div className="psychology-today-verification">
        <iframe
          title="Psychology Today Verified -- Jesse Pajuaar"
          src="https://www-jptherapystudios-com.filesusr.com/html/900dd1_259a81179feffed44176301ed25faa6a.html"
        />
        <p>&copy; 2022, Jesse Pajuäär Therapy Studios</p>
      </div>
    </main>
  );
}

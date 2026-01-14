"use client";
import "../styles/services.scss";
import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <main className="page-content">
      <section className="page-hero">
        <div className="hero-content">
          <h1>
            Available Services
            <span className="subtitle">
              Comprehensive mental health services designed to support your
              growth and well-being.
            </span>
          </h1>
        </div>
      </section>

      <section className="pricing">
        <div className="pricing-content">
          <h2>Pricing Plans</h2>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div
                className={`pricing-card ${
                  index === 0 ? "consultation-card" : ""
                }`}
                key={index}
              >
                <h3>
                  {plan.sectionId ? (
                    <a
                      href={`#${plan.sectionId}`}
                      className="pricing-card-link"
                    >
                      {plan.title}
                    </a>
                  ) : (
                    plan.title
                  )}
                </h3>
                <p className="price">{plan.price}</p>
                <p className="duration">{plan.duration}</p>
                <ul className="features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <FontAwesomeIcon icon={faCheck} className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <button className="cta-button">Book Now</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="main-services">
        <div className="services-content">
          <div className="service-card featured">
            <div className="service-image">
              <Image
                className="service-image"
                src="/images/Psychotherapy.webp"
                alt="A serene therapy session setup with a comfortable chair and calming decor."
                width={400}
                height={300}
              />
            </div>
            <div className="service-details">
              <h2 id="psychotherapy">Psychotherapy Session (Individual)</h2>
              <p>
                In these sessions, you are the expert of your own life. There
                are no judgments or assumptions made during our time; the focus
                is on collaborating with you to create a space where your voice,
                your wants, and your unique perspectives are not only heard but
                supported and advocated for. In these sessions, you are the
                expert of your own life. There are no judgments or assumptions
                made during our time; the focus is on collaborating with you to
                create a space where your voice, your wants, and your unique
                perspectives are not only heard but supported and advocated for.
              </p>
              <ul className="service-features">
                {individualTherapyFeatures.map((feature, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="cta-button">Schedule Session</button>
              </Link>
            </div>
          </div>

          <div className="service-card featured">
            <div className="service-image">
              <Image
                className="service-image"
                src="/images/ArtTherapy.webp"
                alt="Art supplies including paints, brushes, and paper used in art therapy sessions."
                width={400}
                height={300}
              />
            </div>
            <div className="service-details">
              <h2 id="art-psychotherapy">Art Psychotherapy</h2>
              <p>
                Using creative practices as a way to help reframe and
                (re)examine how we look at ourselves, our relationships, and the
                world. Art psychotherapy isn't about the end goal of creating
                'Art,' but about the process. This process means tapping into
                parts of the brain that often get overlooked or underused but
                actually provide a wealth of knowledge about how we each
                uniquely experience and perceive the world.
              </p>
              <ul className="service-features">
                {artTherapyFeatures.map((feature, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="cta-button">Get Started</button>
              </Link>
            </div>
          </div>

          <div className="service-card featured">
            <div className="service-image">
              <Image
                className="service-image"
                src="/images/LowIncome.webp"
                alt="A welcoming office space with a desk and chair, symbolizing accessibility and affordability."
                width={400}
                height={300}
              />
            </div>
            <div className="service-details">
              <h2 id="reduced-rate">Reduced Rate & Sliding Scale</h2>
              <p>
                Sliding scale options are available to those individuals
                demonstrating special need on a case-by-case basis. Please
                inquire for further details.
              </p>
              <p>Sliding scale rates are subject to availability.</p>
              <ul className="service-features">
                {reducedRateFeatures.map((feature, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="cta-button">Inquire</button>
              </Link>
            </div>
          </div>

          <div className="service-card featured">
            <div className="service-image">
              <Image
                className="service-image"
                src="/images/Waterfall.webp"
                alt="A serene waterfall in a forest."
                width={400}
                height={300}
              />
            </div>
            <div className="service-details">
              <h2 id="clinical-supervision">Clinical Supervision</h2>
              <p>
                Professional clinical supervision designed to support therapists
                in their practice and professional development. Whether you're
                working toward CRPO licensure or seeking ongoing support in your
                therapeutic work, supervision provides a collaborative space to
                reflect on cases, develop skills, and maintain ethical practice.
                Specializing in art therapy supervision with additional
                expertise in trauma-informed care and anti-oppressive
                approaches.
              </p>
              <ul className="service-features">
                {supervisionFeatures.map((feature, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="cta-button">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const individualTherapyFeatures = [
  "Flexible scheduling options",
  "Safe and confidential virtual environment",
  "Evidence-based approaches",
  "Progress tracking and adjustment",
  "Video and telephone sessions available",
];

const artTherapyFeatures = [
  "Explore creativity as a therapeutic tool",
  "Safe and supportive environment",
  "Focus on the process, not the product",
  "Access deeper emotional insights",
  "Enhance self-expression and self-awareness",
];

const reducedRateFeatures = [
  "Mindfulness-focused approach",
  "Open and accessible care options",
  "Tailored to individual financial needs",
  "Supportive and inclusive environment",
  "Limited availability for qualifying individuals",
];

const supervisionFeatures = [
  "Focused and tailored clinical support",
  "Art therapy supervision",
  "CRPO Licensure preparation",
  "Private practice expertise",
  "Professional development guidance",
];

const pricingPlans = [
  {
    title: "Initial Consultation (Phone)",
    price: "0",
    duration: "15 minutes",
    sectionId: null,
    features: [
      "Meet your therapist",
      "Discuss your needs",
      "Explore therapy options",
      "Learn about approaches",
    ],
  },
  {
    title: "Psychotherapy",
    price: "140",
    duration: "50 minutes",
    sectionId: "psychotherapy",
    features: [
      "One-on-one care",
      "Personalized plan",
      "Evidence-based",
      "Flexible scheduling",
      "Video or phone",
    ],
  },
  {
    title: "Art Psychotherapy",
    price: "140",
    duration: "50 minutes",
    sectionId: "art-psychotherapy",
    features: [
      "Creative sessions",
      "Supportive space",
      "Process-focused",
      "Boost self-expression",
      "Video or phone",
    ],
  },
  {
    title: "Reduced Rate",
    price: "90-130",
    duration: "50 minutes",
    sectionId: "reduced-rate",
    features: [
      "Sliding scale options",
      "Limited availability",
      "Evidence-based",
      "Flexible scheduling",
      "Video or phone",
    ],
  },
  {
    title: "Clinical Supervision",
    price: "100-160",
    duration: "50 minutes",
    sectionId: "clinical-supervision",
    features: [
      "Student sliding scale options",
      "Clinical support",
      "Art therapy supervision",
      "CRPO Licensure",
      "Video or phone",
    ],
  },
];

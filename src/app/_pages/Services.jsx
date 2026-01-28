"use client";
import "../styles/services.scss";
import Link from "next/link";
import Footer from "../_components/Footer";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  individualTherapyFeatures,
  artTherapyFeatures,
  reducedRateFeatures,
  supervisionFeatures,
  consultationFeatures,
  pricingPlans,
} from "../scripts/constants";

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
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
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
                src="/images/TreeDoor.webp"
                alt="An illustration of an open door revealing a large tree with orange autumn leaves."
                width={400}
                height={300}
              />
            </div>
            <div className="service-details">
              <h2 id="initial-consultation">Initial Consultation</h2>
              <p>
                The initial consultation is a no-fee, 15-minute phone call
                designed to help you get to know me and determine if we're a good
                fit for working together. This is your opportunity to ask
                questions, share what brings you to therapy, and learn more about
                my approach. We'll discuss your goals, my methods, and practical
                details like scheduling and session format.
              </p>
              <ul className="service-features">
                {consultationFeatures.map((feature, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="cta-button">Book Consultation</button>
              </Link>
            </div>
          </div>

          <div className="service-card featured">
            <div className="service-image">
              <Image
                className="service-image"
                src="/images/Psychotherapy.webp"
                alt="An image of two sets of hands, one gesturing in speach and the other taking notes."
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
                alt="An image of a woman laying on her side in a right angle in white lines painted on pavement."
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
                alt="An image of a small man in a hat sitting on a ledge of a white geometic shape, nearby there is a ladder."
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


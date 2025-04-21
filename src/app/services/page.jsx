"use client";
import "../styles/styles.scss";
import "../styles/services.scss";
import Link from "next/link";
import Footer from "../components/Footer";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <main className="page-content">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <h1>
            Our Services
            <span className="subtitle">Personalized Care for Your Journey</span>
          </h1>
          <p className="hero-text">
            Comprehensive mental health services designed to support your growth and well-being.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="main-services">
        <div className="services-content">
          <div className="service-card featured">
            <div className="service-image">
              <ImagePlaceholder
                width="100%"
                height={300}
                text="Individual Therapy"
              />
            </div>
            <div className="service-details">
              <h2>Individual Therapy</h2>
              <p>
                One-on-one sessions tailored to your unique needs and goals. We work together
                to address your challenges and develop effective coping strategies.
              </p>
              <ul className="service-features">
                {individualTherapyFeatures.map((feature, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="cta-button">Schedule Session</button>
            </div>
          </div>

          <div className="service-card featured">
            <div className="service-image">
              <ImagePlaceholder
                width="100%"
                height={300}
                text="Group Therapy"
              />
            </div>
            <div className="service-details">
              <h2>Men's Group Therapy</h2>
              <p>
                A supportive environment where men can connect, share experiences, and work
                through challenges together under professional guidance.
              </p>
              <ul className="service-features">
                {groupTherapyFeatures.map((feature, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="cta-button">Join Group</button>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="specializations">
        <div className="specializations-content">
          <h2>Areas of Specialization</h2>
          <div className="specializations-grid">
            {specializations.map((spec, index) => (
              <div key={index} className="specialization-card">
                <h3>{spec.title}</h3>
                <p>{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="pricing-content">
          <h2>Transparent Pricing</h2>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="pricing-card">
                <h3>{plan.title}</h3>
                <div className="price">${plan.price}</div>
                <p className="duration">{plan.duration}</p>
                <ul className="features">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <FontAwesomeIcon icon={faCheck} className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="secondary-button">Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="insurance">
        <div className="insurance-content">
          <h2>Insurance & Payment</h2>
          <div className="insurance-info">
            <p>
              We accept various insurance plans and offer flexible payment options to ensure
              you can access the care you need. Contact us to verify your coverage.
            </p>
            <button className="cta-button">Verify Insurance</button>
          </div>
        </div>
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

const individualTherapyFeatures = [
  "Personalized treatment plans",
  "Flexible scheduling options",
  "Safe and confidential environment",
  "Evidence-based approaches",
  "Progress tracking and adjustment"
];

const groupTherapyFeatures = [
  "Weekly group sessions",
  "Peer support and connection",
  "Structured discussion topics",
  "Skill-building exercises",
  "Affordable group rates"
];

const specializations = [
  {
    title: "Anxiety Management",
    description: "Learn effective strategies to manage anxiety and stress in daily life."
  },
  {
    title: "Depression Treatment",
    description: "Develop coping skills and work through depressive symptoms."
  },
  {
    title: "Addiction Recovery",
    description: "Support for overcoming substance abuse and behavioral addictions."
  },
  {
    title: "Relationship Counseling",
    description: "Improve communication and strengthen personal relationships."
  },
  {
    title: "Trauma Processing",
    description: "Safe processing of past trauma using evidence-based techniques."
  },
  {
    title: "Career Guidance",
    description: "Navigate work-related stress and career transitions."
  }
];

const pricingPlans = [
  {
    title: "Individual Session",
    price: "150",
    duration: "50 minutes",
    features: [
      "One-on-one attention",
      "Personalized approach",
      "Flexible scheduling",
      "Online or in-person"
    ]
  },
  {
    title: "Group Session",
    price: "60",
    duration: "90 minutes",
    features: [
      "Peer support",
      "Structured program",
      "Weekly meetings",
      "Affordable care"
    ]
  },
  {
    title: "Initial Consultation",
    price: "0",
    duration: "15 minutes",
    features: [
      "Meet your therapist",
      "Discuss your needs",
      "Learn about approaches",
      "Get recommendations"
    ]
  }
];

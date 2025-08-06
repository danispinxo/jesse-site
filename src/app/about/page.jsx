"use client";
import "../styles/about.scss";
import Image from "next/image";
import Footer from "../components/Footer";
import { faLeaf, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutPage() {
  return (
    <main className="page-content">
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
          <div className="profile-image">
            <Image
              className="profile-image"
              src="/images/JessePajuaar.webp"
              alt="Headshot of Jesse Pajuaar"
              width={400}
              height={400}
              sizes="(max-width: 480px) 150px, (max-width: 640px) 180px, (max-width: 768px) 250px, 400px"
              style={{ height: "auto" }}
              priority
            />
          </div>
          <div className="profile-text">
            <h2>Professional Background</h2>
            <p>
              I received my Honours BA in Psychology from York University, and
              my Masters level diploma in Art Therapy from the Toronto Art
              Therapy Institute (TATI). I am a fully qualified Registered
              Psychotherapist with the College of Registered Psychotherapists of
              Ontario (CRPO), a Professional member of the Canadian Art Therapy
              Association (CATA), and a member of the Society of Estonian
              Artists in Toronto (EKKT).
            </p>
            <div className="credentials">
              <h3>Credentials & Education</h3>
              <ul>
                <li>7 years of experience</li>
                <li>Registered Psychotherapist (RP)</li>
                <li>Registered Art Therapist (RCAT)</li>
                <li>Diploma in Art Therapy (DTATI)</li>
                <li>Honours Bachelor of Arts (HBA) in Psychotherapy</li>
                <li>
                  Licensed Member of the College of Registered Psychotherapists
                  of Ontario
                </li>
                <li>
                  Professional Member of the Canadian Art Therapy Association
                </li>
                <li>Graduate of the Toronto Art Therapy Institute</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-list-section">
        <h2>My Approach to Therapy</h2>
        <div className="philosophy-list-grid">
          {approaches.map((item, idx) => (
            <div className="philosophy-list-item" key={idx}>
              <span className="philosophy-list-icon">
                <FontAwesomeIcon icon={faLeaf} />
              </span>
              <div>
                <span className="philosophy-list-title">{item.title}</span>
                <span className="philosophy-list-desc">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="profile-section">
        <div className="profile-content">
          <div className="profile-text">
            <div className="credentials">
              <h4>How I Can Help </h4>
              <p>
                Our work together begins with the belief that you are the expert
                on your own life, and that I am here to help motivate and
                empower you towards the personal growth that matters most to
                you. I also believe that our relationships, communities, and
                social contexts have a significant impact in shaping who we are,
                what we take notice of in the world, and how we come to engage
                with that world. I see the therapeutic relationship as no
                different, and therefore provide a collaborative, nonjudgmental,
                compassionate, and safe atmosphere where clients feel both heard
                and seen. In all aspects of therapy, I take a non-pathologizing,
                culturally sensitive, and anti-oppressive stance that seeks to
                disrupt and reposition systemically oppressive narratives.
              </p>
              <p>
                Through an integrative approach, I tailor my practice to best
                meet each client's unique needs and perspectives while working
                from an attachment, trauma-informed, and systems-based lens.
                This may include any combination of art therapy, narrative
                therapy, somatic therapy (mind-body), gestalt therapy, and
                family/systems therapy. In short, this means looking closely at
                meaningful relationships and life events, reauthoring harmful
                narratives, empowering you through the contextualizing and
                processing of significant experiences, and working on
                reconnecting with your emotional and bodily intelligences.
              </p>
              <p>
                For those curious about art therapy, here's a bit about how I
                practice. I focus on using creative practices as a way to help
                reframe and (re)examine how we look at ourselves, our
                relationships, and the world. Art therapy isn't about the end
                goal of creating "Art," but about the process. This process
                means tapping into parts of the brain that often get overlooked
                or underused, but actually provide a wealth of knowledge about
                how we each uniquely experience and perceive the world. Through
                the use of imagination, metaphor, symbolism, and associations,
                art therapy can help clients garner new perspectives, and even
                help us problem solve in new ways. In short, art therapy
                provides a nonthreatening means of accessing, externalizing,
                making sense of, and integrating difficult thoughts, feelings,
                and experiences when we find that words alone are seemingly not
                up to the task.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-list-section">
        <h2>Areas of Focus</h2>
        <div className="values-list-grid">
          {values.map((value, index) => (
            <div key={index} className="values-list-item">
              <span className="values-list-icon">
                <FontAwesomeIcon icon={faSeedling} />
              </span>
              <span className="values-list-text">{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Take the First Step?</h2>
          <p>
            Schedule a free consultation to discuss how we can work together.
          </p>
          <a href="/contact">
            <button className="cta-button">Book Your Consultation</button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const values = [
  "2SLGBTQIA+",
  "Addiction",
  "Anger",
  "Anxiety",
  "Body Image",
  "Burnout/Stress",
  "Codependence",
  "Coping Skills",
  "Creativity",
  "Divorce & Break-ups",
  "Eating Issues",
  "Elders/Seniors",
  "Family Conflict",
  "Grief & Loss",
  "Identity Exploration",
  "Intimacy & Sex",
  "Men's Issues",
  "Non-Binary",
  "Power Relations",
  "Relationship Difficulties",
  "Self Esteem & Confidence",
  "Sex Work Positive",
  "Shame",
  "Spiritual",
  "Trans-Specific",
  "Trauma",
  "Women's Issues",
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

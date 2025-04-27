"use client";
import "../styles/styles.scss";
import "../styles/about.scss";
import Link from "next/link";
import Footer from "../components/Footer";
import ImagePlaceholder from "../components/ImagePlaceholder";

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
            <ImagePlaceholder
              width={400}
              height={500}
              text="Therapist Profile"
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
                <li>In Practice for 5 years</li>
                <li>Registered Psychotherapist (RP)</li>
                <li>Registered Art Therapist (RCAT)</li>
                <li>Diploma in Art Therapy (DTATI)</li>
                <li>Honours Bachelor of Arts (HBA)</li>
                <li>
                  Member of the College of Registered Psychotherapists of
                  Ontario
                </li>
                <li>Member of the Canadian Art Therapy Association</li>
                <li>Attended Toronto Art Therapy Institute (2020)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="philosophy-content">
          <h2>My Approach to Therapy</h2>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <h3>Anti-Oppressive</h3>
              <p>
                Acknowledging and addressing systemic barriers to mental health
                care.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Art Therapy</h3>
              <p>
                Using creative expression as a tool for self-discovery and
                healing.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Attachment Focused</h3>
              <p>
                Understanding how early relationships shape our current
                experiences and behaviors.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Existential</h3>
              <p>
                Exploring the meaning of life and personal values in the
                therapeutic process.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Expressive Arts</h3>
              <p>
                Integrating various art forms to facilitate emotional expression
                and healing.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Mindfulness</h3>
              <p>
                Cultivating present-moment awareness to reduce stress and
                enhance well-being.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Narrative</h3>
              <p>
                Reframing personal stories to empower and create new
                perspectives.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Relational</h3>
              <p>
                Emphasizing the importance of relationships in shaping emotional
                health.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Somatic</h3>
              <p>
                Addressing the connection between the body and mind in the
                healing process.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Strengths Based</h3>
              <p>
                Focusing on individual strengths to foster resilience and
                growth.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Trauma Informed</h3>
              <p>
                Creating a safe space that acknowledges and respects the impact
                of trauma.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Compassionate Inquiry</h3>
              <p>
                Gently uncovering underlying emotional and psychological
                patterns.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="values-section">
        <div className="values-content">
          <h2>Client Focus</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="profile-section">
        <div className="profile-content">
          <div className="profile-text">
            <h2>Personal Statement</h2>
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
                goal of creating “Art,” but about the process. This process
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
  "2SLGBTQA+",
  "Addiction",
  "Anger",
  "Anxiety",
  "Body Image",
  "Burnout/Stress",
  "Codependence",
  "Coping Skills",
  "Divorce & Break-ups",
  "Eating Issues",
  "Elders/Seniors",
  "Family Conflict",
  "Grief & Loss",
  "Identity Exploration",
  "Intimacy & Sex",
  "Men's Issues",
  "Non-Binary",
  "Parents",
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

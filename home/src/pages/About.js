import * as React from "react";
import "../styles/index.scss";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function About () {
  return (
    <main>
      <div className="about-title-holder">
        <h1 className="about-title">About</h1>        
      </div>

      <div className="about-expectations">
        <p>What can you expect from working with me?</p>
      </div>

      <div className="section">
        <div className="section-label">
          <p className="label-title">Approach</p>
          <p className="label-subtitle">Theory & Politics</p>
        </div>

        <div className="section-content">
          Anti-Oppressive, Art Therapy, Attachment Focused, Existential, Expressive Arts, Mindfulness, Narrative, Psychoanalytic, Relational, Somatic, Strengths Based, Trauma Informed, Compassionate Inquiry.
        </div>
      </div>

      <div className="section">
        <div className="section-label">
          <p className="label-title">Expertise</p>
          <p className="label-subtitle">Client Focus</p>
        </div>
        <div className="section-content">
          <ul>
              <li>2SLGBTQA+</li>
              <li>Addiction</li>
              <li>Anger</li>
              <li>Anxiety</li>
              <li>Body Image</li>
              <li>Burnout/Stress</li>
              <li>Codependence</li>
              <li>Coping Skills</li>
              <li>Divorce & Break-ups</li>
              <li>Eating Issues</li>
              <li>Elders/Seniors</li>
              <li>Family Conflict</li>
              <li>Grief & Loss</li>
              <li>Identity Exploration</li>
              <li>Intimacy & Sex</li>
              <li>Men's Issues</li>
              <li>Non-Binary</li>
              <li>Parents</li>
              <li>Power Relations</li>
              <li>Relationship Difficulties</li>
              <li>Self Esteem & Confidence</li>
              <li>Sex Work Positive</li>
              <li>Shame</li>
              <li>Spiritual</li>
              <li>Trans-Specific</li>
              <li>Trauma</li>
              <li>Women's Issues</li>
            </ul>
        </div>
      </div>

      <div className="section">
        <div className="section-label">
          <p className="label-title">Personal Statement</p>
          <p className="label-subtitle">How I Can Help</p>
        </div>
        <div className="section-content">
          <p>The psychotherapy I provide for adults begins with the belief that you are the expert on your own life, and that I am here to help motivate and empower you towards the personal growth that matters most to you. I also believe that our relationships, communities, and social contexts have a significant impact in shaping who we are, what we take notice of in the world, and how we come to engage with that world. I see the therapeutic relationship as no different, and therefore provide a collaborative, nonjudgmental, compassionate, and safe atmosphere where clients feel both heard and seen. In all aspects of therapy, I take a non-pathologizing, culturally sensitive, and anti-oppressive stance that seeks to disrupt and reposition systemically oppressive narratives.</p>
          <p>Through an integrative approach, I tailor my practice to best meet each client's unique needs and perspectives while working from an attachment, trauma-informed, and systems-based lens. This may include any combination of art therapy, narrative therapy, somatic therapy (mind-body), gestalt therapy, and family/systems therapy. In short, this means looking closely at meaningful relationships and life events, reauthoring harmful narratives, empowering you through the contextualizing and processing of significant experiences, and working on reconnecting with your emotional and bodily intelligences.</p>
          <p>For those curious about art therapy, here's a bit about how I practice. I focus on using creative practices as a way to help reframe and (re)examine how we look at ourselves, our relationships, and the world. Art therapy isn't about the end goal of creating “Art,” but about the process. This process means tapping into parts of the brain that often get overlooked or underused, but actually provide a wealth of knowledge about how we each uniquely experience and perceive the world. Through the use of imagination, metaphor, symbolism, and associations, art therapy can help clients garner new perspectives, and even help us problem solve in new ways. In short, art therapy provides a nonthreatening means of accessing, externalizing, making sense of, and integrating difficult thoughts, feelings, and experiences when we find that words alone are seemingly not up to the task.</p>
        </div>
      </div>

      <div className="section">
        <div className="section-label">
          <p className="label-title">Education <br/> & <br/>Qualifications</p>
        </div>
        <div className="section-content">
          I received my Honours BA in Psychology from York University, and my Masters level diploma in Art Therapy from the Toronto Art Therapy Institute (TATI). I am a fully qualified Registered Psychotherapist with the College of Registered Psychotherapists of Ontario (CRPO), a Professional member of the Canadian Art Therapy Association (CATA), and a member of the Society of Estonian Artists in Toronto (EKKT).
        </div>
      </div>

      <div className="consult-box">
        <div className="consult-text">
          <p>No Fee Consultation (Individual) - 15 min.</p>
        </div>

        <Link to="/contact">
          <button className="consult-btn">Book Now</button>
        </Link>
      </div>

      <Footer />
    </main>
  )
}
import * as React from 'react'
import './styles.scss'
import './about-and-services.scss'
import { Link } from 'gatsby'
import Footer from '../components/Footer'

export default function Services () {
  return (
    <main className='page-content'>
      <div className="services-title-holder">
        <p className="services-title">
          Available Services
        </p>
      </div>
      
      <div className="help-list">
        <h3>Therapy can help you take charge.</h3>
        <ul>
          <li>Do you feel distant or disconnected from your partner?</li>
          <li>Are you facing separation or divorce?</li>
          <li>Are you negotiating a difficult personal decision or challenge?</li>
          <li>Do you struggle with parenting?</li>
          <li>Are you overcome by negative thought patterns or cruel self-talk?</li>
          <li>Do you feel stuck, burned-out or overwhelmed?</li>
          <li>Are you frustrated by self-sabotaging behaviour?</li>
          <li>Do you feel unhappy or dissatisfied in your own skin?</li>
        </ul>
      </div>

      <div className="section">
        <div className="section-label">
          <p className="label-title">Psychotherapy Session</p>
          <p className="label-subtitle">Individual</p>
        </div>

        <div className="section-content">
          <p>
            Psychotherapy for individuals specializing in anxiety and stress, self esteem, relationships difficulties, and personal development.
          </p>
          <p>
            Build upon what was discussed in previous weeks, or explore new topics or concerns that have taken precedence in your life.
          </p>
          <p>
            In these sessions you are the expert of your own life. There are no judgements or assumptions made during our time; the focus is on collaborating with you to create a space where your voice, your wants, and your unique perspectives are not only heard, but supported and advocated for.
          </p>
          <p>
            Pricing: $135 / 50 mins.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-label">
          <p className="label-title">Psychotherapy Session</p>
          <p className="label-subtitle">Low-income &amp; students</p>
        </div>

        <div className="section-content">
          <p>
            Psychotherapy for individuals specializing in anxiety and stress, self esteem, relationships difficulties, and personal development.
          </p>
          <p>
            *Sliding scale rates are subject to availability
          </p>
          <p>
            Pricing: $90-120 / 50 mins.
          </p>
        </div>

      </div>

      <div className="section">
        <div className="section-label">
          <p className="label-title">Art <br/> Psychotherapy</p>
        </div>

        <div className="section-content">
          <p>
            Using creative practices as a way to help reframe and (re)examine how we look at ourselves, our relationships, and the world. Art psychotherapy isn&apos;t about the end goal of creating “Art,” but about the process.
          </p>
          <p>
            This process means tapping into parts of the brain that often get overlooked or underused, but actually provide a wealth of knowledge about how we each uniquely experience and perceive the world.
          </p>
          <p>
            Pricing: $135 / 50 mins.
          </p>
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

export { Head } from './index'

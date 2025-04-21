"use client";
import "../styles/styles.scss";
import "../styles/resources.scss";
import Link from "next/link";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faBook, faLink } from "@fortawesome/free-solid-svg-icons";

export default function Resources() {
  return (
    <main className="page-content">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <h1>
            Resources
            <span className="subtitle">Tools for Your Mental Health Journey</span>
          </h1>
          <p className="hero-text">
            Access helpful articles, worksheets, and recommended readings to support your personal growth.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles-section">
        <div className="articles-content">
          <h2>Featured Articles</h2>
          <div className="articles-grid">
            {articles.map((article, index) => (
              <div key={index} className="article-card">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <Link href={article.link} className="read-more">
                  Read More
                  <FontAwesomeIcon icon={faLink} className="icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="downloads-section">
        <div className="downloads-content">
          <h2>Downloadable Resources</h2>
          <div className="downloads-grid">
            {downloads.map((resource, index) => (
              <div key={index} className="download-card">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <button className="download-button">
                  Download PDF
                  <FontAwesomeIcon icon={faDownload} className="icon" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reading List */}
      <section className="reading-section">
        <div className="reading-content">
          <h2>Recommended Reading</h2>
          <div className="reading-grid">
            {recommendedBooks.map((book, index) => (
              <div key={index} className="book-card">
                <div className="book-info">
                  <h3>{book.title}</h3>
                  <p className="author">by {book.author}</p>
                  <p className="description">{book.description}</p>
                </div>
                <Link href={book.link} className="book-link" target="_blank">
                  Find Book
                  <FontAwesomeIcon icon={faBook} className="icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to receive monthly mental health tips and resources.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="cta-button">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const articles = [
  {
    title: "Understanding Anxiety in Men",
    description: "Learn about the unique ways anxiety manifests in men and effective coping strategies.",
    link: "/articles/understanding-anxiety"
  },
  {
    title: "Building Emotional Resilience",
    description: "Discover practical techniques for developing emotional strength and adaptability.",
    link: "/articles/emotional-resilience"
  },
  {
    title: "Navigating Work-Life Balance",
    description: "Tips for maintaining a healthy balance between professional and personal life.",
    link: "/articles/work-life-balance"
  },
  {
    title: "Improving Communication in Relationships",
    description: "Essential strategies for better communication with partners, family, and friends.",
    link: "/articles/communication-skills"
  }
];

const downloads = [
  {
    title: "Stress Management Worksheet",
    description: "Track and manage your stress levels with this practical worksheet.",
    link: "/downloads/stress-worksheet.pdf"
  },
  {
    title: "Mindfulness Exercise Guide",
    description: "Step-by-step guide to daily mindfulness practices.",
    link: "/downloads/mindfulness-guide.pdf"
  },
  {
    title: "Goal Setting Template",
    description: "Structure your personal development goals with this template.",
    link: "/downloads/goal-template.pdf"
  },
  {
    title: "Emotional Awareness Journal",
    description: "Daily prompts for emotional reflection and growth.",
    link: "/downloads/emotional-journal.pdf"
  }
];

const recommendedBooks = [
  {
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    description: "Understanding trauma and healing through the lens of mind-body connection.",
    link: "https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "Build good habits and break bad ones with proven strategies.",
    link: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299"
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    description: "A powerful exploration of finding purpose and meaning in life.",
    link: "https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/0807014273"
  },
  {
    title: "Emotional Intelligence",
    author: "Daniel Goleman",
    description: "Learn how emotional intelligence impacts success and relationships.",
    link: "https://www.amazon.com/Emotional-Intelligence-Matter-More-Than/dp/055338371X"
  }
];

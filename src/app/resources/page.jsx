"use client";
import "../styles/resources.scss";
import Link from "next/link";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { articles, recommendedBooks } from "../scripts/constants";

export default function Resources() {
  return (
    <main className="page-content">
      <section className="page-hero">
        <div className="hero-content">
          <h1>
            Resources
            <span className="subtitle">
              Tools for Your Mental Health Journey
            </span>
          </h1>
        </div>
      </section>

      <section className="resources-list-section">
        <h2>Helpful Resources</h2>
        <div className="resources-list-grid">
          {articles.map((article, index) => (
            <div key={index} className="resources-list-item">
              <span className="resources-list-icon">
                <FontAwesomeIcon icon={faSeedling} />
              </span>
              <div className="resources-list-content">
                <span className="resources-list-title">
                  <Link
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </Link>
                </span>
                <span className="resources-list-desc">
                  {article.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="books-list-section">
        <h2>Recommended Reading</h2>
        <div className="books-list-grid">
          {recommendedBooks.map((book, index) => (
            <div key={index} className="books-list-item">
              <span className="books-list-icon">
                <FontAwesomeIcon icon={faBook} />
              </span>
              <div className="books-list-content">
                <span className="books-list-title">
                  <Link
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {book.title}
                  </Link>
                </span>
                <span className="books-list-author">by {book.author}</span>
                <span className="books-list-desc">{book.description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Get In Touch</h2>
          <p>
            Fill out the <a href="/contact">contact page</a> to start the
            conversation{" "}
          </p>
          <a href="/contact">
            <button className="cta-button">Let's Talk</button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

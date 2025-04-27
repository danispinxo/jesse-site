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

      <section className="articles-section">
        <div className="articles-content">
          <div className="articles-grid">
            {articles.map((article, index) => (
              <div key={index} className="article-card">
                <h3>
                  {article.title}{" "}
                  <Link
                    href={article.link}
                    className="read-more"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLink} className="icon" />
                  </Link>
                </h3>
                <p>{article.description}</p>
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
          <h2>Get In Touch</h2>
          <p>Fill out the contact page to start the conversation </p>
          <a href="/contact">
            <button className="cta-button">Let's Talk</button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const articles = [
  {
    title: "Kids Help Phone",
    description:
      "Kids Help Phone is a Canadian and world leader known for their expertise and continuous innovation as Canada's only 24/7 counselling and information service for young people. Since 1989, trained & professional counsellors have been listening to kids, often when no one else can or will.",
    link: "https://kidshelpphone.ca/",
  },
  {
    title: "Crisis Services",
    description:
      "Available to all Canadians seeking support. Visit Crisis Services Canada for the distress centres and crisis organizations nearest you. If you or someone you know is thinking about suicide, call the Canada Suicide Prevention Service at 1-833-456-4566 (24/7) or text 45645 (4 pm to 12 am ET).",
    link: "https://988.ca/",
  },
  {
    title: "Hope for Wellness",
    description:
      "The Hope For Wellness Hotline is available to all Indigenous peoples across Canada who need immediate crisis intervention. Experienced and culturally sensitive help line counsellors can help if you want to talk or are distressed. Call 1-855-242-3310 (toll-free) or connect to the online Hope for Wellness chat.",
    link: "https://www.hopeforwellness.ca/",
  },
  {
    title: "Rainbow Health Ontario (RHO)",
    description:
      "Rainbow Health Ontario is a province-wide program of Sherbourne Health that works to promote the health of Ontario's LGBT2SQ communities and improve their access to services. RHO creates resources, provides information and consultation services, delivers education and training, and supports research to develop evidence-based practice and informed public policy.",
    link: "https://www.rainbowhealthontario.ca/",
  },
  {
    title: "The 519",
    description:
      "The 519 provides a range of services from counselling and queer parenting resources to coming out groups, trans programming, and seniors' support. They also provide free, accommodating and non-judgemental space where individuals, organizations and non-profit groups can meet, organize and work towards their goals.",
    link: "https://www.the519.org/",
  },
  {
    title: "Victim Services",
    description:
      "Toronto Rape Crisis Centre/Multicultural Women Against Rape is a grassroots, women-run collective working towards a violence-free world by providing anti-oppressive, feminist peer support to survivors of sexual violence. Their 24 hour hotline is 416-597-8808 or you can email a counselor at crisis@trccmwar.ca.",
    link: "https://trccmwar.ca",
  },
  {
    title: "Red Door Family Shelter",
    description:
      "The Red Door Family Shelter provides emergency shelter and support for women and children affected by domestic abuse, families experiencing a housing crisis, and refugee claimants with nowhere else to turn. If you or a family you know requires shelter call Central Family Intake at 416-397-5637.If you are a woman seeking shelter from situations of violence or intimate partner violence call their Crisis Line at 416-423-0310 (press 0), or the Assaulted Women's Helpline at 1-866-863-0511.",
    link: "https://www.reddoorshelter.ca/",
  },
];

const recommendedBooks = [
  {
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    description:
      "Understanding trauma and healing through the lens of mind-body connection.",
    link: "https://www.chapters.indigo.ca/en-ca/books/the-body-keeps-the-score/9780143127741-item.html",
  },
  {
    title: "Daring Greatly",
    author: "Brené Brown",
    description:
      "How the courage to be vulnerable transforms the way we live, love, parent, and lead.",
    link: "https://www.chapters.indigo.ca/en-ca/books/daring-greatly/9781592408412-item.html",
  },
  {
    title: "The Art Therapy Sourcebook",
    author: "Cathy Malchiodi",
    description:
      "A comprehensive guide to the healing power of art in therapy and self-expression.",
    link: "https://www.chapters.indigo.ca/en-ca/books/the-art-therapy-sourcebook/9780071468275-item.html",
  },
  {
    title: "Mindfulness for Beginners",
    author: "Jon Kabat-Zinn",
    description:
      "Reclaiming the present moment and your life through mindfulness practices.",
    link: "https://www.indigo.ca/en-ca/mindfulness-for-beginners-reclaiming-the-present-momentand-your-life/9781622036677.html",
  },
  {
    title: "The Mindful Way Workbook",
    author: "John Teasdale, Mark Williams, Zindel Segal",
    description:
      "An 8-week program to free yourself from depression and emotional distress through mindfulness.",
    link: "https://www.chapters.indigo.ca/en-ca/books/the-mindful-way-workbook/9781462508143-item.html",
  },
  {
    title: "Art as Therapy",
    author: "Alain de Botton, John Armstrong",
    description:
      "Exploring how art can help us understand ourselves and improve our emotional well-being.",
    link: "https://www.chapters.indigo.ca/en-ca/books/art-as-therapy/9780714872780-item.html",
  },
];

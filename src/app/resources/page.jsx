"use client";
import "../styles/resources.scss";
import Link from "next/link";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSeedling } from "@fortawesome/free-solid-svg-icons";

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
  {
    title: "Get Help Here: Mental health support (Government of Canada)",
    description:
      "This official Government of Canada portal provides a comprehensive directory of mental health resources, crisis lines, and support services available across the country. The site offers information for people in crisis, youth, Indigenous Peoples, veterans, and those seeking help with substance use or family violence. It also connects users to national organizations, suicide prevention resources, and local supports, ensuring that everyone in Canada can find the help they need, when they need it.",
    link: "https://www.canada.ca/en/public-health/campaigns/get-help-here.html",
  },
  {
    title: "Canadian Mental Health Association (CMHA) National",
    description:
      "The Canadian Mental Health Association (CMHA) provides information, resources, and support for mental health and well-being across Canada, including education, advocacy, and local services for individuals and families.",
    link: "https://cmha.ca/",
  },
];

const recommendedBooks = [
  {
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    description:
      "Understanding trauma and healing through the lens of mind-body connection.",
    link: "https://booklore.ca/item/rBSsMLeAZlZgLaHbv2BzYg",
  },
  {
    title: "Daring Greatly",
    author: "Brené Brown",
    description:
      "How the courage to be vulnerable transforms the way we live, love, parent, and lead.",
    link: "https://booklore.ca/item/dKry7NBeUZDe_6cSSiigGQ",
  },
  {
    title: "The Art Therapy Sourcebook",
    author: "Cathy Malchiodi",
    description:
      "A comprehensive guide to the healing power of art in therapy and self-expression.",
    link: "https://booklore.ca/item/ZsXI6jTLnOnCaOE10SZDnw",
  },
  {
    title: "Mindfulness for Beginners",
    author: "Jon Kabat-Zinn",
    description:
      "Reclaiming the present moment and your life through mindfulness practices.",
    link: "https://booklore.ca/item/sU74UxwKi18oapnZPwAC0Q",
  },
  {
    title: "The Mindful Way Workbook",
    author: "John Teasdale, Mark Williams, Zindel Segal",
    description:
      "An 8-week program to free yourself from depression and emotional distress through mindfulness.",
    link: "https://booklore.ca/item/0-WUlnSYpN90VMdMq9paDA",
  },
  {
    title: "Art as Therapy",
    author: "Alain de Botton, John Armstrong",
    description:
      "Exploring how art can help us understand ourselves and improve our emotional well-being.",
    link: "https://booklore.ca/item/BwcNDtmBUlYMdbEW99xYVg",
  },
];

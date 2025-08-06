
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faLeaf } from "@fortawesome/free-solid-svg-icons";

const NotFoundPage = () => {
  return (
    <main className="page-content">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="error-icon">
            <FontAwesomeIcon icon={faLeaf} />
          </div>
          <h1 className="error-title">404</h1>
          <h2 className="error-subtitle">Page Not Found</h2>
          <p className="error-message">
            Sorry! It looks like the page you are trying to visit doesn't exist.
            It may have been moved or deleted.
          </p>
          <Link href="/" className="home-button">
            <FontAwesomeIcon icon={faHome} />
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;

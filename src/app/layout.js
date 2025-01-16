import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "./components/Navbar";
import { ServerStyleSheets } from "@mui/styles";
config.autoAddCss = false;

export const metadata = {
  title: "Jesse Pajuaar Therapy Studios",
  siteUrl: "https://jptherapystudios.com/",
  image: "../../public/images/Logo.webp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Toronto-based art therapist and psychotherapist available for teletherapy and remote therapy, phone and video sessions. Servicing the Toronto area and nearby (Barrie, York Region, Caledon, Mississauga, Brampton, Scarborough, Kitchener-Waterloo, Hamilton, Niagara, St. Catharines, Georgian Bay). Offering psychotherapy and art therapy for teens and adults."
        />
        <meta
          name="keywords"
          content="art therapy, psychotherapy, psychotherapist, Toronto psychotherapist, Toronto art therapist, remote therapy, online therapy, online art therapy, therapist"
        />
        <meta name="author" content="Jesse Pajuaar" />
        <link rel="icon" type="image/png" href="/images/Logo.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bellota+Text:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Gabarito:wght@400..900&family=Harmattan:wght@400;500;600;700&family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
          defer
        />
        <script src="https://www.google.com/recaptcha/api.js" async defer />
        <title>Jesse Pajuäär Therapy Studios</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

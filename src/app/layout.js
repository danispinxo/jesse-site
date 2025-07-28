import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "./components/Navbar";
import {
  Bellota_Text,
  Gabarito,
  Harmattan,
  Poppins,
  Playfair_Display,
} from "next/font/google";

config.autoAddCss = false;

const bellota = Bellota_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
const harmattan = Harmattan({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Jesse Pajuaar Therapy Studios",
  siteUrl: "https://jptherapystudios.com/",
  image: "../../public/images/Logo.webp",
  description:
    "Professional therapy and counseling services focused on men's mental health, anxiety, addiction, and mindfulness.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bellota.className} ${gabarito.className} ${harmattan.className} ${poppins.variable} ${playfair.variable}`}
    >
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
        <title>Jesse Pajuäär Therapy Studios</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

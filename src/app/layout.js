import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "./components/Navbar";
import StructuredData from "./components/StructuredData";
import {
  Gabarito,
  Harmattan,
  Poppins,
  Playfair_Display,
} from "next/font/google";

config.autoAddCss = false;

const harmattan = Harmattan({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: true,
});

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-playfair",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata = {
  title:
    "Jesse Pajuäär Therapy Studios - Registered Psychotherapist & Art Therapist",
  description:
    "Professional therapy and counseling services in Ontario. Registered psychotherapist and art therapist offering online therapy for anxiety, depression, and personal growth.",
  metadataBase: new URL("https://jptherapystudios.com"),
  alternates: {
    canonical: "https://jptherapystudios.com",
  },
  openGraph: {
    title:
      "Jesse Pajuäär Therapy Studios - Registered Psychotherapist & Art Therapist",
    description:
      "Professional therapy and counseling services in Ontario. Registered psychotherapist and art therapist offering online therapy.",
    url: "https://jptherapystudios.com",
    siteName: "Jesse Pajuäär Therapy Studios",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://jptherapystudios.com/images/JessePajuaar.webp",
        width: 400,
        height: 400,
        alt: "Jesse Pajuäär - Registered Psychotherapist and Art Therapist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jesse Pajuäär Therapy Studios - Registered Psychotherapist & Art Therapist",
    description:
      "Professional therapy and counseling services in Ontario. Registered psychotherapist and art therapist offering online therapy.",
    images: ["https://jptherapystudios.com/images/JessePajuaar.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${gabarito.className} ${harmattan.className} ${poppins.variable} ${playfair.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="art therapy, psychotherapy, psychotherapist, Toronto psychotherapist, Toronto art therapist, remote therapy, online therapy, online art therapy, therapist, Ontario therapy, mental health counseling, anxiety therapy, depression therapy, LGBTQ+ therapy, trauma therapy"
        />
        <meta name="author" content="Jesse Pajuaar" />
        <meta name="language" content="en-CA" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Ontario, Canada" />
        <meta name="theme-color" content="#2d5a3d" />
        <meta name="msapplication-TileColor" content="#2d5a3d" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="JPTS" />
        <link rel="apple-touch-icon" href="/images/Logo.webp" />
        <link rel="canonical" href="https://jptherapystudios.com" />
        <link rel="icon" type="image/png" href="/images/Logo.webp" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <title>Jesse Pajuäär Therapy Studios</title>
        <StructuredData />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "Jesse Pajuaar Therapy Studios",
  siteUrl: "https://jptherapystudios.com/",
  description:
    "Toronto-based art therapist and psychotherapist available for teletherapy and remote therapy, phone and video sessions. Servicing the Toronto area and nearby (Barrie, York Region, Caledon, Mississauga, Brampton, Scarborough, Kitchener-Waterloo, Hamilton, Niagara, St. Catharines, Georgian Bay). Offering psychotherapy and art therapy for teens and adults.",
  image: "../../public/images/Logo.webp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

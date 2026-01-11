import Script from "next/script";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Jesse Pajuäär Therapy Studios",
    "alternateName": "Jesse Pajuaar Therapy Studios",
    "url": "https://jptherapystudios.com",
    "logo": "https://jptherapystudios.com/images/Logo.webp",
    "image": "https://jptherapystudios.com/images/JessePajuaar.webp",
    "description": "Professional therapy and counseling services in Ontario. Registered psychotherapist and art therapist offering phone, in-person, hybrid, and remote therapy for anxiety, identity, agency, and personal growth as well as art therapy supervision and clinical supervision.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.6532",
      "longitude": "-79.3832"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Ontario"
      },
      {
        "@type": "City",
        "name": "Toronto"
      },
      {
        "@type": "City", 
        "name": "Barrie"
      },
      {
        "@type": "City",
        "name": "Hamilton"
      },
      {
        "@type": "City",
        "name": "Mississauga"
      },
      {
        "@type": "City",
        "name": "Wasaga Beach"
      },
      {
        "@type": "City",
        "name": "Collingwood"
      },
      {
        "@type": "City",
        "name": "Stayned"
      },
      {
        "@type": "City",
        "name": "Penetanguishene"
      },
      {
        "@type": "City",
        "name": "Orangeville"
      },
      {
        "@type": "City",
        "name": "Aurora"
      },
      {
        "@type": "City",
        "name": "Newmarket"
      },
      {
        "@type": "Region",
        "name": "Simcoe County"
      },
      {
        "@type": "Region",
        "name": "Grey County"
      },
      {
        "@type": "Region",
        "name": "Huron County"
      },
      {
        "@type": "Region",
        "name": "Bruce County"
      },
      {
        "@type": "City",
        "name": "Owen Sound"
      },
    ],
    "serviceType": [
      "Psychotherapy",
      "Art Therapy", 
      "Online Therapy",
      "Mental Health Counseling",
      "Clinical Supervision",
      "Phototherapy",
      "Photo Art Therapy",
      "Art Phototherapy",
      "Therapeutic Photography",
      "Art Therapy Supervision"
    ],
    "medicalSpecialty": [
      "Mental Health"
    ],
    "priceRange": "$90-$150",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "E-Transfer"],
    "currenciesAccepted": "CAD",
    "openingHours": "Mo-Fr 09:00-17:00",
    "email": "jesse.pajuaar@gmail.com"
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jesse Pajuäär",
    "jobTitle": "Registered Psychotherapist",
    "description": "Professional therapy and counseling services in Ontario. Registered psychotherapist and art therapist offering phone, in-person, hybrid, and remote therapy for anxiety, identity, agency, and personal growth as well as art therapy supervision and clinical supervision.",
    "url": "https://jptherapystudios.com/about",
    "image": "https://jptherapystudios.com/images/JessePajuaar.webp",
    "worksFor": {
      "@type": "Organization",
      "name": "Jesse Pajuäär Therapy Studios"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Registered Psychotherapist (RP)",
        "credentialCategory": "Professional License"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "Registered Canadian Art Therapist (RCAT)",
        "credentialCategory": "Professional License"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Diploma in Art Therapy (DTATI)",
        "credentialCategory": "Degree"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Honours Bachelor of Arts (HBA)",
        "credentialCategory": "Degree"
      }
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "College of Registered Psychotherapists of Ontario",
        "url": "https://www.crpo.ca"
      },
      {
        "@type": "Organization",
        "name": "Canadian Art Therapy Association", 
        "url": "https://www.canadianarttherapy.org"
      }
    ],
    "knowsAbout": [
      "Psychotherapy",
      "Art Therapy",
      "Trauma Therapy",
      "LGBTQ+ Therapy",
      "Online Therapy",
      "Photography"
    ]
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Psychotherapy and Art Therapy Services",
    "description": "Professional therapy services including individual psychotherapy, art therapy, and clinical supervision. Sliding scale options available.",
    "provider": {
      "@type": "Person",
      "name": "Jesse Pajuäär"
    },
    "areaServed": {
      "@type": "State",
      "name": "Ontario"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Therapy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Individual Psychotherapy",
            "description": "One-on-one therapy sessions focused on personal growth and mental health."
          },
          "price": "140",
          "priceCurrency": "CAD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Art Psychotherapy",
            "description": "Creative therapy sessions using art as a tool for healing and self-discovery."
          },
          "price": "140",
          "priceCurrency": "CAD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Clinical Supervision",
            "description": "Professional supervision for therapists working toward licensure."
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Initial Consultation", 
            "description": "Free 15-minute consultation to discuss therapy options."
          },
          "price": "0",
          "priceCurrency": "CAD"
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(organizationSchema)}
      </Script>
      <Script
        id="person-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(personSchema)}
      </Script>
      <Script
        id="services-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(servicesSchema)}
      </Script>
    </>
  );
}
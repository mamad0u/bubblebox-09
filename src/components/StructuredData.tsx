'use client';

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "BubbleBox",
    "url": "https://bubbleboxproject.org",
    "logo": "https://bubbleboxproject.org/BBX.png",
    "description": "BubbleBox construit des modules de douches mobiles autonomes pour offrir un accès gratuit et décent à l'hygiène aux personnes sans-abris, mal-logées, migrantes et réfugiées.",
    "email": "info@bubbleboxproject.org",
    "foundingDate": "2024",
    "areaServed": [
      {
        "@type": "City",
        "name": "Bordeaux",
        "addressRegion": "Nouvelle-Aquitaine",
        "addressCountry": "FR"
      },
      {
        "@type": "Place",
        "name": "France, Europe"
      }
    ],
    "knowsAbout": [
      "Douches mobiles",
      "Accès à l'hygiène",
      "Aide humanitaire",
      "Inclusion sociale",
      "Durabilité environnementale"
    ],
    "sameAs": [
      "https://www.facebook.com/bubblebox",
      "https://www.instagram.com/bubblebox",
      "https://www.linkedin.com/company/bubblebox"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BubbleBox",
    "url": "https://bubbleboxproject.org",
    "description": "Modules de douches mobiles autonomes pour l'accès digne à l'hygiène",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bubbleboxproject.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Module de douches mobiles",
    "provider": {
      "@type": "NGO",
      "name": "BubbleBox"
    },
    "description": "Modules de douches mobiles autonomes construits dans des conteneurs maritimes recyclés. Chaque module accueille 3 cabines individuelles et peut fournir jusqu'à 100 douches par jour.",
    "areaServed": [
      {
        "@type": "City",
        "name": "Bordeaux",
        "addressRegion": "Nouvelle-Aquitaine",
        "addressCountry": "FR"
      },
      {
        "@type": "Place",
        "name": "France, Europe"
      }
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Accès gratuit à l'hygiène"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}


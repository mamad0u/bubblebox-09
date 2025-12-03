import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { StructuredData } from "../components/StructuredData";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const raleway = Raleway({ 
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bubbleboxproject.org'),
  title: {
    default: "BubbleBox — Douches Mobiles et Accès Digne à l'Hygiène",
    template: "%s | BubbleBox"
  },
  description: "BubbleBox construit des modules de douches mobiles autonomes pour offrir un accès gratuit et décent à l'hygiène aux personnes sans-abris, mal-logées, migrantes et réfugiées. Solutions d'hygiène mobile, conteneur maritime recyclé, douches autonomes.",
  keywords: [
    "douches mobiles",
    "douches mobiles Bordeaux",
    "accès à l'hygiène",
    "accès à l'hygiène Bordeaux",
    "hygiène publique",
    "hygiène publique Bordeaux",
    "module de douches",
    "module de douches Bordeaux",
    "douches autonomes",
    "douches autonomes Bordeaux",
    "hygiène mobile",
    "hygiène mobile Bordeaux",
    "sans-abris",
    "sans-abris Bordeaux",
    "aide humanitaire",
    "aide humanitaire Bordeaux",
    "conteneur maritime recyclé",
    "conteneur maritime recyclé Bordeaux",
    "hygiène pour tous",
    "hygiène pour tous Bordeaux",
    "accès digne à l'hygiène",
    "accès digne à l'hygiène Bordeaux",
    "douches gratuites",
    "douches gratuites Bordeaux",
    "inclusion sociale",
    "inclusion sociale Bordeaux",
    "hygiène durable",
    "hygiène durable Bordeaux",
    "eau filtrée",
    "énergie solaire",
    "douches itinérantes",
    "douches itinérantes Bordeaux",
    "BubbleBox Bordeaux",
    "association Bordeaux",
    "ONG Bordeaux",
    "hygiène de rue Bordeaux",
    "mal-logés Bordeaux",
    "réfugiés Bordeaux"
  ],
  authors: [{ name: "BubbleBox" }],
  creator: "BubbleBox",
  publisher: "BubbleBox",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://bubbleboxproject.org",
    siteName: "BubbleBox",
    title: "BubbleBox — Douches Mobiles et Accès Digne à l'Hygiène",
    description: "Modules de douches mobiles autonomes pour offrir un accès gratuit et décent à l'hygiène. Solutions d'hygiène mobile pour personnes sans-abris, mal-logées, migrantes et réfugiées.",
    images: [
      {
        url: "/hero-img.jpg",
        width: 1200,
        height: 630,
        alt: "Module de douches mobile BubbleBox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BubbleBox — Douches Mobiles et Accès Digne à l'Hygiène",
    description: "Modules de douches mobiles autonomes pour offrir un accès gratuit et décent à l'hygiène.",
    images: ["/hero-img.jpg"],
  },
  alternates: {
    canonical: "https://bubbleboxproject.org",
  },
  category: "humanitaire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.variable} ${raleway.variable}`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

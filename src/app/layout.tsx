import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dr-wexler.infomed.co.il"),
  title: {
    default: "ד\"ר דניאל וקסלר | מרפאת שיניים מתקדמת",
    template: "%s | ד\"ר דניאל וקסלר",
  },
  description:
    "ד\"ר דניאל וקסלר - מומחה לרפואת שיניים מתקדמת. כירורגיה פומית, שיקום הפה וטיפולי חניכיים ברמה הגבוהה ביותר. תיאום תור: 03-6426994",
  keywords: [
    "רופא שיניים",
    "ד\"ר דניאל וקסלר",
    "כירורגיה פומית",
    "שיקום הפה",
    "טיפולי חניכיים",
    "השתלות שיניים",
    "מרפאת שיניים",
    "רפואת שיניים",
    "dental clinic",
    "Dr. Daniel Wexler",
  ],
  authors: [{ name: "ד\"ר דניאל וקסלר" }],
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: "ד\"ר דניאל וקסלר - מרפאת שיניים",
    title: "ד\"ר דניאל וקסלר | מרפאת שיניים מתקדמת",
    description:
      "טיפולי שיניים ברמה הגבוהה ביותר. כירורגיה פומית, שיקום הפה וטיפולי חניכיים בגישה אישית ומקצועית.",
    images: [{ url: "/images/logo.png", width: 500, height: 217, alt: "ד\"ר דניאל וקסלר" }],
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
  alternates: {
    canonical: "https://dr-wexler.infomed.co.il",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        {children}
        <JsonLd />
      </body>
    </html>
  );
}

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "ד\"ר דניאל וקסלר",
    alternateName: "Dr. Daniel Wexler",
    description:
      "מרפאת שיניים מתקדמת המציעה כירורגיה פומית, שיקום הפה וטיפולי חניכיים ברמה הגבוהה ביותר.",
    url: "https://dr-wexler.infomed.co.il",
    telephone: ["03-6426994", "053-9405051"],
    image: "https://dr-wexler.infomed.co.il/images/logo.png",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.125285,
      longitude: 34.800616,
    },
    medicalSpecialty: [
      "Oral Surgery",
      "Prosthodontics",
      "Periodontics",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "כירורגיה",
        alternateName: "Oral Surgery",
      },
      {
        "@type": "MedicalProcedure",
        name: "טיפולי חניכיים",
        alternateName: "Gum Treatments",
      },
      {
        "@type": "MedicalProcedure",
        name: "שיקום אסתטי של הפה",
        alternateName: "Aesthetic Oral Rehabilitation",
      },
      {
        "@type": "MedicalProcedure",
        name: "טיפולים בהרדמה מלאה",
        alternateName: "Treatments Under Full Anesthesia",
      },
      {
        "@type": "MedicalProcedure",
        name: "טיפולים בגז צחוק",
        alternateName: "Nitrous Oxide Sedation",
      },
      {
        "@type": "MedicalProcedure",
        name: "לייזר לשיכוך כאבים",
        alternateName: "Laser Pain Relief",
      },
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      description: "בתיאום מראש",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

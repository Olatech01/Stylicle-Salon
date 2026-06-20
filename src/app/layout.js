import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ─── Updated Metadata for Female Hair Salon ───
export const metadata = {
  title: "Stylicle & Co. | Premium Hair Salon for Women",
  description:
    "Transform your look at Stylicle & Co. — expert haircuts, styling, coloring, and luxury hair treatments for women in [City]. Book your appointment today!",
  keywords: [
    "hair salon",
    "women's haircuts",
    "hair coloring",
    "hair treatments",
    "balayage",
    "bridal hair",
    "salon near me",
    "hair stylist",
  ],
  authors: [{ name: "Stylicle & Co." }],
  openGraph: {
    title: "Stylicle & Co. | Premium Hair Salon for Women",
    description:
      "Expert hair styling, coloring, and treatments tailored for modern women. Walk out feeling confident and beautiful.",
    url: "https://your-salon-website.com",
    siteName: "Stylicle & Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stylicle & Co. | Premium Hair Salon for Women",
    description:
      "Expert hair styling, coloring, and treatments tailored for modern women.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Vaishnavi Ojha | Aspiring Software Engineer & Computer Science Student",
  description:
    "Official developer portfolio of Vaishnavi Ojha, an Aspiring Software Engineer and B.Tech CSE student at Lovely Professional University. Specializing in Next.js, React, Node.js, Express, MongoDB, and C++ WebAssembly applications.",
  keywords: [
    "Vaishnavi Ojha",
    "Aspiring Software Engineer",
    "Software Engineer Portfolio",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Lovely Professional University",
  ],
  authors: [{ name: "Vaishnavi Ojha" }],
  creator: "Vaishnavi Ojha",
  openGraph: {
    title: "Vaishnavi Ojha | Aspiring Software Engineer",
    description: "Aspiring Software Engineer building scalable, modern, and user-focused web applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#030712] text-[#F8FAFC] antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}

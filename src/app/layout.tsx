import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import "./globals.css";

const helveticaSans = localFont({
  src: "./fonts/helvetica.woff",
  variable: "--font-helvetica-sans",
  weight: "100 900",
});
const helveticaMono = localFont({
  src: "./fonts/helvetica.woff",
  variable: "--font-helvetica-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nathan's Portfolio",
  description: "Nathan Schultz's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${helveticaSans.variable} ${helveticaMono.variable}`}>
      <body className="antialiased">

        <Navbar />

        <main>
          {children}
        </main>

        <footer>
          <div className="container">
            <p>&copy; 2024 Nathan Schultz. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
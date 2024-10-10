import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/helvetica.woff",
  variable: "--font-helvetica-sans",
  weight: "100 900",
});
const geistMono = localFont({
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

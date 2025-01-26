import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Caveat } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: "Hrithik Koduri - Portfolio",
  description: "Personal portfolio of Hrithik Koduri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wisdom",
  description: "Learn from the wisdom of others",
  
};

export default function RootLayout({
  children
}: any) {
  return (
    <html lang="en">
     
      <body
        className="bg-bg-color font-serif"
      >
        <Navbar />
        {children}
       
      </body>
     
    </html>
  );
}

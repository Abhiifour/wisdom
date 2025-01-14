
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Wisdom",
  description: "Learn from the wisdom of others",
  
};

export default function RootLayout({
  children
}: any) {
  return (
    <html lang="en">
      {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta> */}
      <body
        className="bg-bg-color  w-[600px] m-auto pt-6 font-Inter sm:w-full" 
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
     
    </html>
  );
}

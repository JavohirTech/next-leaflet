import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Footer, Navbar} from "@/components";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Leaflet Map with Multiple Tile Layers",
  description: "A project demonstrating how to integrate Leaflet with Next.js to create an interactive map with multiple tile layers.",
  openGraph: {
    title: "Next.js Leaflet Map with Multiple Tile Layers",
    description: "A project demonstrating how to integrate Leaflet with Next.js to create an interactive map with multiple tile layers.",
    url: "https://next-leaflet-map.vercel.app",
    type: "website",
    images: [
      {
        url: "https://next-leaflet-map.vercel.app/marker.png",
        width: 800,
        height: 600,
        alt: "Next.js Leaflet Map",
      },
    ],
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar/>
      {children}
      <Footer/>
      </body>
      </html>
  );
}
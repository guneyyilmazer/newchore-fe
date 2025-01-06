"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopNavbar from "./components/navbars/Desktop";
import MobileNavbar from "./components/navbars/Mobile";
const inter = Inter({ subsets: ["latin"] });
import "./css/styles.css";
import { Providers } from "./Providers";
import Footer from "./components/Footer";
import { useState } from "react";

export const BACKEND_SERVER_IP = process.env.NEXT_PUBLIC_API_URL;

export const categories: categories = {
  cleaning: { value: { cleaning: true }, name: "cleaning" },
  cuttingGrass: { value: { cuttingGrass: true }, name: "cuttingGrass" },
  plumbing: { value: { plumbing: true }, name: "plumbing" },
  moving: { value: { moving: true }, name: "moving" },
  dogWalking: { value: { dogWalking: true }, name: "dogWalking" },
};
export const categoriesArray = [
  { value: { cleaning: true }, name: "cleaning", displayName: "Cleaning" },
  {
    value: { cuttingGrass: true },
    name: "cuttingGrass",
    displayName: "Cutting Grass",
  },
  { value: { plumbing: true }, name: "plumbing", displayName: "Plumbing" },
  { value: { moving: true }, name: "moving", displayName: "Moving" },
  {
    value: { dogWalking: true },
    name: "dogWalking",
    displayName: "Dog Walking",
  },
];
type categories = {
  cleaning: { value: { cleaning: true }; name: string };
  cuttingGrass: { value: { cuttingGrass: true }; name: string };
  plumbing: { value: { plumbing: true }; name: string };
  moving: { value: { moving: true }; name: string };
  dogWalking: { value: { dogWalking: true }; name: string };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  const toggleMobileNavbar = (isOpen: boolean) => {
    setIsMobileNavbarOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Allow scrolling
    }
  };

  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <div className="hidden lg:block">
            <DesktopNavbar />
          </div>
          <div className="lg:hidden">
            <MobileNavbar
              isOpen={isMobileNavbarOpen}
              toggleOpen={toggleMobileNavbar}
            />
          </div>
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}

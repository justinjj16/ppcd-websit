// src/app/layout.tsx
"use client";

import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LiveNotification from "@/components/Banner/LiveNotification";
import SocialMedia from "@/components/SocialMedia";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { useState } from "react";
import { Providers } from "./providers";

import AnnouncementModal from "@/components/Banner/Announcement/Modal";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLiveNotification = false;
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {isLiveNotification && <LiveNotification />}
          <Header isLiveNotification={isLiveNotification} />
          {isAnnouncementVisible && (
            <AnnouncementModal
              open={isAnnouncementVisible}
              onClose={() => setIsAnnouncementVisible(false)}
            />
          )}
          {children}
          <Analytics />
          <Footer />
          <SocialMedia />
        </Providers>
      </body>
    </html>
  );
}
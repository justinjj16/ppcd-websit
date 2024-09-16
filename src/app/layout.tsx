"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LiveNotification from "@/components/Banner/LiveNotification";
import SocialMedia from "@/components/SocialMedia";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLiveNotification = false;
  // new Date().getDay() === 0;
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {isLiveNotification && <LiveNotification />}

          <Header isLiveNotification={isLiveNotification} />
          {children}
          <Footer />
          <SocialMedia />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

"use client";

import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LiveNotification from "@/components/Banner/LiveNotification";
import SocialMedia from "@/components/SocialMedia";
import { useState } from "react";
import { Providers } from "./providers";
import AnnouncementModal from "@/components/Banner/Announcement/Modal";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLiveNotification = false;
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(false);

  return (
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
  );
}
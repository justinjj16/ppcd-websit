"use client";

import { ReactNode } from 'react';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LiveNotification from "@/components/Banner/LiveNotification";
import SocialMedia from "@/components/SocialMedia";

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  const isLiveNotification = false;
  // new Date().getDay() === 0;
  return (
    <div>
      {isLiveNotification && <LiveNotification />}
      <Header isLiveNotification={isLiveNotification} />
      {children}
      <Footer />
      <SocialMedia />
    </div>
  );
};

export default PublicLayout;

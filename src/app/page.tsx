import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import HomeHero from "@/components/HomeHero";
import UpcommingEvents from "@/components/UpCommingEvents";

export const metadata = {
  title: "Philadelphia Pentecostal Church of Dallas | A Place to Belong, Believe & Become",
  description: "Join PPCD Church in Garland, TX - A Bible-based, family-oriented church where you can grow in faith, find community, and experience God's love. Sunday services at 9:30 AM.",
  keywords: "church Dallas, Pentecostal church Garland, Bible church Texas, worship service, Christian fellowship, Malayalam church Dallas, English church Garland",
  openGraph: {
    title: "Philadelphia Pentecostal Church of Dallas",
    description: "A place to belong, believe, and become who God created you to be.",
    url: "https://ppcdchurch.org",
    siteName: "PPCD Church",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Philadelphia Pentecostal Church of Dallas",
    description: "Join us for worship this Sunday at 9:30 AM",
  },
  alternates: {
    canonical: "https://ppcdchurch.org",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <HomeHero />
      <UpcommingEvents />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
}
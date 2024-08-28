import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import ScrollUp from "@/components/Common/ScrollUp";
import UpCommingEvents from "@/components/UpCommingEvents";
import HomeHeading from "@/components/HomeHeading";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philadelphia Pentecostal Church of Dallas",
  description: "Philadelphia Pentecostal Church of Dallas",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />

      <HomeHeading />
      <UpCommingEvents />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
}

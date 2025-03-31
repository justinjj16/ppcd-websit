import PublicLayout from '@/components/PublicLayout/PublicLayout';
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import TopRigthAngle from "@/components/Designs/TopRigthAngle";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Philadelphia Pentecostal Church of Dallas",
  description: "ppcd about | Philadelphia Pentecostal Church of Dallas",
  // other metadata
};

const AboutPage = () => {
  return (
    <PublicLayout>
      <TopRigthAngle />
      <div className="pt-16"></div>
      <AboutSectionOne />
      <AboutSectionTwo />
    </PublicLayout>
  );
};

export default AboutPage;

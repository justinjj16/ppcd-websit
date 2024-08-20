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
    <>
      {/* <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      /> */}
      <TopRigthAngle />
      <div className="pt-16"></div>
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;

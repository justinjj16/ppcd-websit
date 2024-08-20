import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import TopRigthAngle from "@/components/Designs/TopRigthAngle";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Philadelphia Pentecostal Church of Dallas",
  description: "Philadelphia Pentecostal Church of Dallas",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      /> */}
      <TopRigthAngle />

      <Contact />
    </>
  );
};

export default ContactPage;

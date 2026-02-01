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
      <TopRigthAngle />

      <Contact />
    </>
  );
};

export default ContactPage;

import PublicLayout from '@/components/PublicLayout/PublicLayout';
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
    <PublicLayout>
      <TopRigthAngle />
      <Contact />
    </PublicLayout>
  );
};

export default ContactPage;

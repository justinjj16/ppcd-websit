import { Metadata } from "next";

import PublicLayout from '@/components/PublicLayout/PublicLayout';
import GiveComponent from "@/components/Give";

export const metadata: Metadata = {
  title: "Give Page | Philadelphia Pentecostal Church of Dallas",
  description: "ppcd Give | Philadelphia Pentecostal Church of Dallas",
  // other metadata
};

const Give = () => {
  return (
    <PublicLayout>
      <div className="pt-16"></div>
      <GiveComponent />
    </PublicLayout>
  );
};

export default Give;

import { Metadata } from "next";
import GiveComponent from "@/components/Give";

export const metadata: Metadata = {
  title: "Give Page | Philadelphia Pentecostal Church of Dallas",
  description: "ppcd Give | Philadelphia Pentecostal Church of Dallas",
  // other metadata
};

const Give = () => {
  return (
    <>
      <div className="pt-16"></div>
      <GiveComponent />
    </>
  );
};

export default Give;

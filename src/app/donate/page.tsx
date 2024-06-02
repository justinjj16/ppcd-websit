import { Metadata } from "next";
import Give from "@/components/Give";

export const metadata: Metadata = {
  title: "donate Page | Philadelphia Pentecostal Church of Dallas",
  description: "ppcd donate | Philadelphia Pentecostal Church of Dallas",
  // other metadata
};

const Donate = () => {
  return (
    <>
      <Give />
    </>
  );
};

export default Donate;

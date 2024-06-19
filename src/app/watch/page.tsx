// import Video from "@/components/Video/index";
import dynamic from 'next/dynamic'

import { Metadata } from "next";

const Video = dynamic(() => import('../../components/Video/index'), { ssr: false })


export const metadata: Metadata = {
  title: "watch Page | Philadelphia Pentecostal Church of Dallas",
  description: "ppcd watch | Philadelphia Pentecostal Church of Dallas",
  // other metadata
};

const WatchPage = () => {
  return (
    <>
      <div className="pt-16"></div>
      <Video videoId='' />
    </>
  );
};

export default WatchPage;

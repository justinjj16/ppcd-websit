import dynamic from "next/dynamic";
import { Metadata } from "next";

import { liveVideoData } from "../../components/Video/videoData";

const Video = dynamic(() => import("../../components/Video/index"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "watch Page | Philadelphia Pentecostal Church of Dallas",
  description: "ppcd watch | Philadelphia Pentecostal Church of Dallas",
  // other metadata
};

const WatchPage = () => {
  return (
    <>
      <div className="pt-16"></div>
      <Video selectedVideo={liveVideoData[0]} />
    </>
  );
};

export default WatchPage;

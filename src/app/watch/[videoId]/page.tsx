import { Metadata } from "next";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading";

import { videoData } from "@/components/Video/videoData";

const Video = dynamic(() => import("../../../components/Video/index"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "watch Page | Philadelphia Pentecostal Church of Dallas",
  description: "ppcd watch | Philadelphia Pentecostal Church of Dallas",
  // other metadata
};

const WatchPage = ({ params }: { params: { videoId: string } }) => {
  const selectedVideo = videoData.find(
    (video) => video.videoId === params.videoId,
  );

  console.log(selectedVideo);
  return (
    <>
      <div className="pt-16"></div>
      {selectedVideo ? <Video selectedVideo={selectedVideo} /> : <Loading />}
    </>
  );
};

export default WatchPage;

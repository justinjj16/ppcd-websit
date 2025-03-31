import { Metadata } from "next";
import dynamic from "next/dynamic";


import PublicLayout from '@/components/PublicLayout/PublicLayout';
import Loading from "@/components/Loading";
import { liveVideoData, videoData } from "@/components/Video/videoData";

const Video = dynamic(() => import("../../../components/Video/index"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "watch Page | Philadelphia Pentecostal Church of Dallas",
  description:
    "ppcd watch | Philadelphia Pentecostal Church of Dallas | videos | live",
  // other metadata
};

const WatchPage = ({ params }: { params: { videoId: string } }) => {
  let selectedVideo = videoData.find(
    (video) => video.videoId === params.videoId,
  );

  if (!selectedVideo) {
    selectedVideo = liveVideoData.find(
      (video) => video.videoId === params.videoId,
    );
    if (!selectedVideo) {
      selectedVideo = videoData.find((video) =>
        video.videoId.includes(params.videoId),
      );
      if (!selectedVideo) {
        selectedVideo = liveVideoData.find((video) =>
          video.videoId.includes(params.videoId),
        );
      }
    }
  }
  return (
    <PublicLayout>
      <div className="pt-16"></div>
      {selectedVideo ? <Video selectedVideo={selectedVideo} /> : <Loading />}
    </PublicLayout>
  );
};

export default WatchPage;

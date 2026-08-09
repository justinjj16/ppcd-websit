"use client";

import dynamic from "next/dynamic";
import Loading from "@/components/Loading";
import { liveVideoData, videoData } from "@/components/Video/videoData";

const Video = dynamic(() => import("../../../components/Video/index"), {
  ssr: false,
});

// Note: Metadata can't be exported from client components
// Remove the metadata export and use a different approach for SEO

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
    <>
      <div className="pt-16"></div>
      {selectedVideo ? <Video selectedVideo={selectedVideo} /> : <Loading />}
    </>
  );
};

export default WatchPage;
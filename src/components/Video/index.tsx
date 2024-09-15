"use client";

import { usePathname } from "next/navigation";
import { default as _ReactPlayer } from "react-player";
import { ReactPlayerProps } from "react-player/types/lib";
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

import SectionTitle from "../Common/SectionTitle";
import RelatedPost from "@/components/Articles/RelatedPost";
import { videoData, liveVideoData } from "./videoData";
import { VideoType } from "@/types/video";
import { useEffect, useState } from "react";

const Video = ({ selectedVideo }: { selectedVideo: VideoType }) => {
  const usePathName = usePathname();

  const [relatedVideos, setRelatedVideos] = useState<VideoType[]>(null);

  useEffect(() => {
    const liveVideo: VideoType[] = liveVideoData.filter(
      (video) => video.videoId !== selectedVideo.videoId,
    );

    const videoList: VideoType[] = videoData.filter(
      (video) => video.videoId !== selectedVideo.videoId,
    );

    setRelatedVideos([...liveVideo, ...videoList]);
  }, [selectedVideo]);

  const navigateToPPCDYoutub = () => {
    window.open("https://www.youtube.com/@PPCDChurch", "_blank");
  };

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="flex w-full flex-wrap px-4">
            <div className="w-full lg:w-3/4 lg:pr-4">
              <SectionTitle
                title="Join with Us"
                paragraph="O come, let us worship and bow down: let us kneel before the Lord our maker."
                center
                mb="80px"
              />
              <div
                className="mx-auto overflow-hidden rounded-md shadow-2xl"
                data-wow-delay=".15s"
              >
                <div className="relative aspect-[77/40] items-center justify-center">
                  <ReactPlayer
                    controls={true}
                    width="100%"
                    height="100%"
                    url={`https://www.youtube.com/${selectedVideo?.isLive ? "live/" : "embed/"}${selectedVideo?.videoId}`}
                  />
                </div>
                <div className="flex flex-col p-4">
                  <h3 className="mb-1 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {selectedVideo?.title}
                  </h3>
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    {selectedVideo?.date}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/4 lg:pl-4">
              <div className="mb-10 rounded-sm bg-white shadow-three dark:bg-gray-dark dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Related Videos
                </h3>
                <ul className="p-2 pb-0">
                  {relatedVideos?.map(
                    ({ title, videoId, date, thumbnail }, index) => (
                      <li
                        key={index}
                        className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10"
                      >
                        <RelatedPost
                          title={title}
                          image={thumbnail}
                          slug={
                            usePathName === "/watch"
                              ? `watch/` + videoId
                              : videoId
                          }
                          date={date}
                        />
                      </li>
                    ),
                  )}
                </ul>
                <div className="flex justify-center pb-4">
                  <button
                    className="rounded-sm font-medium hover:underline"
                    onClick={navigateToPPCDYoutub}
                  >
                    <span className="text-sm text-black dark:border-white dark:border-opacity-10 dark:text-white">
                      More Videos
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;

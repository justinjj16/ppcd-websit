"use client";

import { usePathname } from "next/navigation";
import SectionTitle from "../Common/SectionTitle";
import RelatedPost from "@/components/Articles/RelatedPost";
import { videoData } from "./videoData";
import ReactPlayer from "react-player";
import { VideoType } from "@/types/video";

const Video = ({ selectedVideo }: { selectedVideo: VideoType }) => {
  const usePathName = usePathname();

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
                  {/* <Image src="/images/video/video.jpg" alt="video image" fill />
                  <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                    <button
                      aria-label="video play button"
                      onClick={() => setOpen(true)}
                      className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                    >
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        className="fill-current"
                      >
                        <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                      </svg>
                    </button>
                  </div> */}
                  <ReactPlayer
                    controls={true}
                    width="100%"
                    height="100%"
                    url={`https://www.youtube.com/${selectedVideo.isLive ? "live/" : "embed/"}${selectedVideo.videoId}`}
                  />
                </div>
                <div className="flex flex-col p-4">
                  <h3 className="mb-1 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {selectedVideo.title}
                  </h3>
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    {selectedVideo.date}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/4 lg:pl-4">
              <div className="mb-10 rounded-sm bg-white shadow-three dark:bg-gray-dark dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Related Videos
                </h3>
                <ul className="p-8 pb-0">
                  {videoData.map(
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

      {/* <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId={videoId ? videoId : "vQEbX3sVWaU"}
        onClose={() => setOpen(false)}
      /> */}

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;

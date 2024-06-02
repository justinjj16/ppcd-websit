
import Video from "@/components/Video/index";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "watch Page | Philadelphia Pentecostal Church of Dallas",
  description: "ppcd watch | Philadelphia Pentecostal Church of Dallas",
  // other metadata
};

const WatchPage = ({ params, }: { params: { videoId: string } }) => {
  return (
    <>
      <div className="pt-16"></div>
      <Video videoId={params.videoId} />
    </>
  );
};

export default WatchPage;

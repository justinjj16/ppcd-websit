import { Metadata } from "next";
import Image from "next/image";

import SectionTitle from "@/components/Common/SectionTitle";
import SingleVision from "@/components/SingleVision/singleVision";
import visionData from './visionData';

export const metadata: Metadata = {
  title: "Vision Page | Philadelphia Pentecostal Church of Dallas",
  description: "ppcd Vision | Philadelphia Pentecostal Church of Dallas",
  // other metadata
};

const Vision = () => {
  return (
    <>
      <div className="pt-16"></div>
      <section id="vision" className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Vision Statement"
            paragraph=""
            center
            width="100%"
          >
            <div className="text-base !leading-relaxed text-body-color md:text-lg">
              <div className="py-2">The Philadelphia Pentecostal Church of Dallas (PPCD) exists to bring individuals to a
              personal relationship with Jesus Christ, to help them learn to follow Christ and to lead them
              into the fullness of the Spirit-filled life. We will do this through Commitment, Discipleship,
Service, Unity, and Worship.</div>
              <div className="py-2"> Ephesians 4:12-13 </div>
            </div>
          </SectionTitle>



          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {visionData.map((vision) => (
              <SingleVision key={vision.id} vision={vision} />
            ))}

          </div>

          <div className="absolute bottom-0 right-0 z-[-1]">
            <svg
              width="179"
              height="158"
              viewBox="0 0 179 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                fill="url(#paint0_linear_70:153)"
              />
              <path
                opacity="0.3"
                d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                fill="url(#paint1_linear_70:153)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_70:153"
                  x1="69.6694"
                  y1="29.9033"
                  x2="196.108"
                  y2="83.2919"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_70:153"
                  x1="165.348"
                  y1="-75.4466"
                  x2="-3.75136"
                  y2="103.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;

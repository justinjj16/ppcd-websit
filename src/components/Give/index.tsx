"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
// import OfferList from "./OfferList";
import InfoBox from "./InfoBox";

const GiveComponent = () => {
  const [isZelle, setIsZelle] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Ways to Give"
          paragraph="Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over, shall men give into your bosom. For with the same measure that ye mete withal it shall be measured to you again."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsZelle(true)}
              className={`${
                isZelle
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Zelle/Venmo
            </span>
            <div
              onClick={() => setIsZelle(!isZelle)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isZelle ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsZelle(false)}
              className={`${
                isZelle
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Check
            </span>
          </div>
        </div>

        <div className="">
          <InfoBox>
            {isZelle ? (
              <div className="mb-3 flex flex-col items-center">
                <p className="m-0 text-base font-medium text-black dark:text-white">
                  You can choose to give via Zelle to ppcdchurch@outlook.com.
                </p>
              </div>
            ) : (
              <div className="mb-3 flex flex-col items-center gap-y-3">
                <p className="m-0 text-base font-medium text-black dark:text-white">
                  You can choose to send us checks or cash via mail at:
                </p>
                <p className="m-0 text-base font-medium text-black dark:text-white">
                  Philadelphia Pentecostal Church of Dallas
                </p>
                <p className="m-0 text-base font-medium text-black dark:text-white">
                  2915 Broadway Blvd.
                </p>
                <p className="m-0 text-base font-medium text-black dark:text-white">
                  Garland, Texas
                </p>
              </div>
            )}
          </InfoBox>
        </div>
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
    </section>
  );
};

export default GiveComponent;

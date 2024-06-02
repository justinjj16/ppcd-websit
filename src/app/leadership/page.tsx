import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "leadership Page | Philadelphia Pentecostal Church of Dallas",
  description: "ppcd leadership | Philadelphia Pentecostal Church of Dallas",
  // other metadata
};

const Leadership = () => {
  return (

    <>
      <section
        id="leadership"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark "
      >
        <div className="w-full  relative text-white text-center" style={{ height: '34rem' }}>
          <Image
            src="/images/leadership/group.jpeg"
            alt="logo"
            className="w-full h-full absolute top-0 left-0"
            fill

          />
          <div className="w-full absolute top-0 left-0" style={{ backgroundColor: 'rgba(0, 35, 82, 0.7)', height: '34rem' }}>
            <h1 className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Leadership
          </h1>

          </div>
        </div>

      </section>
    </>
  );
};

export default Leadership;

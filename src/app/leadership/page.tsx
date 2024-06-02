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
        <div className="w-full h-96 relative text-white text-center">


          {/* <img className="w-full h-full absolute top-0 left-0" src="https://images.unsplash.com/photo-1505410603994-c3ac6269711f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Picture" /> */}
          <Image
            src="/images/leadership/group.jpeg"
            alt="logo"
            className="w-full h-full absolute top-0 left-0"
            fill
          />
          <div className="w-full h-96 absolute top-0 left-0" style={{ backgroundColor: 'rgba(0, 35, 82, 0.7)' }}>
            <h1 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Philadelphia Pentecostal Church of Dallas
                </h1>

          </div>
        </div>

      </section>
    </>
  );
};

export default Leadership;

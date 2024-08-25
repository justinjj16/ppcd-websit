import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[600px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/upcomingEvents/worship.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-3xl"
              />
              <Image
                src="/images/upcomingEvents/worship.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none rounded-3xl"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  The One True God
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The one true God has revealed Himself as the eternally self-existent, self-revealed “I AM”, and has further revealed Himself as embodying the principles of relationship and association of the Trinity as Father, Son, and Holy Ghost.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Baptism in Water
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The ordinance of baptism by a burial with Christ should be observed as commanded in the Scriptures by all who have really repented and in their hearts have truly believed in Christ as Savior and Lord. In doing so, they declare to the world that they have died with Jesus and that they have also been raised with Him to walk in the newness of life.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  The Lord’s Supper
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The Lord’s Supper, consisting of the elements bread and the fruit of the vine, is a memorial of His suffering and death and a prophecy of His Second Coming. It is enjoined on all believers “until He comes”.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

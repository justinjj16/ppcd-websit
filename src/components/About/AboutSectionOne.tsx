import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Philadelphia Pentecostal Church of Dallas"
                mb="44px"
                width="100%"
              >
                <div className="text-base !leading-relaxed text-body-color md:text-lg">
                  <div className="py-2">We welcome you to Philadelphia Pentecostal Church of Dallas! </div>
                  <p className="py-2">We are a Bible-based and family oriented church where you can be exposed to God’s Word, share in fellowship among believers, and grow in the grace and knowledge of Jesus Christ</p>
                  <p className="py-2">If you&lsquo;re looking for a place to belong or have been searching for answers to life&lsquo;s questions, you&lsquo;ve come to the right place. We welcome you to join us in worship. At Philadelphia Pentecostal Church of Dallas, you&lsquo;ll find a variety of opportunities to help you grow in the Lord, form strong, healthy relationships, and find direction for your life. You&lsquo;ll find that we give great importance to the learning of the Word.  We have Sunday School classes for both the adults youngsters and kids. We have such a wonderful and talented dynamic praise and worship team. Our goal is to minister to each and every person in your family, no matter what age they may be. </p>
                  <p className="py-2">We have been in existence in Garland, TX since 1996 and it is our desire to serve the community faithfully and lift up His Name. Thank You for taking the time to visit us online. Our website is designed to help you acquaint yourself with the many ministries and services that are catered to the needs of your family and community. We would like to welcome you to visit any of our services. We are conveniently located at <strong>2915 Broadway Blvd, Garland, TX. </strong></p>
                  <p className="py-2">We would love to have you come and worship the Lord with us. Come and be blessed! </p>
                </div>
              </SectionTitle>

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="The One True God" />
                    <List text="The Holy Trinity" />
                    <List text="The Salvation" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Baptism in Water" />
                    <List text="The Lord’s Supper" />
                    <List text="Divine Healing" />

                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[600px] lg:mr-0">
                <Image
                  src="/images/upcomingEvents/worship.jpeg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 rounded-3xl"
                />
                <Image
                  src="/images/upcomingEvents/worship.jpeg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

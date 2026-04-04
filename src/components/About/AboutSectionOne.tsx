import Image from "next/image";

const AboutSectionOne = () => {
  const beliefs = [
    "The One True God",
    "The Holy Trinity",
    "The Salvation",
    "Baptism in Water",
    "The Lord's Supper",
    "Divine Healing",
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">
                Welcome to Philadelphia Pentecostal Church of Dallas
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p className="text-lg font-semibold text-primary">
                  We welcome you to Philadelphia Church!
                </p>
                <p>
                  We are a Bible-based and family oriented church where you can be exposed to God&lsquo;s Word, share in fellowship among believers, and grow in the grace and knowledge of Jesus Christ.
                </p>
                <p>
                  If you&lsquo;re looking for a place to belong or have been searching for answers to life&lsquo;s questions, you&lsquo;ve come to the right place. We welcome you to join us in worship. At Philadelphia Pentecostal Church of Dallas, you&lsquo;ll find a variety of opportunities to help you grow in the Lord, form strong, healthy relationships, and find direction for your life.
                </p>
                <p>
                  You&lsquo;ll find that we give great importance to the learning of the Word. We have Sunday School classes for both the adults, youngsters and kids. We have such a wonderful and talented dynamic praise and worship team. Our goal is to minister to each and every person in your family, no matter what age they may be.
                </p>
                <p>
                  We have been in existence in Garland, TX since 1996 and it is our desire to serve the community faithfully and lift up His Name.
                </p>
                <p>
                  Thank You for taking the time to visit us online. Our website is designed to help you acquaint yourself with the many ministries and services that are catered to the needs of your family and community.
                </p>
                <p>
                  We would like to welcome you to visit any of our services. We are conveniently located at{" "}
                  <strong className="text-primary">2915 Broadway Blvd, Garland, TX.</strong>
                </p>
                <p className="text-lg font-semibold text-primary">
                  We would love to have you come and worship the Lord with us. Come and be blessed!
                </p>
              </div>
            </div>

            {/* Beliefs Grid */}
            <div className="grid grid-cols-2 gap-3">
              {beliefs.map((belief, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{belief}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex-1">
            <div className="sticky top-32 overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/about/cross.jpg"
                  alt="Church altar with cross"
                  fill
                  className="object-cover"
                  priority
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
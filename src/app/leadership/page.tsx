import Image from "next/image";
import NamePossession from './NamePossession';
import SectionTitle from "../../components/Common/SectionTitle";

const Leadership = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <SectionTitle
            title="Leadership"
            mb="44px"
            width="100%"
            center={true}
          />
          <div className="-mx-4 flex flex-col-reverse lg:flex-row items-center">

            <div className="w-full px-4 lg:w-1/2">

              <div className="text-base !leading-relaxed text-body-color md:text-lg">


                <p className="py-2">
                  <strong>Pastor P. C. Jacob</strong> was born and raised in a devoted Pentecostal family in Kottayam, Kerala, India where he was raised under the spiritual influence of his parents who faithfully served the Lord. While pursuing his Master&lsquo;s degree in English Literature, he sensed God&lsquo;s clear calling upon his life and fully committed himself to Christian ministry.

                </p>
                <p className="py-2">
                  He received formal theological training at United Theological College in Bangalore, India. His passion for the local church and desire to see people live a life of purpose and influence, fuels everything that he does.

                </p>
                <p className="py-2">
                  As a third-generation pastor and preacher, it is the desire of Pastor P. C. Jacob and his wife Renny to continue to serve the Lord and His people in whatever capacity and call God has placed upon them.
                  Following their marriage, Pastor Jacob and Renny moved to Udaipur, Rajasthan, where he served as a faculty member at Filadelfia Bible College from 1991 to 1994. They later migrated to the United States, settling in Oklahoma where he earned a Master’s degree in Business Administration from Oklahoma City University.

                </p>
                <p className="py-2">
                  From 2016 to 2022, Pastor Jacob served as the Senior Pastor of First IPC Church in Oklahoma where he played a key role in uniting two congregations to form what is now known as The Crosspoint Church.
                  Pastor Jacob has also provided significant leadership within the IPC fellowship. He served as the Chairman of the 18th IPC Family Conference held in Oklahoma in 2022 and previously served as the IPC Midwest Region Secretary (2015–2018). In addition, he has held positions as the General Secretary and Vice Chairman of ICPF USA and currently serves as the Chairman of ICPF USA.

                </p>
                <p className="py-2">
                  Since March 2024, Pr. PC Jacob serves as the Senior Pastor of Philadelphia Church. He and his wife, Renny Jacob, are blessed with three wonderful children: Jennifer & Jeshuran Paul, Jessica & Zachary (their son Silas), and Joshua & Shayna Jacob.
                </p>

              </div>


            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[600px] lg:mr-0">
                <Image
                  src="/images/leadership/pastor_pc.jpeg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full rounded-3xl drop-shadow-three lg:mr-0"
                />
              </div>
              <NamePossession name={"P. C. Jacob"} possession="Senior Pastor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;

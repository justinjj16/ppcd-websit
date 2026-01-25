// import { Metadata } from "next";
// import Image from "next/image";

// export const metadata: Metadata = {
//   title: "leadership Page | Philadelphia Pentecostal Church of Dallas",
//   description: "ppcd leadership | Philadelphia Pentecostal Church of Dallas",
//   // other metadata
// };

// const data = [
//   {
//     id: 1,
//     backgroundUrl: "https://docs.material-tailwind.com/img/team-1.jpg",
//     name: "PC JACOB",
//     designation: "Pastor",
//   },
//   {
//     id: 2,
//     backgroundUrl: "https://docs.material-tailwind.com/img/team-2.jpg",
//     name: "Paul",
//     designation: "Secretary",
//   },
//   {
//     id: 3,
//     backgroundUrl: "https://docs.material-tailwind.com/img/team-3.jpg",
//     name: "Johnson",
//     designation: "Xyx",
//   },
//   {
//     id: 4,
//     backgroundUrl: "https://docs.material-tailwind.com/img/team-4.jpg",
//     name: "Biju",
//     designation: "Xyx",
//   },
//   {
//     id: 5,
//     backgroundUrl: "https://docs.material-tailwind.com/img/team-5.jpg",
//     name: "Bobby",
//     designation: "Xyx",
//   },
//   {
//     id: 6,
//     backgroundUrl: "https://docs.material-tailwind.com/img/team-6.jpg",
//     name: "Rufus",
//     designation: "Xyx",
//   },
//   {
//     id: 7,
//     backgroundUrl: "https://docs.material-tailwind.com/img/team-4.jpg",
//     name: "PC JACOB",
//     designation: "Xyx",
//   },
//   {
//     id: 8,
//     backgroundUrl: "https://docs.material-tailwind.com/img/team-2.jpg",
//     name: "PC JACOB",
//     designation: "Xyx",
//   },
// ];

// const Leadership = () => {
//   return (
//     <>
//       <section
//         id="leadership"
//         className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark "
//       >
//         <div className="relative mb-10 h-52 w-full text-center text-white lg:h-96">


//           <div className="absolute left-0 top-0 h-52 w-full lg:h-96">
//             <h1 className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
//               Leadership
//             </h1>
//           </div>
//         </div>
//         <div className="container">
//           <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
//             {data.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative grid h-[20rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 lg:h-[30rem]"
//               >
//                 <div
//                   style={{ backgroundImage: `url(${item.backgroundUrl})` }}
//                   className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
//                 >
//                   <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
//                 </div>
//                 <div className="relative px-6  md:px-12">
//                   <h5 className="block text-xl font-semibold leading-snug tracking-normal text-white antialiased">
//                     {item.name}
//                   </h5>
//                   <h3 className="block text-lg text-white antialiased">
//                     {item.designation}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Leadership;


import Image from "next/image";
import SectionTitle from "../../components/Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Leadership = () => {
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;

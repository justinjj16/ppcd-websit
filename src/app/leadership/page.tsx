import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "leadership Page | Philadelphia Pentecostal Church of Dallas",
  description: "ppcd leadership | Philadelphia Pentecostal Church of Dallas",
  // other metadata
};

const data = [
  {
    id: 1,
    backgroundUrl: 'https://docs.material-tailwind.com/img/team-1.jpg',
    profile: 'https://docs.material-tailwind.com/img/team-3.jpg',
    name: "PC JACOB",
    designation: 'Pastor'
  },
  {
    id: 2,
    backgroundUrl: 'https://docs.material-tailwind.com/img/team-2.jpg',
    profile: 'https://docs.material-tailwind.com/img/team-3.jpg',
    name: "Paul",
    designation: 'secretary'
  },
  {
    id: 3,
    backgroundUrl: 'https://docs.material-tailwind.com/img/team-3.jpg',
    profile: 'https://docs.material-tailwind.com/img/team-3.jpg',
    name: "Johnson",
    designation: 'Xyx'
  },
  {
    id: 4,
    backgroundUrl: 'https://docs.material-tailwind.com/img/team-4.jpg',
    profile: 'https://docs.material-tailwind.com/img/team-3.jpg',
    name: "Biju",
    designation: 'Xyx'
  },
  {
    id: 5,
    backgroundUrl: 'https://docs.material-tailwind.com/img/team-5.jpg',
    profile: 'https://docs.material-tailwind.com/img/team-3.jpg',
    name: "Bobby",
    designation: 'Xyx'
  },
  {
    id: 6,
    backgroundUrl: 'https://docs.material-tailwind.com/img/team-6.jpg',
    profile: 'https://docs.material-tailwind.com/img/team-3.jpg',
    name: "Rufus",
    designation: 'Xyx'
  },
  {
    id: 7,
    backgroundUrl: 'https://docs.material-tailwind.com/img/team-4.jpg',
    profile: 'https://docs.material-tailwind.com/img/team-3.jpg',
    name: "PC JACOB",
    designation: 'Xyx'
  },
  {
    id: 8,
    backgroundUrl: 'https://docs.material-tailwind.com/img/team-2.jpg',
    profile: 'https://docs.material-tailwind.com/img/team-3.jpg',
    name: "PC JACOB",
    designation: 'Xyx'
  },

]

const Leadership = () => {
  return (

    <>
      <section
        id="leadership"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark "
      >
        <div className="w-full h-52 lg:h-96 relative text-white text-center mb-10">
          <Image
            src="/images/leadership/group.jpeg"
            alt="logo"
            className="w-full h-full absolute top-0 left-0"
            fill

          />
          <div className="w-full h-52 lg:h-96 absolute top-0 left-0" >
            <h1 className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Leadership
          </h1>

          </div>
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-12 grid-cols-2">
            {data.map((item, index) => (
              <div key={index} className="relative grid lg:h-[30rem] h-[20rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div
                  style={{ backgroundImage: `url(${item.backgroundUrl})` }}
                  className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative px-6  md:px-12">
                  <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-white">
                    {item.name}
                  </h5>
                  <img alt="P C JACOB"
                    src={item.profile}
                    className="relative inline-block lg:h-[74px] lg:w-[74px] h-[50px] w-[50px] !rounded-full border-2 border-white object-cover object-center" />
                  <h3 className="block text-xl antialiased text-white">{item.designation}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>


      </section>
    </>
  );
};

export default Leadership;

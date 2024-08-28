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
    backgroundUrl: "https://docs.material-tailwind.com/img/team-1.jpg",
    name: "PC JACOB",
    designation: "Pastor",
  },
  {
    id: 2,
    backgroundUrl: "https://docs.material-tailwind.com/img/team-2.jpg",
    name: "Paul",
    designation: "Secretary",
  },
  {
    id: 3,
    backgroundUrl: "https://docs.material-tailwind.com/img/team-3.jpg",
    name: "Johnson",
    designation: "Xyx",
  },
  {
    id: 4,
    backgroundUrl: "https://docs.material-tailwind.com/img/team-4.jpg",
    name: "Biju",
    designation: "Xyx",
  },
  {
    id: 5,
    backgroundUrl: "https://docs.material-tailwind.com/img/team-5.jpg",
    name: "Bobby",
    designation: "Xyx",
  },
  {
    id: 6,
    backgroundUrl: "https://docs.material-tailwind.com/img/team-6.jpg",
    name: "Rufus",
    designation: "Xyx",
  },
  {
    id: 7,
    backgroundUrl: "https://docs.material-tailwind.com/img/team-4.jpg",
    name: "PC JACOB",
    designation: "Xyx",
  },
  {
    id: 8,
    backgroundUrl: "https://docs.material-tailwind.com/img/team-2.jpg",
    name: "PC JACOB",
    designation: "Xyx",
  },
];

const Leadership = () => {
  return (
    <>
      <section
        id="leadership"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark "
      >
        <div className="relative mb-10 h-52 w-full text-center text-white lg:h-96">
          <Image
            src="/images/leadership/group.jpeg"
            alt="leadership"
            className="absolute left-0 top-0 h-full w-full"
            fill
          />
          <div className="absolute left-0 top-0 h-52 w-full lg:h-96">
            <h1 className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Leadership
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="relative grid h-[20rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 lg:h-[30rem]"
              >
                <div
                  style={{ backgroundImage: `url(${item.backgroundUrl})` }}
                  className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
                >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative px-6  md:px-12">
                  <h5 className="block text-xl font-semibold leading-snug tracking-normal text-white antialiased">
                    {item.name}
                  </h5>
                  <h3 className="block text-lg text-white antialiased">
                    {item.designation}
                  </h3>
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

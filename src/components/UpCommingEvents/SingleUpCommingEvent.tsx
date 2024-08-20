import { UpCommingEvent } from "@/types/upCommingEvent";
import Image from "next/image";
import "./SingleUpCommingEvent.css"



const SingleUpCommingEvent = ({ upCommingEvent, eventShowHandler }: { upCommingEvent: UpCommingEvent, eventShowHandler: (event: UpCommingEvent) => void }) => {
  const { icon, title, paragraph } = upCommingEvent;
  return (
    <div className="w-full">
      <button onClick={() => eventShowHandler(upCommingEvent)} className="wow fadeInUp comming-event-container cursor-pointer" data-wow-delay=".15s">
        <div className="mb-2 flex items-center justify-center rounded-3xl bg-primary bg-opacity-10 text-primary">
          <Image
            src={icon}
            alt="author"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto rounded-3xl comming-event-image transition ease-in-out delay-300 duration-300 "
            loading="lazy"
          />
        </div>
        <h3 className="mb-1 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </button>
      <div className="xs:hidden block mt-3 border border-body-color" />
    </div>
  );
};

export default SingleUpCommingEvent;

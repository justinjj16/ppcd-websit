import { UpCommingEvent } from "@/types/upCommingEvent";
import Image from "next/image";
import "./SingleUpCommingEvent.css";

const SingleUpCommingEvent = ({
  upCommingEvent,
  eventShowHandler,
}: {
  upCommingEvent: UpCommingEvent;
  eventShowHandler: (event: UpCommingEvent) => void;
}) => {
  const { icon, title, paragraph } = upCommingEvent;
  return (
    <div className="w-full">
      <button
        onClick={() => eventShowHandler(upCommingEvent)}
        className="wow fadeInUp comming-event-container w-full cursor-pointer"
        data-wow-delay=".15s"
      >
        <div className="mb-2 flex w-full items-center justify-center rounded-3xl bg-primary bg-opacity-10 text-primary">
          <Image
            src={icon}
            alt="author"
            width="0"
            height="0"
            sizes="100vw"
            className="comming-event-image h-64 w-full rounded-3xl transition delay-300 duration-300 ease-in-out "
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
      <div className="mt-3 block border border-body-color xs:hidden" />
    </div>
  );
};

export default SingleUpCommingEvent;

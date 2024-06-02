import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-2 flex items-center justify-center rounded-3xl bg-primary bg-opacity-10 text-primary">
          <Image
            src={icon}
            alt="author"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto rounded-3xl"
            loading='lazy'
          />
        </div>
        <h3 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;

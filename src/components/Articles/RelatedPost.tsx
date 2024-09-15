import Image from "next/image";
import Link from "next/link";

const RelatedPost = ({
  image,
  slug,
  title,
  date,
  sundayLive,
}: {
  image: string;
  slug: string;
  title: string;
  date: string;
  sundayLive: boolean;
}) => {
  return (
    <div className="flex items-center lg:block xl:flex">
      <div className="mr-2 lg:mb-3 xl:mb-0">
        <div className="relative h-[60px] w-[100px] overflow-hidden rounded-md sm:h-[75px] sm:w-[130px]">
          <Image src={image} alt={title} fill sizes="300px" />
        </div>
      </div>
      <div className="w-full">
        <h5 className="relative">
          <Link
            href={slug}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {title}
          </Link>
          {sundayLive && (
            <span className="absolute bottom-1 right-1 flex h-4 w-4 ">
              <span className="rigth-0 absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF0000] opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-[#FF0000]"></span>
            </span>
          )}
        </h5>

        <p className="text-xs font-medium text-body-color">{date}</p>
      </div>
    </div>
  );
};

export default RelatedPost;

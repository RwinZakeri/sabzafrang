import { ArrowTop } from "@/assets/icon/svgExporte";
import Link from "next/link";

const GreenButton = ({ title, path }: { title: string; path: string }) => {
  return (
    <div className="w-fit my-12 px-4 mx-auto py-2 group bg-primaryGreen hover:bg-primaryGreen/10 rounded-full ">
      <Link
        href={path}
        className="flex items-center text-primaryWhite w-full gap-2"
      >
        {title}
        <span className="-rotate-90 group-hover:-translate-x-3 transition-all duration-500">
          <ArrowTop />
        </span>
      </Link>
    </div>
  );
};

export default GreenButton;

import star from "@/assets/images/icon/starsabz.png";
import Image from "next/image";
const StarLine = ({ title }: { title: string }) => {
  return (
    <div className="w-full items-center justify-between container flex h-12 py-6">
      <div className="w-2/5 h-1 bg-primaryGreen relative rounded-full">
        <Image
          src={star}
          alt="star"
          className="w-6 absolute right-[98%] -top-[10px]"
        />
      </div>
      <p className="text-2xl font-bold text-primaryGreen">{title}</p>
      <div className="w-2/5 h-1 bg-primaryGreen relative rounded-full">
        <Image
          src={star}
          alt="star"
          className="w-6 absolute left-[97.5%] -top-[10px]"
        />
      </div>
    </div>
  );
};

export default StarLine;

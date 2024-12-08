// img
import Image from "next/image";
// db
import db from "@/db/db.json";
import type { Feature, Service } from "@/types/type";
import Link from "next/link";

const ServiceParent = () => {
  const service: Service[] = db.service; // service is an array of Service objects
  return (
    <div className="w-full container  md:gap-y-0 flex flex-row-reverse flex-wrap lg:flex-nowrap items-center justify-center">
      {service?.map((item) => (
        <Link
          href={"/"}
          key={item.id}
          className="w-1/2  md:w-56 h-72 relative flex group items-center justify-center"
        >
          <div className="w-full h-full absolute group-hover:opacity-100 opacity-0 transition-all duration-500 ease-linear bg-primaryGreen flex flex-col justify-center items-start">
            {item?.features?.map((sub: Feature) => (
              <>
                <div
                  key={sub?.id}
                  className="text-primaryWhite before:block before:w-1.5 before:h-1.5 before:bg-primaryWhite before:rounded-full before:relative before:left-4 before:top-3 px-8 text-base"
                >
                  <p>{sub.description}</p>
                </div>
              </>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image
              src={item?.imgAddress}
              className="w-fit h-20"
              width={500}
              height={500}
              alt={item.title}
            />
            <h2 className="text-textPurple font-bold">{item?.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServiceParent;

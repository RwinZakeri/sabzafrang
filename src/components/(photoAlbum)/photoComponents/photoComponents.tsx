import Image from "next/image";
import image1_1 from "@/assets/images/photoAlbum/image1-1.png";
import image2_1 from "@/assets/images/photoAlbum/image2-1.png";
import Link from "next/link";
const PhotoComponents = () => {
  return (
    <div className="container">
      <div>
        <div className="flex py-5">
          <h4 className="w-full text-center before:border before:w-[30%] before:ml-[15px] before:inline-block before:border-[#17AA8F] after:border after:border-[#17AA8F] after:mr-[15px] after:w-[30%] after:inline-block ">
            نوزدهمین نمایشگاه بین المللی صنعت ساختمان
          </h4>
        </div>
        <div className="flex items-center justify-evenly  gap-y-3 sm:px-0 px-4 flex-wrap">
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image1_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image1_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image1_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image1_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image1_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image1_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image1_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image1_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image1_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image1_1} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-[30px] mb-7">
        <div className="flex py-5">
          <h4 className="w-full text-center before:border before:w-[30%] before:ml-[15px] before:inline-block before:border-[#17AA8F] after:border after:border-[#17AA8F] after:mr-[15px] after:w-[30%] after:inline-block ">
            نوزدهمین نمایشگاه بین المللی صنعت ساختمان
          </h4>
        </div>
        <div className="flex items-center justify-evenly  gap-y-3 sm:px-0 px-4 flex-wrap">
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image2_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image2_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image2_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image2_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image2_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image2_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image2_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image2_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image2_1} alt="" />
            </Link>
          </div>
          <div className=" lg:w-[19%] sm:w-[48%] ">
            <Link href="">
              <Image src={image2_1} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoComponents;

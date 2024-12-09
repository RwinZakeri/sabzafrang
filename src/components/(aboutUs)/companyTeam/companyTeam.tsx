import GreenButton from "@/ui/button/greenButton";
import Image from "next/image";
import bossMin1 from "@/assets/images/aboutUs/boss-min-1.png";
const CompanyTeam = () => {
  return (
    <div className="container mt-[80px] ">
      <GreenButton title="تیم سبز افرنگ فیلم" path=""></GreenButton>
      <div className="flex flex-col justify-center items-center gap-y-4">
        <div className="flex flex-wrap lg:px-0 px-3 justify-center items-center gap-x-5">
          <div className=" lg:w-[265px] flex flex-col ">
            <div className="border-t-[4px] border-r-[4px] border-l-[4px] border-[#525174] rounded-lg">
              <Image className="" alt="" src={bossMin1} />
            </div>
            <div className="bg-[#17AA8F] text-white pr-2 rounded-b-lg">
              <p className="pb-1 pt-2 text-[20px] font-bold">محمد مهدی</p>
              <p>مدیرعامل</p>
            </div>
          </div>
          <div className=" lg:w-[265px] flex flex-col ">
            <div className="border-t-[4px] border-r-[4px] border-l-[4px] border-[#525174] rounded-lg">
              <Image className="" alt="" src={bossMin1} />
            </div>
            <div className="bg-[#17AA8F] text-white pr-2 rounded-b-lg">
              <p className="pb-1 pt-2 text-[20px] font-bold">محمد مهدی</p>
              <p>مدیرعامل</p>
            </div>
          </div>
          <div className=" lg:w-[265px] flex flex-col ">
            <div className="border-t-[4px] border-r-[4px] border-l-[4px] border-[#525174] rounded-lg">
              <Image className="" alt="" src={bossMin1} />
            </div>
            <div className="bg-[#17AA8F] text-white pr-2 rounded-b-lg">
              <p className="pb-1 pt-2 text-[20px] font-bold">محمد مهدی</p>
              <p>مدیرعامل</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:px-0 px-3 justify-center items-center gap-x-5">
          <div className=" lg:w-[265px] flex flex-col ">
            <div className="border-t-[4px] border-r-[4px] border-l-[4px] border-[#525174] rounded-lg">
              <Image className="" alt="" src={bossMin1} />
            </div>
            <div className="bg-[#17AA8F] text-white pr-2 rounded-b-lg">
              <p className="pb-1 pt-2 text-[20px] font-bold">محمد مهدی</p>
              <p>مدیرعامل</p>
            </div>
          </div>
          <div className=" lg:w-[265px] flex flex-col ">
            <div className="border-t-[4px] border-r-[4px] border-l-[4px] border-[#525174] rounded-lg">
              <Image className="" alt="" src={bossMin1} />
            </div>
            <div className="bg-[#17AA8F] text-white pr-2 rounded-b-lg">
              <p className="pb-1 pt-2 text-[20px] font-bold">محمد مهدی</p>
              <p>مدیرعامل</p>
            </div>
          </div>
          <div className=" lg:w-[265px] flex flex-col ">
            <div className="border-t-[4px] border-r-[4px] border-l-[4px] border-[#525174] rounded-lg">
              <Image className="" alt="" src={bossMin1} />
            </div>
            <div className="bg-[#17AA8F] text-white pr-2 rounded-b-lg">
              <p className="pb-1 pt-2 text-[20px] font-bold">محمد مهدی</p>
              <p>مدیرعامل</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTeam;

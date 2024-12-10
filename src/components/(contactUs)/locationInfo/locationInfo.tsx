import { EmailIcon, InstagramIcon, LinkdinIcon, TelePhoneIcon } from "@/assets/icon/svgExporte";
import Link from "next/link";

const LocationInfo = () => {
  return (
    <div className="container pb-[50px] mt-[50px]">
      <div className="flex md:flex-row flex-col gap-x-5 justify-center items-center">
        <div className="md:w-[40%] w-full">
          <ul className="flex flex-col justify-center md:items-end items-end gap-y-6 pl-5">
            <li className="text-[#54595F] text-[20px] font-bold flex gap-x-3">
              <Link href="">info@sabzafrang.com</Link>
              <span className="p-1 border-[2px] border-[#36A88D] rounded-[50%]"> <EmailIcon/></span>
            </li>
            <li className=" text-[#54595F] text-[20px] font-bold flex gap-x-3">
            
              sabzafrangfilm
              <span className="p-1 border-[2px] border-[#36A88D] rounded-[50%]"> <InstagramIcon/></span>
            </li>
            <li className="text-[#54595F] text-[20px] font-bold flex gap-x-3">
              sabzafrangfilm
              <span className="p-1 border-[2px] border-[#36A88D] rounded-[50%]"> <LinkdinIcon/></span>
            </li>
            <li className="text-[#54595F] text-[20px] font-bold flex gap-x-3">
              021-44844230-1
              <span className="p-1 border-[2px] border-[#36A88D] rounded-[50%]"> <TelePhoneIcon/></span>
            </li>
            <h6>
              نیـایش، ابتـدای سردار جنـگـل شـمالی،
              <br />
              ســاخــتمـان ســهنــد، واحــد 6 و 27
            </h6>
          </ul>
        </div>
        <div className="mt-6 w-[55%]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.093523993286!2d51.315212!3d35.744072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e04f303abcd4b%3A0xa6e8f887e0da79b4!2sSardar%20Jangal%20St%2C%20Tehran%2C%20Iran!5e0!3m2!1sen!2s!4v1697036409032!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;

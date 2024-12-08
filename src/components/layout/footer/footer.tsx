import {
  BigTelePhoneIco,
  InstIco,
  LinkdinIco,
  LocationIco,
  MailIco,
  TelePhoneIco,
  VueIco,
  YoutubeIco,
} from "@/assets/icon/svgExporte";
import footerLogo from "@/assets/sabzafrangfilmlogonewfooter.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primaryGreen pt-2 px-2 ">
      <div className=" md:flex flex-row-reverse w-full justify-between md:items-center container">
        <Image
          src={footerLogo}
          alt="logo"
          className="block  md:h-24 lg:h-32 md:w-fit w-32 "
        />
        {/* contact */}
        <div className="w-full flex flex-col md:flex-row justify-evenly">
          <div className=" mt-6">
            <div className="text-primaryWhite">
              <h3 className="text-inherit text-lg font-bold">اطلاعات تماس</h3>
              <div className="flex flex-col items-start gap-3 py-3">
                <div className="flex gap-2">
                  <LocationIco />
                  <p>
                    نیایش، ابتدای سردار جنگل شمالی، ساختمان سهند، واحد 6 و 27
                  </p>
                </div>
                <div className="flex gap-2">
                  <TelePhoneIco />
                  <p>
                    <Link href={"tel:۰۲۱-۴۴۸۴۴۲۳۰-۱"}> ۰۲۱-۴۴۸۴۴۲۳۰-۱</Link>
                  </p>
                </div>
                <div className="flex gap-2">
                  <BigTelePhoneIco />
                  <p>
                    <Link href={"tel:021-44844231"}> 021-44844231</Link>
                  </p>
                </div>
                <div className="flex gap-2">
                  <MailIco />
                  <p>
                    <Link href={"mailto:info@sabzafrang.com"}>
                      info@sabzafrang.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            {/* socials */}
            <div className="w-full flex items-center gap-3 justify-center mt-4 flex-row-reverse">
              <div className="border-[1px] rounded-full w-fit flex items-center justify-center p-2">
                <Link href={"/"}>
                  <LinkdinIco />
                </Link>
              </div>
              <div className="border-[1px] rounded-full w-fit flex items-center justify-center p-2">
                <Link href={"/"}>
                  <YoutubeIco />
                </Link>
              </div>
              <div className="border-[1px] rounded-full w-fit flex items-center justify-center p-2">
                <Link href={"/"}>
                  <InstIco />
                </Link>
              </div>
              <div className="border-[1px] rounded-full w-fit flex items-center justify-center p-2">
                <Link href={"/"}>
                  <VueIco />
                </Link>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-6 w-[40%]">
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

      {/* copy right */}
      <div className="w-full">
        <p className="w-full text-primaryWhite text-center py-4 font-bold">
          تمامی حقوق این سایت متعلق به موسسه فرهنگی هنری سبز افرنگ فیلم می باشد
        </p>
      </div>
    </footer>
  );
};

export default Footer;

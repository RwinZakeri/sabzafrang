import Image from "next/image";
import contact1 from "@/assets/images/contactUs/contact1.png";
import contact1_r from "@/assets/images/contactUs/contact1-r.png";
import FormData from "@/components/(contactUs)/formData/formData";
import LocationInfo from "@/components/(contactUs)/locationInfo/locationInfo";
const ContactUs = () => {
  return (
    <div className="container">
      <div className="lg:block hidden">
        <Image className="md:w-auto " src={contact1} alt="" />
      </div>
      <div className="lg:hidden block">
        <Image className="md:w-auto " src={contact1_r} alt="" />
        <p className="px-3">
          اگر فکر می‌کنید مهارت‌ها و رویکرد ما ابزارهای مفیدی برای کسب‌وکار یا
          برند شما هست، مایلیم با شما همکاری کنیم. با ما تماس بگیرید، با هم در
          ارتباط خواهیم بود تا در مورد نحوه همکاری با هم صحبت کنیم.
        </p>
      </div>
      <FormData />
      <LocationInfo/>
    </div>
  );
};

export default ContactUs;

import { CirculIcon } from "@/assets/icon/svgExporte";
import advertisingCampaigns from "@/assets/images/digitalMarketing/Group-1-1-scaled.png";
import chart from "@/assets/images/digitalMarketing/Group-2-1.png";
import featuresImage from "@/assets/images/digitalMarketing/Group-3-1.png";
import arrowGoal from "@/assets/images/digitalMarketing/Group-4-1.png";
import arrowShocked from "@/assets/images/digitalMarketing/Group-5-1.png";
import arrowMoney from "@/assets/images/digitalMarketing/Group-6.png";
import clockImage from "@/assets/images/digitalMarketing/Group-7-2048x943.png";
import handMobile from "@/assets/images/digitalMarketing/Group-9.png";
import puzzelImage from "@/assets/images/digitalMarketing/sabzafrangfilmlogonewfooter.png";
import GreenButton from "@/ui/button/greenButton";
import Image from "next/image";
const DigitalMarketing = () => {
  return (
    <>
      <div className="w-full">
        <Image src={advertisingCampaigns} alt="advertising" />
      </div>
      <div className="container">
        <p className="textStyle  mt-12  relative z-50 px-4">
          طراحی و اجرای کمپین‌های متمرکز و ایده محور، پس از سال‌ها طراحی و اجرای
          کمپین‌های بازاریابی خلاقانه برای مشتریان، می‌دانیم که برند شما چقدر
          مهم است. ما در طراحی کمپین‌‌ها روی پیامی تمرکز می‌کنیم که شما
          می‌خواهید به گوش مخاطبان برسانید. ما نام برند شما را سر زبان‌ها
          می‌اندازیم، فرقی نمی‌کند که می‌خواهید از آخرین تکنولوژی‌‌‌ استفاده
          کنید یا از روش‌های سنتی بازاریابی
        </p>
        {/* chart */}
        <div className="w-full">
          <Image src={chart} className="w-4/5 mx-auto" alt="advertising" />
          <h2 className="text-primaryGreen textStyle text-center md:text-right mt-6 text-2xl w-5/5 lg:text-2xl font-bold relative w-fit md:w-4/5">
            طراحی کمپین های بازاریابی{" "}
          </h2>
          <p className="textStyle  mt-12  relative z-50 ">
            ویژگی اصلی کمپین‌های تبلیغاتی عالی، داشتن ترکیبی مناسب از پیام‌های
            دلنشین است که در کانال رسانه‌ای درست منتشر می‌شوند. سبز افرنگ فیلم
            در سال‌های متمادی فعالیت خود کمپین‌های بازاریابی موفقی را طراحی و
            اجرا کرده است. از کانال‌های رسانه‌ای سنتی گرفته تا کانال‌های نوظهوری
            مانند واقعیت افزوده. برای ما ارتباط صحیح و قوی با مخاطبان در
            کمپین‌ها اولویت بالایی دارد و با همین هدف کمپین‌ها را طراحی می‌کنیم.
            تیم خلاق ما از این بینش برای خلق یک ایده منحصربه‌فرد استفاده می‌کند
            و بهترین نتیجه را برای شما رقم می‌زند.
          </p>
        </div>
        {/* features */}
        <div className="w-full my-6">
          <Image
            src={featuresImage}
            className="w-4/5 mx-auto"
            alt="advertising"
          />
          <p className="textStyle  mt-12  relative z-50 ">
            اگر می‌خواهید از مزایای این کمپین برای رسیدن به اهداف خود استفاده
            کنید، یک آژانس تبلیغاتی راه حل موثری خواهد بود. سبز افرنگ فیلم با
            داشتن تخصص در زمینه استراتژی بازاریابی، تبلیغات، رسانه‌های اجتماعی،
            محتوای دیجیتال، سئو، طراحی گرافیک و توسعه وب مزایای بسیاری برای
            برندها دارد.
          </p>
        </div>
        {/* features options */}
        <div className="flex flex-col gap-6 my-12">
          {/* 1 */}
          <div>
            <h2 className="text-primaryGreen textStyle text-center md:text-right my-8 text-2xl w-5/5 lg:text-2xl font-bold relative w-fit md:w-4/5">
              تیمی تمام عیار
              <div className="absolute -right-2 -top-6 md:-right-2">
                <CirculIcon width={180} height={75} />
              </div>
              <div className="absolute right-44 -top-5  hidden md:block">
                <Image src={arrowGoal} className="w-44" alt="arrow" />
              </div>
            </h2>
            <p className="textStyle  mt-12  relative z-50 ">
              ما استعداد، فناوری و پشتیبانی لازم را در اختیار شما قرار می‌دهیم
              تا مطمئن شویم همه چیز به بهترین شکل انجام می‌شود. به همین سادگی!
            </p>
          </div>
          {/* 2 */}
          <div>
            <h2 className="text-primaryGreen textStyle text-center md:text-right my-8 text-2xl w-5/5 lg:text-2xl font-bold relative w-fit md:w-4/5">
              صرفه جویی در زمان
              <div className="absolute -right-3 -top-6 md:-right-3">
                <CirculIcon width={240} height={75} />
              </div>
              <div className="absolute right-56 -top-5  hidden md:block">
                <Image src={arrowShocked} className="w-44" alt="arrow" />
              </div>
            </h2>
            <p className="textStyle  mt-12  relative z-50 ">
              زمانی که کار را به کاردان بسپارید، در وقت خود صرفه‌جویی می‌کنید.
              می‌توانید روی موضوعات دیگر شرکت تمرکز کرده و رشد کسب و کارتان را
              مدیریت کنید.
            </p>
          </div>
          {/* 3 */}
          <div>
            <h2 className="text-primaryGreen textStyle text-center md:text-right my-8 text-2xl w-5/5 lg:text-2xl font-bold relative w-fit md:w-4/5">
              صرفه جویی در پول
              <div className="absolute -right-3 -top-6 md:-right-3">
                <CirculIcon width={240} height={75} />
              </div>
              <div className="absolute right-56 -top-5  hidden md:block">
                <Image src={arrowMoney} className="w-44" alt="arrow" />
              </div>
            </h2>
            <p className="textStyle  mt-12  relative z-50 ">
              همکاری با یک آژانس تبلیغاتی فول سرویس به شما کمک می‌کند تا در
              بودجه بازاریابی خود صرفه‌جویی کنید. تیم سبز افرنگ با حضور
              کارشناسان متخصص در حوزه‌های مختلف، نیازهای شما را شناسایی کرده و
              برنامه‌ای را متناسب با بودجه شما طرحی می‌کند.
            </p>
          </div>
        </div>
        {/* clock hand */}
        <div className="w-full my-6">
          <Image src={clockImage} className="w-4/5 mx-auto" alt="advertising" />
          <p className="textStyle  mt-12  relative z-50 ">
            اگر می‌خواهید از مزایای این کمپین برای رسیدن به اهداف خود استفاده
            کنید، یک آژانس تبلیغاتی راه حل موثری خواهد بود. سبز افرنگ فیلم با
            داشتن تخصص در زمینه استراتژی بازاریابی، تبلیغات، رسانه‌های اجتماعی،
            محتوای دیجیتال، سئو، طراحی گرافیک و توسعه وب مزایای بسیاری برای
            برندها دارد.
          </p>
        </div>
        {/* features options */}
        <div className="flex flex-col gap-6 my-12">
          {/* 1 */}
          <div>
            <h2 className="text-primaryGreen textStyle text-center md:text-right my-8 text-2xl w-5/5 lg:text-2xl font-bold relative w-fit md:w-4/5">
              نوآوری دائمی آژانس تبلیغاتی
              <div className="absolute -right-3 -top-6 md:-right-3">
                <CirculIcon width={325} height={75} />
              </div>
              <div className="absolute right-80 -top-5  hidden md:block">
                <Image src={arrowGoal} className="w-44" alt="arrow" />
              </div>
            </h2>
            <p className="textStyle  mt-12  relative z-50 ">
              سبز افرنگ فیلم دائما در حال تولید محتوای خلاق و نوآوری است. این
              موسسه با ارزیابی محصولات، ویژگی‌ها و کانال‌های ارتباطی، ایده‌های
              خلاقانه‌ای را برای رشد کسب‌وکارتان پیشنهاد خواهد کرد.
            </p>
          </div>
          {/* 2 */}
          <div>
            <h2 className="text-primaryGreen textStyle text-center md:text-right my-8 text-2xl w-5/5 lg:text-2xl font-bold relative w-fit md:w-4/5">
              بهبود عملکرد در طول زمان
              <div className="absolute -right-3 -top-6 md:-right-3">
                <CirculIcon width={300} height={75} />
              </div>
              <div className="absolute right-72 -top-5  hidden md:block">
                <Image src={arrowShocked} className="w-44" alt="arrow" />
              </div>
            </h2>
            <p className="textStyle  mt-12  relative z-50 ">
              کمپین‌های تبلیغاتی 360، رویکرد متفاوتی از کمپین‌های دیگر دارند.
              آنها نتایج کلی و بازگشت سرمایه شرکت را در طول زمان بهبود می‌دهند.
              کمپین 360، یک فرآیند طولانی مدت و مستمر است و نیاز به تلاش مداوم
              دارد. به همین دلیل همکاری با یک آژانس باتجربه به شما کمک می‌کند تا
              با شناسایی نیازها، محصولات و خدمات، بهترین برنامه را برای یک کمپین
              یکپارچه طرح‌ریزی کنید و بهترین نتیجه را بگیرید.
            </p>
          </div>
        </div>

        {/* puzzel */}
        <div className="w-full">
          <Image src={puzzelImage} className="w-full" alt="arrow" />
          <p className="textStyle  mt-12  relative z-50 ">
            به طور خلاصه، راه‌اندازی کمپین‌های تبلیغاتی برای شرکت‌های مختلف چالش
            بزرگی است و معمولا بخش بازاریابی آنها منابع لازم را برای برنامه‌ریزی
            و اجرای این نوع تبلیغات ندارد. چرا که کمپین 360 نیازمند متخصصان
            زیادی است و به همین دلیل باید به موسسه‌ای واگذار شود که منابع لازم
            را برای دستیابی به بهترین نتیجه در اختیار دارد.
          </p>
        </div>
        {/* campagin */}
        <div className="w-full">
          <h2 className=" text-primaryGreen textStyle text-center  my-8 text-2xl w-5/5 lg:text-2xl font-bold relative w-fit md:w-fit ">
            بهبود عملکرد در طول زمان
            <div className="absolute -right-4 -top-6 md:-right-4">
              <CirculIcon width={300} height={75} />
            </div>
          </h2>

          <div className="w-full px-4 md:w-4/5 mx-auto">
            <Image src={handMobile} className="w-full" alt="arrow" />
          </div>
        </div>

        <GreenButton title="مشاهده نمونه کارها" path="/" />
      </div>
    </>
  );
};

export default DigitalMarketing;

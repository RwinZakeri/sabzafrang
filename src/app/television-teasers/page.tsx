// images
import { CirculIcon } from "@/assets/icon/svgExporte";
import marketing from "@/assets/images/television/Group-12-converted-converted-204.png";
import textImage from "@/assets/images/television/Group-2-2048x1493.png";
import MicImage from "@/assets/images/television/Group-3-2048x1009.png";
import glassImg from "@/assets/images/television/Group-4-2048x399.png";
import chairImg from "@/assets/images/television/Group-5-2048x2028.png";
import arrowTele from "@/assets/images/television/Layer-87.png";
import Image from "next/image";
const TelevisionTeasers = () => {
  return (
    <div className="">
      <div className="w-full h-[111px] md:h-[500px] bg-television-teasers bg-contain md:bg-cover bg-no-repeat bg-center"></div>
      <div className="container">
        {/* public relation */}
        <p className="textStyle w-full px-4 md:w-4/5  md:-mt-8">
          دپارتمان روابط عمومی سبز افرنگ فیلم برای ارتقای برند مشتریان، فروش و
          کسب نتیجه طراحی شده است. ما برنامه‌های فعالی را برای روابط عمومی
          پیاده‌سازی کرده و طیف گسترده‌ای از خدمات بازاریابی یکپارچه، برای رفع
          نیازهای منحصربه‌فرد مشتریان ارائه می‌کنیم. تیم روابط عمومی ما در
          دپارتمان‌های تخصصی مختلف، از افراد سرشناس رسانه تشکیل شده است. خدمات
          روابط عمومی با تیم متشکل از افراد متخصص و کارشناس شامل موارد زیر است:
        </p>
      </div>
      {/* text strategy */}
      <div className="w-full">
        <Image
          src={textImage}
          className="w-full md:w-4/6 lg:w-3/6 mx-auto"
          alt="text"
        />
      </div>
      {/* event */}
      <div className="w-full lg:w-4/6 mx-auto md:-top-6 md:-right-7">
        <h2 className="text-primaryGreen textStyle text-center md:text-right my-8 text-2xl w-5/5 lg:text-2xl font-bold relative w-fit md:w-4/5">
          رویدادهای بازاریابی
          <div className="absolute -right-7 -top-6 md:-right-5">
            <CirculIcon width={220} height={75} />
          </div>
          <div className="absolute right-52 -top-5  hidden md:block">
            <Image src={arrowTele} className="w-44" alt="arrow" />
          </div>
        </h2>
        <p className="textStyle w-full px-4 md:w-4/5 mt-5">
          از آنجایی که مصرف‌کنندگان همیشه در معرض جریان تبلیغات مختلف قرار
          می‌گیرند، یافتن راه‌های منحصربه‌فرد بازاریابی که توجه مخاطب را میان
          زرق و برق تبلیغات مختلف جلب کند، بسیار حیاتی است. برندها معمولا برای
          مواردی مانند رونمایی از محصول جدید، راه‌اندازی خدمات نوین، شبکه‌سازی،
          جذب سرمایه‌گذار، جشن‌های سازمانی، آموزش کارکنان و .. رویدادهای مختلف
          را برنامه‌ریزی می‌کنند.
        </p>
        <p className="textStyle w-full px-4 md:w-4/5 mt-5">
          قدم اول در برنامه‌ریزی هر رویدادی، مشخص کردن هدف آن است. می‌خواهیم چه
          کسانی را هدف قرار دهیم؟ هدف اصلی، ساخت رابطه با مخاطبان جدید است یا
          اصلاح روابط با مشتریان قدیمی؟ برای برگزاری یک رویداد همه چیز تمام،
          نیاز به برنامه‌ریزی دقیق و شناخت پیچیدگی‌های زمانی و فضایی رویداد
          داریم تا هیچ چیزی از قلم نیفتد. جزئیات زیادی در اجرای یک رویداد مهم
          هستند و موسسه سبز افرنگ فیلم با داشتن سابقه برگزاری بیش از ده‌ها ایونت
          موفق، به شما کمک می‌کند تا رویدادی ویژه برنامه‌ریزی کنید.
        </p>
      </div>
      {/* departman skill */}

      <div className="w-full md:w-3/5 mx-auto">
        <Image src={MicImage} className="w-full" alt="arrow" />
        <h2 className="text-primaryGreen textStyle text-center md:text-right my-8 text-2xl w-5/5 lg:text-2xl font-bold relative w-fit md:w-4/5">
          هر رویداد یک تجربه ویژه
          <div className="absolute -right-7 -top-6 md:-right-5">
            <CirculIcon width={290} height={75} />
          </div>
          <div className="absolute right-72 -top-5  hidden md:block">
            <Image src={arrowTele} className="w-44" alt="arrow" />
          </div>
        </h2>
        <p className="textStyle w-full px-4 md:w-4/5 mt-5">
          رویدادهای یونیک کمک می‌کنند، محصولات و خدمات جان بگیرند. ما رویداد را
          در سطحی برگزار می‌کنیم که برای مخاطبان الهام‌بخش باشد: هیجان، سر و
          صدای رسانه‌ای، استفاده تبلیغاتی از رویدادها و افزایش فروش. از
          راه‌اندازی محصول گرفته تا برگزاری نمایشگاه‌های تجاری، ما با شرکت‌های
          بزرگ و برندهای شاخص همکاری کرده‌ایم.
        </p>
      </div>
      {/* glass */}
      <div className="w-full md:w-3/5 mx-auto">
        <Image src={glassImg} alt="glass" className="w-4/5 mx-auto my-6" />
        <p className="textStyle w-full px-4 md:w-4/5 mt-5">
          دپارتمان تخصصی موسسه با یک تیم داخلی و جمعی از متخصصان و کارشناسان
          روابط عمومی، رویدادها را برای برقراری ارتباط و انتقال پیام‌های خاص
          برنامه‌ریزی می‌کند. ما با مدیریت رویداد، از برنامه‌ریزی و تولید مفاهیم
          خلاقانه گرفته تا طراحی و اجرای تبلیغات به برند شما کمک می‌کنیم تا
          حداکثر نتیجه را دریافت کنید. رویداد موفق به موفقیت تجاری می‌رسد. ما با
          ترکیبی از خلاقیت و مدیریت و با توجه ویژه به جزئیات اجرایی، رویدادهای
          متنوع را به موقع و با بودجه مناسب برنامه‌ریزی می‌کنیم تا برندها به
          موفقیت تجاری دست یابند.
        </p>
      </div>
      {/* chair */}
      <div className="w-full md:w-3/5 mx-auto">
        <Image src={chairImg} alt="glass" className="w-4/5 mx-auto my-6" />
        <div className=" my-12">
          <h2 className="text-primaryGreen textStyle text-center md:text-right my-8 text-2xl w-5/5 lg:text-2xl font-bold relative w-fit md:w-4/5">
            هر رویداد یک تجربه ویژه
            <div className="absolute -right-7 -top-6 md:-right-5">
              <CirculIcon width={290} height={75} />
            </div>
            <div className="absolute right-72 -top-5  hidden md:block">
              <Image src={arrowTele} className="w-44" alt="arrow" />
            </div>
          </h2>
          <p className="textStyle w-full px-4 md:w-4/5 mt-5">
            ما با ترکیبی از خلاقیت و مدیریت و با توجه ویژه به جزئیات اجرایی،
            رویدادهای متنوع را به موقع و با بودجه مناسب برنامه‌ریزی می‌کنیم تا
            برندها به موفقیت تجاری دست یابند.
          </p>
        </div>

        <div className=" my-12">
          <h2 className="text-primaryGreen textStyle text-center md:text-right my-8 text-2xl w-5/5 lg:text-2xl font-bold relative w-fit md:w-4/5">
            پوشش خبری
            <div className="absolute -right-7 -top-6 md:-right-7">
              <CirculIcon width={180} height={75} />
            </div>
            <div className="absolute right-44 -top-5  hidden md:block">
              <Image src={arrowTele} className="w-44" alt="arrow" />
            </div>
          </h2>
          <p className="textStyle w-full px-4 md:w-4/5 mt-5">
            ما با ترکیبی از خلاقیت و مدیریت و با توجه ویژه به جزئیات اجرایی،
            رویدادهای متنوع را به موقع و با بودجه مناسب برنامه‌ریزی می‌کنیم تا
            برندها به موفقیت تجاری دست یابند.
          </p>
          <p className="textStyle w-full px-4 md:w-4/5 mt-5">
            پوشش رسانه‌ای پیام شما را به مخاطبان وسیع‌تری می‌رساند و اعتبار برند
            شما را به عنوان یک تجارت معتبر تثبیت می‌کند. پوشش خبری مناسب یک
            دارایی ارزشمند برای برندها حساب می‌شود و سبب هدایت صحیح بازار هدف
            برای محصول و خدمات شما خواهد شد.
          </p>
        </div>
      </div>
      {/* marketing */}
      <div className="w-full md:w-4/5 mx-auto">
        <Image
          src={marketing}
          alt="marketing"
          className="w-full md:w-4/5 mx-auto"
        />
      </div>
    </div>
  );
};

export default TelevisionTeasers;

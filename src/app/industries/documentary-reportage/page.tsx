import { CirculIcon } from "@/assets/icon/svgExporte";
import { default as tvGirl } from "@/assets/images/documentary/Group-1@1.25x1246.png";
import mediaProductionImg from "@/assets/images/documentary/media05-scaled.png";
import penImage from "@/assets/images/documentary/mediaproduction2-2-2048x1233.png";
import playPlan from "@/assets/images/documentary/mediaproduction2-4.png";
import radioImageHand from "@/assets/images/documentary/mediaproduction2-5-2048x977.png";
import GreenButton from "@/ui/button/greenButton";
import Image from "next/image";
const Documentry = () => {
  return (
    <>
      {/* media and production image */}
      <div className="w-full">
        <Image src={mediaProductionImg} alt="documentry" />
      </div>
      <div className="container">
        <div className="w-full">
          <p className="textStyle w-full px-4 md:w-4/5 mt-5">
            انواع تولیدات رسانه‌ای یکی از خدماتی است که سبز افرنگ فیلم به
            مشتریان ارائه می‌دهد. اتاق فکر موسسه به شما کمک می‌کند تا برای
            دستیابی به اهداف برندتان، ایده‌ها و داستان‌های خود را با مخاطبان به
            اشتراک بگذارید. مطمئن باشید که تیم تخصصی ما همه پروژه‌های ویدیویی
            را، از اولین جلسه توجیهی گرفته تا فیلمنامه نویسی و کارگردانی و
            کارهای پساتولید با بالاترین استاندارد انجام خواهد داد.
          </p>
          <p className="textStyle w-full px-4 md:w-4/5 mt-5">
            پوشش رسانه‌ای پیام شما را به مخاطبان وسیع‌تری می‌رساند و اعتبار برند
            تیم خلاق موسسه توانایی ارائه محتوا در قالب‌های مختلف را دارد و هر
            پروژه‌ای را متناسب با نیازهای برند تنظیم می‌کند. خواه این ویدیو برای
            انتشار در شبکه‌های اجتماعی باشد، یا یک ویدیو تبلیغاتی یا آموزشی.
          </p>
        </div>
        {/* pen  */}
        <div className="w-full">
          <Image src={penImage} alt="documentry" className="w-4/5 mx-auto" />
          <p className="textStyle w-full px-4 md:w-4/5 my-12">
            در چند سال اخیر، محتواهای ویدیویی به یک عنصر ضروری در بازاریابی
            تبدیل شده‌اند و بیشتر مخاطبان به‌دنبال ویدیوهایی هستند که ترکیبی از
            اطلاعات و سرگرمی باشد. حدود 74% بازاریابان معتقدند تاثیر ویدیو در
            رسانه‌ها بیشتر از هر محتوای دیگری است و به همین دلیل، ویدیوها نقش
            مهمی در قیف بازاریابی محصولات و خدمات دارند، از معرفی برند گرفته تا
            متقاعد کردن مشتری برای خرید. از طرفی انعطاف‌پذیری رسانه‌های مختلف در
            انتشار ویدیو سبب شده تا ویدیوها جزو محبوب‌ترین محتواهای دیجیتال
            دسته‌بندی شوند. شما هم می‌توانید از این مزیت استفاده کنید و با ساخت
            یک ویدیو تبلیغاتی جذاب، تعامل بی‌سابقه‌ای را با مخاطبان خود تجربه
            کنید. اتاق فکر موسسه با تیمی خلاق و کارشناسان زبده در تولید ویدیو و
            سناریونویسی به شما در ساخت و انتشار این ویدیو کمک خواهد کرد.
          </p>
        </div>
        {/* tv  */}
        <div className="w-full">
          <Image src={tvGirl} alt="documentry" className="w-4/5 mx-auto" />
          <p className="textStyle w-full px-4 md:w-4/5 my-6">
            بعد از تولید هر تیزر رادیو یا تلویزیونی این تیزر برای پخش به صدا و
            سیما ارائه می شود.
          </p>
          <p className="textStyle w-full px-4 md:w-4/5 my-6">
            شورای بازبینی آگهی بعد از دیدن تیزر ارائه شده کد خاصی را به آن
            اختصاص می دهد.
          </p>
          <p className="textStyle w-full px-4 md:w-4/5 my-6">
            در این مرحله با توجه به بودجه ای که مشتری برای آگهی در نظر گرفته است
            جدول زمانبندی ساعت و تعداد پخش آگهی تدوین شده و فایل اصلی برای پخش
            به صدا و سیما ارائه می شود.
          </p>
        </div>
        {/* plans */}
        <div className="w-full">
          <Image src={playPlan} alt="documentry" className="w-4/5 mx-auto" />
          <h2 className="text-primaryGreen textStyle text-center md:text-right my-8 text-2xl w-5/5 lg:text-2xl font-bold relative w-fit md:w-4/5">
            برنامه های تلویزیونی
            <div className="absolute -right-7 -top-6 md:-right-7">
              <CirculIcon width={250} height={75} />
            </div>
          </h2>
          <p className="textStyle w-full px-4 md:w-4/5 my-6">
            تبلیغات تلویزیونی سنتی یک روش برندینگ موثر برای دستیابی به مخاطب
            گسترده است.
          </p>
          <p className="textStyle w-full px-4 md:w-4/5 my-6">
            کسب‌وکار شما می‌تواند از طریق پیام‌های خلاقانه رادیو و تلویزیون،
            تصویری به‌یادماندنی در ذهن مشتری خلق کند. این نوع تبلیغات برای
            برندهای در حال رشدی که می‌خواهند به توده بزرگی از مشتریان بالقوه دست
            یابند، بسیار مفید است. برندها با آگهی‌های تبلیغاتی رادیو و تلویزیون
            نام خود را در ذهن مخاطبان زنده نگه می‌دارند تا برای خرید همواره
            گزینه‌ی اول انتخابی مشتریان باشند.
          </p>
          <p className="textStyle w-full px-4 md:w-4/5 my-6">
            حضور پررنگ متخصصان رسانه تلویزیونی در تیم اجرایی و مدیریتی سبز افرنگ
            فیلم و سابقه بیش از دو دهه برنامه‌سازی تلویزیونی در سازمان صدا و
            سیما از ویژگی‌های شاخص این موسسه است.
          </p>
        </div>
        {/* radio */}
        <div className="w-full">
          <Image src={radioImageHand} alt="radio" className="w-4/5 mx-auto" />
        </div>

        <GreenButton title="مشاهده نمونه کارها" path="/" />
      </div>
    </>
  );
};

export default Documentry;

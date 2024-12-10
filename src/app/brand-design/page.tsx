import Image from "next/image";
// images
import cloud from "@/assets/images/branding/branding2-1.png";
import bookImg from "@/assets/images/branding/branding2-10.png";
import starImage from "@/assets/images/branding/branding2-11.png";
import brandingDesign from "@/assets/images/branding/branding2-2-scaled.png";
import namedImage from "@/assets/images/branding/branding2-3-2048x606.png";
import namedArrow from "@/assets/images/branding/branding2-4.png";
import handPen from "@/assets/images/branding/branding2-5.png";
import editStrategy from "@/assets/images/branding/branding2-6.png";
import rocketImage from "@/assets/images/branding/branding2-7-2048x339.png";
import desginImage from "@/assets/images/branding/branding2-8-600x640.png";
import earthImage from "@/assets/images/branding/branding2-9-2048x1072.png";
import GreenButton from "@/ui/button/greenButton";
const Branding = () => {
  return (
    <div className="container">
      {/* design brand */}
      <Image src={brandingDesign} alt="brand" />
      <p className="textStyle w-full p-4 md:w-4/5 mt-12">
        تولید محتوای جذاب، مشتریان جدید را به کسب‌وکار شما سرازیر می‌کند و سبب
        با سبز افرنگ فیلم می‌توانید هویت برندتان را ارتقا دهید و مشتریان جدید
        جذب کنید. تیم ما با کارشناسان متخصص برندینگ به شما کمک می‌کند تصویر
        برندتان را باز طراحی کرده و هویت منحصر به ‌فردی در ذهن مخاطب خلق کنید.
      </p>
      {/* named */}
      <div className="">
        <div className="flex">
          <div className="w-1/4 hidden md:block">
            <Image src={cloud} alt="cloud" className="mt-20" />
          </div>

          <div className="w-3/4 mx-auto my-12">
            <Image src={namedImage} alt="nemed" />
          </div>
        </div>
      </div>
      <h2 className="text-primaryGreen textStyle mt-6 text-2xl w-4/5 lg:text-2xl font-bold">
        نام برند
      </h2>
      <div className="flex justify-between  w-full p-4 md:w-4/5 mx-auto">
        <div className="w-full">
          <p className="textStyle w-full m-0 mt-5">
            نامگذاری برند، فرایند شناسایی یک نام منحصربه‌فرد و مرتبط برای برند
            است و شامل تحقیق و بررسی، خلاقیت و بررسی نام‌های در دسترس از لحاظ
            قانونی است. پیدا کردن یک نام منحصربه‌فرد برای برندتان یک چیز است،
            ولی نامی به یاد ماندنی که شما را از رقبا متمایز کند چیز دیگری است.
            تیم خلاقیت موسسه آماده است تا به شما کمک کند نامی شایسته و یکتا برای
            برند خود داشته باشید.
          </p>
        </div>
        <div className="w-1/5 relative hidden md:block">
          <Image src={namedArrow} className="w-full " alt="nemed" />
        </div>
      </div>
      {/* edit stratgy */}
      <div className="  w-full p-4 md:w-4/5 mx-auto flex mb-24">
        <div className="w-1/5 h-96 hidden md:block">
          <Image
            src={handPen}
            className="min-w-96 relative right-0 top-40  md:block"
            alt="nemed"
          />
        </div>
        <div className="w-full ">
          <Image src={editStrategy} className="w-full " alt="nemed" />
          <p className="textStyle w-full m-0 mt-5">
            استراتژی برند طرحی است که چگونگی ایجاد ارتباط برند با بازار را مشخص
            می‌کند. ماندگاری در ذهن مخاطبان، هدف استراتژی برند است به شکلی که
            مشتریان بین رقبای موجود در بازار، برند شما را انتخاب و از آن حمایت
            کنند. تعریف و اجرای یک استراتژی هدفمند و خوب، بر تمام جنبه‌های کسب و
            کار شما تاثیر گذاشته و مستقیما با احساسات و نیازهای مصرف‌کننده مرتبط
            است.برند شما فقط، محصول، لوگو، وبسایت و نام نیست و این یک تصور غلط
            در استراتژی برند است. تصویر برند چیزی بیشتر از اینهاست! استراتژی که
            برای تصویر برند پیاده‌سازی می‌شود، همان احساسی است که برندهای
            قدرتمند را از برندهای فراموش‌نشدنی جدا می‌کند.
          </p>
        </div>
      </div>
      {/* rocket */}
      <div className=" w-full p-4 md:w-4/5 mx-auto">
        <Image src={rocketImage} className="w-full " alt="nemed" />
        <p className="textStyle w-full m-0 mt-5">
          به بیان ساده، شعار برند یک جزء اساسی بازاریابی، تبلیغات و برندینگ است.
          شعار فقط یک عبارت زیبا نیست، یک ابزار استراتژیک برای خلق تصویر
          به‌یادماندنی در درازمدت و اعتباربخشی به محصولات و خدمات است.
        </p>
        <p className="textStyle w-full m-0 mt-5">
          یک شعار فوق‌العاده هم ارتباطی قوی با برند دارد و هم تصویری کلی از آن
          به مخاطبان نشان می‌دهد. شعارها باید نشان‌دهنده ماهیت کسب و کار باشند و
          ماموریت، چشم انداز و اهداف سازمان را به مشخص کنند. اغلب شعارها تنها
          چند کلمه هستند اما برای تولید آنها مدت زمان زیادی صرف شده است. اتاق
          فکر موسسه سبز افرنگ فیلم با شناسایی و درک عمیق اهداف برند و بررسی
          نکاتی که برند را شاخص جلوه می‌دهد، داستان برند شما را با یک شعار
          به‌یادماندنی تعریف می‌کند. این موسسه تا کنون به برندهای مختلف کمک کرده
          تا شعار برند خود را بازتعریف کرده و با عبارتی که در عین سادگی، گیرا
          است، با مخاطب ارتباط برقرار کنند.
        </p>
      </div>
      {/* design */}
      <div className="w-full md:w-4/5 mx-auto flex gap-5 my-20">
        <div className="w-1/4 hidden md:block">
          <Image src={desginImage} alt="design" />
          <Image src={starImage} alt="design" className="mt-36" />
        </div>
        <div className="w-full md:w-4/5 -mt-16">
          <Image src={earthImage} alt="design" className="" />
          <p className="textStyle w-full m-0 mt-5">
            تیم ما برای شناخت اولیه برند، با افراد آشنا با برند مصاحبه کرده و
            اطلاعات مهم را جمع‌آوری می‌کند. قدم بعدی، تحلیل رقبا و جایگاه فعلی
            برند در بازار است، اینکه تصویر برند شما در ذهن مشتری چگونه است. تیم
            برندینگ ما تجربه زیادی در طراحی هویت بصری دارد و با ترکیب این
            اطلاعات با استراتژی برند، هویتی منحصربه‌فرد برای برند شما خلق
            می‌کند. کارشناسان خلاق ما از طراحی کارت ویزیت گرفته تا تولید موشن،
            شما را همراهی می‌کنند تا ایده‌های خلاقانه‌ای را اجرا کنید. یک برند
            به یاد ماندنی با یک زبان تصویری مشخص با مخاطبان خود گفتگو می‌کند.
            کتاب راهنمای برندبوک، همین الگوی مشخص است و به شما کمک می‌کند تا
            کمپین‌های بازاریابی آینده را یکپارچه طراحی و اجرا کنید.
          </p>
        </div>
      </div>
      {/* book */}
      <div className="w-4/5 mx-auto">
        <Image src={bookImg} alt="design" className="" />
        <GreenButton title="مشاهده نمونه کارها" path="/" />
      </div>
    </div>
  );
};

export default Branding;

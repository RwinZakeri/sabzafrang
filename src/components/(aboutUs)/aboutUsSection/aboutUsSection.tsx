import Image from "next/image";
import about2 from "@/assets/images/aboutUs/about2.png";
import layer1 from "@/assets/images/aboutUs/Layer-1.png";
import layer1_pic1 from "@/assets/images/aboutUs/layer1-pic1.png";
const AboutUsSection = () => {
  return (
    <div className="flex flex-col justify-center items-center container ">
      <div>
        <p className="py-5">
          موسسه فرهنگی هنری سبز افرنگ فیلم با مجوز رسمی از وزارت فرهنگ و ارشاد
          اسلامی طی سالیان گذشته افتخار همکاری با بسیاری از برندهای سرشناس و
          خوشنام کشور را داشته است. این موسسه از ابتدای شکل گیری با هدف استفاده
          از تکنولوژی روز دنیا در عرصه تبلیغات و بر پایه تلفیق دانش روز و
          هنرخلاقانه بنا شده تا از این طریق ضمن عملیاتی نمودن کمپین های اطلاع
          رسانی و تبلیغاتی، راه معرفی قابلیت ها و توانمندی های مشتریان خود را
          هموار سازد. اگر تبلیغات را فصل مشترک «هنر » و «اقتصاد » بدانیم، علاوه
          بر مسئولیت مان نسبت به اعتماد همراهان، عهده دار مسئولیت های سنگینی از
          جانب مخاطبان ایشان نیز هستیم تا با دانش روز، تکنولوژی، خلاقیت، تجربه و
          آگاهی، محیط اطرافشان را با پیام های زیبا، غیر تکراری، موثر و خلاقانه
          بیاراییم.
        </p>
        <Image className="w-[80%] mx-auto " src={about2} alt="about2" />
      </div>
      <div className="flex flex-wrap  justify-center items-center gap-x-4 ">
        <div className="md:w-[315px] sm:w-[45%]  flex flex-wrap flex-col justify-center items-center gap-y-5 ">
          <div className="relative">
            <Image src={layer1} alt="layer1" />
            <p className="absolute top-0 p-[20px] text-[#54595F] ">
              همچنین این موسسه دارای مجوز پلتفرم VOD از ساترا می باشد. در این
              پلتفرم کاربران می توانند محتوای صوتی و تصویری طبقه بندی شده در طیف
              های گسترده، شامل برنامه ها و فیلم های سینمایی و آموزشی، مستند ها
              و… را در زمان دلخواه خود از خانه و یا هر مکان دیگر به وسیله
              کامپیوتر، موبایل یا تلویزیون تماشا کنند.
            </p>
          </div>
          <div>
            <Image className="w-[80%]" src={layer1_pic1} alt="layer1-pic1" />
          </div>
        </div>
        <div className="md:w-[315px] sm:w-[45%] flex flex-wrap flex-col justify-center items-center gap-y-5 ">
          <div className="relative">
            <Image src={layer1} alt="layer1" />
            <p className="absolute top-0 p-[20px] text-[#54595F] ">
              همچنین این موسسه دارای مجوز پلتفرم VOD از ساترا می باشد. در این
              پلتفرم کاربران می توانند محتوای صوتی و تصویری طبقه بندی شده در طیف
              های گسترده، شامل برنامه ها و فیلم های سینمایی و آموزشی، مستند ها
              و… را در زمان دلخواه خود از خانه و یا هر مکان دیگر به وسیله
              کامپیوتر، موبایل یا تلویزیون تماشا کنند.
            </p>
          </div>
          <div>
            <Image className="w-[80%]" src={layer1_pic1} alt="layer1-pic1" />
          </div>
        </div>
        <div className="md:w-[315px] sm:w-[45%] flex flex-wrap flex-col justify-center items-center gap-y-5 ">
          <div className="relative">
            <Image src={layer1} alt="layer1" />
            <p className="absolute top-0 p-[20px] text-[#54595F] ">
              همچنین این موسسه دارای مجوز پلتفرم VOD از ساترا می باشد. در این
              پلتفرم کاربران می توانند محتوای صوتی و تصویری طبقه بندی شده در طیف
              های گسترده، شامل برنامه ها و فیلم های سینمایی و آموزشی، مستند ها
              و… را در زمان دلخواه خود از خانه و یا هر مکان دیگر به وسیله
              کامپیوتر، موبایل یا تلویزیون تماشا کنند.
            </p>
          </div>
          <div>
            <Image className="w-[80%]" src={layer1_pic1} alt="layer1-pic1" />
          </div>
        </div>
    
   
      </div>
    </div>
  );
};

export default AboutUsSection;

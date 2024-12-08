// images
import businessPalnImg from "@/assets/images/strategy/strategy2-2.png";
import Image from "next/image";
const Strategy = () => {
  return (
    <div className="container">
      <div className="w-full h-[133px] md:h-[500px] bg-no-repeat bg-tadvin-strategy bg-center bg-contain bg- relative"></div>
      <p className="textStyle px-4 my-12 md:-mt-32 relative z-50">
        آیا از حداکثر ظرفیت برند خود استفاده می‌کنید؟ ما با رویکردی منحصربه‌فرد،
        استراتژی را برای برند شما برنامه‌ریزی می‌کنیم که نتایج آن کسب وکارتان را
        متحول خواهد کرد. ما روی نحوه تعامل مخاطبان با برند تمرکز می‌کنیم و
        راه‌حل‌های خلاقانه‌ای را برای تعامل ارزشمند با بازار هدف ارائه می‌دهیم.
        سبز افرنگ فیلم در طول فعالیت خود استراتژی‌های خلاقانه‌ای را برای برندهای
        مختلف طراحی کرده و توانایی ارائه راه‌حل‌های هدفمند متناسب با برند را
        دارد.
      </p>

      <div className="w-full">
        <Image
          src={businessPalnImg}
          className="w-full md:w-3/5 mx-auto "
          alt="businessPalnImg"
        />
      </div>
    </div>
  );
};

export default Strategy;

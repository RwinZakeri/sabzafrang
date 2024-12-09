import GreenButton from "@/ui/button/greenButton";
import Image from "next/image";
import honors_tr1 from "@/assets/images/aboutUs/honors-tr1.png"
import honors_tm1 from "@/assets/images/aboutUs/honors-tm1.png"
import honors_tl1 from "@/assets/images/aboutUs/honors-tl1.png"
const Honors = () => {
    return ( 
        <div className="container mt-[80px] ">
            <GreenButton title="افتخارات" path=""/>
            <div className="flex flex-col justify-center items-center gap-y-4 p-4 bg-[#ECEBEB]">
                <div className="flex flex-wrap justify-center items-center  ">
                    <div className="w-[25%]"><Image  src={honors_tr1} alt=""/></div>
                    <div className="w-[50%]"><Image  src={honors_tm1} alt=""/></div>
                    <div className="w-[25%]"><Image  src={honors_tl1} alt=""/></div>
                </div>
                <div className="flex flex-wrap justify-center items-center  ">
                    <div className="w-[25%]"><Image  src={honors_tr1} alt=""/></div>
                    <div className="w-[50%]"><Image  src={honors_tm1} alt=""/></div>
                    <div className="w-[25%]"><Image  src={honors_tl1} alt=""/></div>
                </div>
                <div className="flex flex-wrap justify-center items-center  ">
                    <div className="w-[25%]"><Image  src={honors_tr1} alt=""/></div>
                    <div className="w-[50%]"><Image  src={honors_tm1} alt=""/></div>
                    <div className="w-[25%]"><Image  src={honors_tl1} alt=""/></div>
                </div>
            </div>
        </div>
     );
}
 
export default Honors;
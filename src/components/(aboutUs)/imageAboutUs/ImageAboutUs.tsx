import Image from "next/image";
import about1 from "@/assets/images/aboutUs/about-1.png"
const ImageAboutUs = () => {
    return ( 
        <div className="flex justify-center">
            <Image className="w-[80%]" src={about1} alt="about1"/>
        </div>
     );
}
 
export default ImageAboutUs;
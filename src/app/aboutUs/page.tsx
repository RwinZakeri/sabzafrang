import AboutUsSection from "@/components/(aboutUs)/aboutUsSection/aboutUsSection";
import CompanyTeam from "@/components/(aboutUs)/companyTeam/companyTeam";
import Honors from "@/components/(aboutUs)/honors/honors";
import ImageAboutUs from "@/components/(aboutUs)/imageAboutUs/ImageAboutUs";

const AboutUs = () => {
    return ( 
        <div className="max-w-[1400px] mx-auto">
            <ImageAboutUs/>
            <AboutUsSection/>
            <CompanyTeam/>
            <Honors/>
        </div>
     );
}
 
export default AboutUs;
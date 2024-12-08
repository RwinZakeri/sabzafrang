import ServiceParent from "@/components/(service)/ServiceParent";
import StarLine from "@/components/star-line/starLine";
import SwiperComponent from "../components/(swiper)/homeSwiper/swiperParent";
import VideoContainer from "./(containers)/videoGrid/videoContainer";

// start

const Home = () => {
  return (
    <>
      <SwiperComponent />
      <StarLine title={"خدمات ما"} />
      <ServiceParent />
      <StarLine title={"آخرین نمونه کارها"} />
      <VideoContainer />
    </>
  );
};

export default Home;

import VideoGrid from "@/components/(videoGrid)/videoGrid";
import db from "@/db/db.json";
import { LatestResumeData } from "@/types/type";
import GreenButton from "@/ui/button/greenButton";

// Correct the component to pass data to VideoGrid
const VideoContainer = () => {
  // Assuming db.latestResume is the correct shape according to the LatestResumeData type
  const latestResume: LatestResumeData = db.latestResume;

  return (
    <>
      <VideoGrid latestResume={latestResume} />
      <GreenButton title="نمونه کارهای بیشتر" path={"/"} />
    </>
  );
};

export default VideoContainer;

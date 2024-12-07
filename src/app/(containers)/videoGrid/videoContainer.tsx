import VideoGrid from "@/components/(videoGrid)/videoGrid";
import db from "@/db/db.json";
import { LatestResumeData } from "@/types/type";

// Correct the component to pass data to VideoGrid
const VideoContainer = () => {
  // Assuming db.latestResume is the correct shape according to the LatestResumeData type
  const latestResume: LatestResumeData = db.latestResume;

  return (
      <VideoGrid latestResume={latestResume} />
  );
};

export default VideoContainer;

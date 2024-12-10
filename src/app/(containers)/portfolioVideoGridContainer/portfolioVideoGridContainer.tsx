"use server";
import VideoGrid from "@/components/(videoGrid)/videoGrid";
import db from "@/db/db.json";
import { LatestResumeData } from "@/types/type";

const PortfolioVideoGridContainer = ({ category }: { category?: string }) => {
  const latestResume: LatestResumeData = db.latestResume;

  const filteredData = category
    ? category == "all"
      ? latestResume
      : latestResume.filter((item) => item?.category === category)
    : latestResume;

  return (
    <div className="w-full">
      <VideoGrid latestResume={filteredData} />
    </div>
  );
};

export default PortfolioVideoGridContainer;

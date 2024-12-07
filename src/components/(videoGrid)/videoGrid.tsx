import { VideoItem } from "@/types/type";

const VideoGrid = ({ latestResume }: { latestResume: VideoItem[] }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {latestResume?.map((video) => {
        console.log(video);
        return (
          <div
            key={video?.id}
            className="bg-red-300 w-full h-full aspect-w-1 aspect-h-1"
          >
            {video?.title}
          </div>
        );
      })}
    </div>
  );
};

export default VideoGrid;

"use client";
import { CloseIcon, PlayIcon } from "@/assets/icon/svgExporte";
import { VideoItem } from "@/types/type";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";

const VideoGrid = ({ latestResume }: { latestResume: VideoItem[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const openModal = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 ">
      {latestResume?.map((video) => (
        <div
          key={video?.id}
          className=" w-full relative group h-full aspect-w-1 aspect-h-1 cursor-pointer"
          onClick={() => openModal(video)}
        >
          <div className="w-full h-full text-primaryWhite text-xl flex items-start pt-16 transition-all ease-linear justify-center group-hover:opacity-80 absolute bg-primaryGreen opacity-0">
            {video?.title}
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <PlayIcon />
          </div>

          <Image
            width={500}
            height={500}
            src={video.videoThumbnail} // Assuming `video.thumbnail` is available
            alt={video.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <Modal className="w-[80%] mx-auto my-[100px]"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <button onClick={closeModal}>
          <CloseIcon />{" "}
        </button>
        {selectedVideo && (
          <div className="w-[50%] mx-auto">
            <video
              controls
              width="100%"
              height={"100%"}
              autoPlay
              muted // Add muted for autoplay support
              src={selectedVideo.videoSource}
            ></video>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default VideoGrid;

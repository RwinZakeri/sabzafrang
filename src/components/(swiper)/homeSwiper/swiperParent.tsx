"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../app/globals.css";

// db
import db from "@/db/db.json"; // assuming you have db.json with correct paths
import { homeSwiper } from "@/types/type";
import Image from "next/image";

const SwiperComponent = () => {
  const swiper: homeSwiper[] = db.swiper; // Ensure you access the "swiper" array in db

  return (
    <div>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {swiper?.map((swipItem) => (
          <SwiperSlide key={swipItem.id}>
            <Image
              src={swipItem.imgPath} // Dynamic image path from swiper
              alt={`Image ${swipItem.id}`}
              width={1920} // Adjust the width and height as needed
              height={700} // Adjust the width and height as needed
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;

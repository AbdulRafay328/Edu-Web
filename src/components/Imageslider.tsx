import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles

const ImageSwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true} // Enable looping through slides
    >
      <SwiperSlide>
        <div className="px-5 flex items-center gap-2 mt-10">
          <Image
            className="rounded-lg"
            src="/images/kamran.jpg"
            alt="kamran"
            width={620}
            height={600}
          />
          <Image
            className="rounded-lg"
            src="/images/peoples3.jpg"
            alt="kamran"
            width={680}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="px-5 flex items-center gap-2 mt-10">
          <Image
            className="rounded-lg"
            src="/images/peoples2.jpg"
            alt="kamran"
            width={600}
            height={620}
          />
          <Image
            className="rounded-lg"
            src="/images/laptops.jpg"
            alt="kamran"
            width={700}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="px-5 flex items-center gap-2 mt-10">
          <Image
            className="rounded-lg"
            src="/images/Ameenalam.jpg"
            alt="kamran"
            width={600}
            height={600}
          />
          <Image
            className="rounded-lg"
            src="/images/peoples.jpg"
            alt="kamran"
            width={650}
            height={600}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSwiper;

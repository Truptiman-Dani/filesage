import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImageSlideshow: React.FC = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      style={{
        width: "100%", 
        maxWidth: "400px", // Keeps it from getting too large
        height: "250px", // Fixed height to avoid collapse
        borderRadius: "10px",
        overflow: "hidden",
        margin: "auto", // Center it in the left section
      }}
    >
      <SwiperSlide>
        <img src="/slide3.jpg" alt="Slide 2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/slide2.jpg" alt="Slide 3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlideshow;

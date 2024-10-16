import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";
import img4 from "../../../assets/images/img4.jpg";
import { Container, NavStyles } from "./ServiceSlider.styled";
const ServiceSlider = () => {
  return (
    <>
      <Container>
        <NavStyles>
          {/* <div className="swiper-button-prev"></div> */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            // navigation={{
            //   prevEl: ".swiper-btn-prev",
            //   nextEl: ".swiper-btn-next",
            // }}
            navigation
          >
            <SwiperSlide>
              <img src={img1} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="" />
            </SwiperSlide>
          </Swiper>

          {/* <div className="swiper-button-next"></div> */}
        </NavStyles>
      </Container>
    </>
  );
};

export default ServiceSlider;

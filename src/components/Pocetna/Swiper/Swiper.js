import React from "react";
import "./Swiper.scss";

import SwiperCore, { Navigation, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import ProizvodImage from "../../../assets/images/Pocetna/Proizvod.png";

SwiperCore.use([Navigation, Autoplay]);

const swiper = (props) => {
  //   const vesti = props.vesti.map((vest) => (
  //     <SwiperSlide className="Slide">
  //       <div className="image">
  //         <img src={slikaVest} alt="vest" />
  //       </div>
  //     </SwiperSlide>
  //   ));

  const proizvod = (
    <SwiperSlide className="Slide">
      <div className="container">
        <div className="image">
          <img src={ProizvodImage} alt="Proizvod" />
        </div>
        <div className="description">
          <h6>Thalgo krema za ruke</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam...
          </p>
        </div>
        <div className="more">
          <button>Procitaj vise</button>
        </div>
      </div>
    </SwiperSlide>
  );

  return (
    <React.Fragment>
      <p className="suggest">Belviso preporucuje:</p>
      <Swiper
        className="Swiper"
        // navigation
        slidesPerView={1}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        centeredSlides
        loop="true"
        coverflowEffect={{
          rotate: 0,
          stretch: 200,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {proizvod}
      </Swiper>
    </React.Fragment>
  );
};

export default swiper;

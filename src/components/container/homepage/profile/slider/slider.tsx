import React from "react";
import classes from "./slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const ProfileSlider = (): JSX.Element => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        freeMode={true}
      >
        <SwiperSlide>
          <div className={classes.sideMargin}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.itemH}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.itemV}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.itemV}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.itemV}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.itemH}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.itemH}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.itemV}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.itemV}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.itemV}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.itemH}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.itemH}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.itemV}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.itemV}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.itemV}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.itemH}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.sideMargin}></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProfileSlider;

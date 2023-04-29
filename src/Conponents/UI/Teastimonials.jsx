
import '../../Styles/Testimonials.css'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import avater1 from '../../assets/avater1.png'
import avater3 from '../../assets/avater3.png'
import avater01 from '../../assets/avatar01.png'

export default function Testimonials() {
  return (
    <>
      <section>
        <div className="container sliders">
            <h2 className="section_title">Testimonials</h2>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slide_item">
                <div className="slide_img-01">
             <img src={avater1} alt="" />
            </div>
            <h4>FITNESS</h4>
            <p>We believe that the combination of physical, social, and emotional fitness hastransformative power.
                 We build strong human beings on the inside and out, and we embrace fitness as part of who we are.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="slide_item">
                <div className="slide_img-02">
             <img src={avater3} alt="" />
            </div>
            <h4>TEAMWORK</h4>
            <p>We work together in a collaborative, encouraging,and respectful manner.
                 We are a powerful team in which the sum of all parts is greater than one single member.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="slide_item">
                <div className="slide_img-03">
             <img src={avater01} alt="" />
            </div>
            <h4>CULTURE</h4>
            <p>We promote a culture of integrity and diversity, and we hold one another to a high standard of living.
                 We celebrate the uniqueness of each individual team and community member, and we accept one another without judgment, bias, or prejudice.</p>
            </div>
        </SwiperSlide>

        
        
      </Swiper>
        </div>
      </section>
    </>
  );
}

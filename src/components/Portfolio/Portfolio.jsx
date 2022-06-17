import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import GymAlly from '../../img/slider_1.png'
import Skilnes from '../../img/slider_2.png'
import Emovis from '../../img/slider_3.png'
import HelpLocal from '../../img/slider_4.png'
import RSGG from '../../img/slider_5.png'
import Cyvey from '../../img/slider_6.png'

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="p-text">
        <span>Some of my</span>
        <span>recent projects</span>
      </div>
      <Swiper
         spaceBetween={30}
         slidesPerView={3}
         grabCursor={true}
         className="portfolio-slider"
        >
        <SwiperSlide>
          <img src={GymAlly} alt="GymAlly-display" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Skilnes} alt="Skilnes-display" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Emovis} alt="Emovis-display" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HelpLocal} alt="HelpLocal-display" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={RSGG} alt="RSGG-display" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cyvey} alt="Cyvey-display" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio

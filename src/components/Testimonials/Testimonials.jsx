import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Pagination } from "swiper";
import "swiper/css/pagination";
import Friend1 from "../../img/friend-1.png";
import Friend2 from "../../img/friend-2.png";
import Friend3 from "../../img/friend-3.png";
import Friend4 from "../../img/friend-4.png";
import { themeContext } from '../../Context'
import { useContext } from 'react';

const Testimonials = () => {

  const friends = [
    {
      img: Friend1,
      review:
        "Stella is nice, even the bestest of all. Although sometimes she eats too much cheese. This I don't like. Because I also like to eatchesse!!!",
    },
    {
      img: Friend2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis!.",
    },
    {
      img: Friend3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis!.",
    },
    {
      img: Friend4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis!.",
    },
  ];
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="testimonials">
      <div className="t-heading">
        <span style={darkMode? {color: 'white'} : {color: ''}}>What people </span>
        <span>say </span>
        <span style={darkMode? {color: 'white'} : {color: ''}}>about me:</span>
      </div>
      <div className="blur t-b-y"></div>
      <div className="blur t-b-p"></div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {friends.map((friend, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={friend.img} alt="" />
                <span>{friend.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}

export default Testimonials

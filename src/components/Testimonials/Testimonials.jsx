import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Pagination } from "swiper";
import "swiper/css/pagination";
import Friend1 from "../../img/profile1.jpg";
import Friend2 from "../../img/profile2.jpg";
import Friend3 from "../../img/profile3.jpg";
import Friend4 from "../../img/profile4.jpg";

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

  return (
    <div className="testimonials">
      <div className="t-heading">
        <span>What people </span>
        <span>say </span>
        <span>about me:</span>
      </div>
      <div className="t-blur t-b-y"></div>
      <div className="t-blur t-b-p"></div>
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

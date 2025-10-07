import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const reviews = [
  { img: 'review-1.jpg', name: 'M.Usha Rani', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
  { img: 'review-2.jpeg', name: 'Ram Charan', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
  { img: 'review-3.jpeg', name: 'Kajal', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
  { img: 'review-4.jpeg', name: 'Sreelella', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' }
];

export default function Review() {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        <span>r</span><span>e</span><span>v</span><span>i</span><span>e</span><span>w</span>
      </h1>
      <div className="swiper review-slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="box">
                <img src={r.img} alt={r.name} />
                <h3>{r.name}</h3>
                <p>{r.text}</p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

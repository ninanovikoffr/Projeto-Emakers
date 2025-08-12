import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./Carrossel2.css";


export default function Carrossel2({ items = [] }) {
  return (
    <section className="carrossel2">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={5}
        breakpoints={{
          320:  { slidesPerView: 2, spaceBetween: 12 },
          640:  { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 5, spaceBetween: 24 },
        }}
        className="carrossel2-swiper"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <article className="carrossel2-card">
              <img className="carrossel2-img" src={item.image} alt="" />
              <span className="badge-preco">R$ {item.price}</span>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Carrossel1.css";



function Carrossel1({ items = [] }) {
    const canLoop = Array.isArray(items) && items.length > 1; // <- define aqui
  return (
    <section className="carrossel1">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}                 
        centeredSlides
        centeredSlidesBounds
        centerInsufficientSlides
        spaceBetween={12}
        loop={canLoop}                    
        rewind={!canLoop}                 
        navigation
        pagination={{ clickable: true }}
        observer
        observeParents
        className="carrossel1-swiper"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <article className="carrossel1-card">
              <img className="carrossel1-img" src={item.image} alt="" />
              <span className="badge-desconto"> {item.discount}</span>
              <span className="badge-preco1">R$ {item.price}</span>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Carrossel1;
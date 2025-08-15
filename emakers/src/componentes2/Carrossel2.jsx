
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import "./carrossel2.css";



export default function Carrossel2({ items = [] }) {
    const canLoop = Array.isArray(items) && items.length > 1; // <- define aqui
  return (
    <section className="carrossel2">
      <Swiper 
        modules={[Navigation]}
        slidesPerView={1}                 // sempre 1
        centeredSlides
        centeredSlidesBounds
        centerInsufficientSlides
        spaceBetween={12}
        loop={canLoop}                    // loop real se tiver > 1 item
        rewind={!canLoop}                 // fallback
        navigation
        pagination={{ clickable: true }}
        observer
        observeParents
        className="carrossel2-swiper">
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <article className="carrossel2-card">
              <img className="carrossel2-img" src={item.image} alt="" />
              <span className="badge-preco2">R$ {item.price}</span>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
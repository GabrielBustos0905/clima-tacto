// Import Swiper React components
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Card from '../Card/Card';
import style from "./Slides.module.css"

export default function Sides({ cities, onClose }) {
    return (
        <Swiper
            className={style.container}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                cities?.map(c => (
                    <SwiperSlide key={c.id} className={style.swiperSlide}>
                        <Card
                            max={c.max}
                            min={c.min}
                            name={c.name}
                            img={c.img}
                            onClose={() => onClose(c.id)}
                            id={c.id}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
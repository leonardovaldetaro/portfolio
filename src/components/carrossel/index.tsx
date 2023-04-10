import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from "swiper";

export default function Carrossel () {
    return (
        <>
            <Swiper 
                className='swiper-container'
                modules={[ Pagination, Navigation ]}
                navigation={true}
                pagination={{clickable:true}}
            >
                <SwiperSlide className='swiper-item'>
                    Slide 1
                </SwiperSlide>
                <SwiperSlide className='swiper-item'>
                    Slide 2
                </SwiperSlide>
                <SwiperSlide className='swiper-item'>
                    Slide 3
                </SwiperSlide>
                <SwiperSlide className='swiper-item'>
                    Slide 4
                </SwiperSlide>
            </Swiper>
        </>
    );
}
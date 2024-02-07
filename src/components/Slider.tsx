import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import {Slide} from "./Slide";

export function Slider() {
    return (
        <div className='slider'>
            <div className='wrapper'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper_button-next',
                        prevEl: '.swiper_button-prev'
                    }}
                    pagination={{type: 'fraction'}}
                    breakpoints={{}}
                >
                    <SwiperSlide className='slide'>
                        <Slide />
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <Slide />
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <Slide />
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <Slide />
                    </SwiperSlide>
                </Swiper>
                <div className='slider_bar'>
                   <div className='swiper_button-prev'>
                       <div className='arrow'></div>
                   </div>
                    <div className='swiper_button-next'>
                        <div className='arrow'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
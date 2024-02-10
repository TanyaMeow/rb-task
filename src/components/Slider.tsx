import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import {Slide} from "./Slide";

export function Slider() {
    return (
        <div className='slider_block'>
            <div className='wrapper'>
                <div className='slider_container'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        navigation={{
                            nextEl: '.swiper_button-next',
                            prevEl: '.swiper_button-prev'
                        }}
                        pagination={{type: 'fraction'}}
                        slidesPerView={1}
                        centeredSlides={true}
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
        </div>
    )
}
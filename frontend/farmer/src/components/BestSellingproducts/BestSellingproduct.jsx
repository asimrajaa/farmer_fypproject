import React from 'react'
import { images } from '../../constants'

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import {BestSellingProduct_product, Rating} from '../../components';

const BestSellingproduct = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10];
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Best Sales</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Discover our best-selling agricultural product that's trusted by Customers for quality and results.</p>
                    </div>
                    <div className="">
                        <Swiper
                            modules={[FreeMode, Navigation]}
                            breakpoints={{
                                340: {
                                    slidesPerView: 1,
                                    spaceBetween: 15,

                                },
                                700: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,

                                },

                            }}
                            navigation
                            freeMode={true}
                            spaceBetween={50}
                            slidesPerView={5}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {numbers.map((number, index) => (
                                <SwiperSlide key={index}>

                                <BestSellingProduct_product></BestSellingProduct_product>

                                  
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BestSellingproduct
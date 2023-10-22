import React from 'react'
import { images } from '../../constants'

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import {Rating} from '../../components';

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
                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img className="rounded-t-lg w-full" src={images.buying} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">RICE</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><Rating/></p>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Check Details
                                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
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
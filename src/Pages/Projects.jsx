import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { AiFillGithub } from 'react-icons/ai';

const Projects = () => {
    return (
        <div className='relative -top-56'>
            <h1 className='text-center text-5xl font-thin'>Projects</h1>
            <div className='py-10'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    spaceBetween={10}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    initialSlide={1}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper"
                    navigation={true}
                    breakpoints={{
                        // when window width is >= 0px
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 5
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        // when window width is >= 1200px
                        1200: {
                            spaceBetween: 25
                        }
                    }}
                >
                    {
                        [...Array(6).keys()].map(i => <SwiperSlide key={i} className='my-5'>
                            <div className='shadow-lg shadow-sky-300/20 rounded-lg'>
                                <img className='rounded-t-lg' src="https://mizanmahi.netlify.app/images/arena.png" alt="" />
                                <h2 className='mt-3 mx-5 text-center text-3xl'>Full stack e-commerce application (MERN)</h2>
                                <div className='px-8 pt-6 pb-4'>
                                    <p>I've Developed this eCommerce application using MERN technologies. Users can create accounts and order products also can manage the orders from the dashboard. Implemented role-based functionality and ui. Utilized Firebase for authentication.</p>
                                    <button className='btn mt-3 rounded-md'>Details</button>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                    <SwiperSlide className='my-5'>
                        <div className='shadow-lg shadow-sky-300/20 rounded-lg relative'>
                            <div className='invisible'>
                                <img className='rounded-t-lg' src="https://mizanmahi.netlify.app/images/arena.png" alt="" />
                                <h2 className='mt-3 mx-5 text-center text-3xl'>Full stack e-commerce application (MERN)</h2>
                                <div className='px-8 py-6'>
                                    <p>I've Developed this eCommerce application using MERN technologies. Users can create accounts and order products also can manage the orders from the dashboard. Implemented role-based functionality and ui. Utilized Firebase for authentication.</p>
                                    <button className='btn mt-3 rounded-md'>Details</button>
                                </div>
                            </div>
                            <button className='bg-slate-500 px-5 py-3 text-lg rounded-lg absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 uppercase flex items-center gap-3'>View More on <AiFillGithub className='w-8 h-8' /></button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default Projects;
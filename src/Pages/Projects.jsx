import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { AiFillGithub } from 'react-icons/ai';
import pharma from '../assets/projects/pharma.png';
import dailydeals from '../assets/projects/daily-deals.png';
import quizlet from '../assets/projects/quizlet.png';
import brownsKitchen from '../assets/projects/brownsKitchen.png';
import pirates from '../assets/projects/pirates.png';

const Projects = () => {
    return (
        <div id='projects' className='relative -top-56'>
            <h1 className='text-center text-5xl font-thin'>Projects</h1>
            <div className='px-10 mx:px-0 py-10'>
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
                            slidesPerView: 1,
                            spaceBetween: 5
                        },
                        // when window width is >= 640px
                        670: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        // when window width is >= 1200px
                        1200: {
                            spaceBetween: 25
                        }
                    }}
                >
                    <SwiperSlide className='my-5'>
                        <div className='shadow-lg shadow-sky-300/20 rounded-lg border border-slate-400'>
                            <img className='rounded-t-lg' src={pharma} alt="" />
                            <h2 className='mt-3 mx-5 text-center text-3xl'>Pharma - Clinic management app</h2>
                            <div className='px-8 pt-6 pb-4'>
                                <p>
                                    Designed and developed a whole doctors service platform to manage patients and visiting.
                                    Implemented appointment booking system according to the date and time slots.
                                    Implemented role-based functionality and added Firebase for authentication.
                                </p>
                                <button className='btn mt-3'>Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='my-5'>
                        <div className='shadow-lg shadow-sky-300/20 rounded-lg border border-slate-400'>
                            <img className='rounded-t-lg' src={dailydeals} alt="" />
                            <h2 className='mt-3 mx-5 text-center text-3xl'>Daily Deals e-commerce application (MERN)</h2>
                            <div className='px-8 pt-6 pb-4'>
                                <p>
                                    Designed and developed a fully functional buying and selling used laptops and accessories website. It is a complete e-commerce website where sellers can sell and buyers can buy their products. Dashboard features added.
                                </p>
                                <button className='btn mt-3'>Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='my-5'>
                        <div className='shadow-lg shadow-sky-300/20 rounded-lg border border-slate-400'>
                            <img className='rounded-t-lg' src={quizlet} alt="" />
                            <h2 className='mt-3 mx-5 text-center text-3xl'>Quizlet - Online Quiz (React)</h2>
                            <div className='px-8 pt-6 pb-4'>
                                <p>An online quiz application. You will find quizzes on different topics about Programming concepts. You can start any quiz and it will show you right/wrong based on your selection. There is a answer reveal button to reveal the correct answer.</p>
                                <button className='btn mt-3'>Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='my-5'>
                        <div className='shadow-lg shadow-sky-300/20 rounded-lg border border-slate-400'>
                            <img className='rounded-t-lg' src={brownsKitchen} alt="" />
                            <h2 className='mt-3 mx-5 text-center text-3xl'>Browns Kitchen - Food service review app</h2>
                            <div className='px-8 pt-6 pb-4'>
                                <p>A homemade food delivery service review website. Users can leave reviews on any particular dish. A new dish can be added. Users can edit/update, delete their comments and rate a dish using starts. Firebase authentication added.</p>
                                <button className='btn mt-3'>Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='my-5'>
                        <div className='shadow-lg shadow-sky-300/20 rounded-lg border border-slate-400'>
                            <img className='rounded-t-lg' src={pirates} alt="" />
                            <h2 className='mt-3 mx-5 text-center text-3xl'>Pirates of Programming Educational Website</h2>
                            <div className='px-8 pt-6 pb-4'>
                                <p>It is a educational website where a student can enroll any courses. Course materials have detail information in detail page and courses are listed unser categories. React, React-router-dom, Firebase authentication, Private route added.</p>
                                <button className='btn mt-3'>Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='my-5'>
                        <div className='h-[530px] shadow-lg shadow-sky-300/20 backdrop-blur-sm border border-slate-400 rounded-lg flex items-center justify-center'>
                            <a target="_blank" href="https://github.com/mickeymaruf">
                                <button className='bg-slate-500 px-5 py-3 rounded-lg uppercase flex items-center gap-3'>View More on <AiFillGithub className='w-8 h-8' /></button>
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default Projects;
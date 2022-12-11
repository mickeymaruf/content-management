import React from 'react';
import { FaGit, FaGitAlt, FaGithub, FaNode, FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiExpress, SiMongodb, SiPython, SiDjango, SiVercel, SiNetlify, SiFirebase } from 'react-icons/si'
import { Swiper, SwiperSlide } from 'swiper/react';

const Skills = () => {
    return (
        <div id="skills" className='w-11/12 mx-auto bg-slate-900 px-16 rounded-2xl'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <div className='flex justify-between'>
                        <FaReact className="w-20 h-20 text-blue-400" />
                        <SiJavascript className="w-20 h-20 text-yellow-300" />
                        <SiHtml5 className="w-20 h-20 text-orange-500" />
                        <SiCss3 className="w-20 h-20 text-blue-400" />
                        <SiTailwindcss className="w-20 h-20 text-blue-400" />
                        <SiBootstrap className="w-20 h-20 text-purple-500" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-between'>
                        <FaNode className="w-20 h-20 text-green-500" />
                        <SiExpress className="w-20 h-20 text-black" />
                        <SiMongodb className="w-20 h-20 text-green-500" />
                        <SiPython className="w-20 h-20 text-sky-800" />
                        <SiDjango className="w-20 h-20 text-green-700" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-between'>
                        <FaGitAlt className="w-20 h-20 text-red-500" />
                        <FaGithub className="w-20 h-20 text-black" />
                        <SiFirebase className="w-20 h-20 text-yellow-500" />
                        <SiNetlify className="w-20 h-20 text-sky-500" />
                        <SiVercel className="w-20 h-20 text-gray-500" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Skills;
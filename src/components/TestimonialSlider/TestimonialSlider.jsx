
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './TestimonialSlider.css'

// import required modules
import { Pagination } from 'swiper/modules';
import { FcBusinessman, FcBusinesswoman, FcManager } from 'react-icons/fc';
import { CiStar } from 'react-icons/ci';

const TestimonialSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className='w-[371px] rounded-3xl h-[201px] space-y-2 p-3 font-semibold bg-[#FFFFF5]'>
                        <h1 className="text-[19px]">Expertise and Compassion <br /> Combined</h1>
                        <p className='text-xs'> I can not thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way. </p>

                        <div className='flex flex-row items-center gap-4'>
                            <FcBusinessman className='w-12 h-12 rounded-full bg-gray-100 p-2' />

                            <div className=''>
                                <p className='text-xs'> <span className='font-bold '>Sarah D</span>, <span className='opacity-60'>IT Professional</span></p>
                                <div className='flex flex-row'>
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                </div>
 
                            </div>

                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='w-[371px] h-[201px] rounded-3xl space-y-2 p-3 font-semibold bg-[#FFFFF5]'>
                        <h1 className="text-[19px]">Life-Saving Care, Life-Changing <br /> Experience</h1>
                        <p className='text-xs'>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life. </p>

                        <div className='flex flex-row items-center gap-4'>
                            <FcBusinesswoman  className='w-12 h-12 rounded-full bg-gray-100 p-2' />

                            <div className=''>
                                <p className='text-xs'> <span className='font-bold '>Michael R</span>, <span className='opacity-60'>, Business Executive</span></p>
                                <div className='flex flex-row'>
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                </div>
 
                            </div>

                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='w-[371px] h-[201px] rounded-3xl space-y-2 p-3 font-semibold bg-[#FFFFF5]'>
                        <h1 className="text-[19px]">A Partner in Health and <br />
                        Wellness</h1>
                        <p className='text-xs'> As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they have become my trusted partner in health and </p>

                        <div className='flex flex-row items-center gap-4'>
                            <FcManager className='w-12 h-12 rounded-full bg-gray-100 p-2' />

                            <div className=''>
                                <p className='text-xs'> <span className='font-bold '>David S, </span>, <span className='opacity-60'>Lawyer</span></p>
                                <div className='flex flex-row'>
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                </div>
 
                            </div>

                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='w-[371px] h-[201px] space-y-2 p-3 font-semibold bg-[#FFFFF5]'>
                        <h1 className="text-[19px]">Expertise and Compassion <br /> Combined</h1>
                        <p className='text-xs'> I can not thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way. </p>

                        <div className='flex flex-row items-center gap-4'>
                            <FcBusinessman className='w-12 h-12 rounded-full bg-gray-100 p-2' />

                            <div className=''>
                                <p className='text-xs'> <span className='font-bold '>Sarah D</span>, <span className='opacity-60'>IT Professional</span></p>
                                <div className='flex flex-row'>
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                </div>
 
                            </div>

                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='w-[371px] h-[201px] space-y-2 p-3 font-semibold bg-[#FFFFF5]'>
                        <h1 className="text-[19px]">Expertise and Compassion <br /> Combined</h1>
                        <p className='text-xs'> I can not thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way. </p>

                        <div className='flex flex-row items-center gap-4'>
                            <FcBusinessman className='w-12 h-12 rounded-full bg-gray-100 p-2' />

                            <div className=''>
                                <p className='text-xs'> <span className='font-bold '>Sarah D</span>, <span className='opacity-60'>IT Professional</span></p>
                                <div className='flex flex-row'>
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                </div>
 
                            </div>

                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='w-[371px] h-[201px] space-y-2 p-3 font-semibold bg-[#FFFFF5]'>
                        <h1 className="text-[19px]">Expertise and Compassion <br /> Combined</h1>
                        <p className='text-xs'> I can not thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way. </p>

                        <div className='flex flex-row items-center gap-4'>
                            <FcBusinessman className='w-12 h-12 rounded-full bg-gray-100 p-2' />

                            <div className=''>
                                <p className='text-xs'> <span className='font-bold '>Sarah D</span>, <span className='opacity-60'>IT Professional</span></p>
                                <div className='flex flex-row'>
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                </div>
 
                            </div>

                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='w-[371px] h-[201px] space-y-2 p-3 font-semibold bg-[#FFFFF5]'>
                        <h1 className="text-[19px]">Expertise and Compassion <br /> Combined</h1>
                        <p className='text-xs'> I can not thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way. </p>

                        <div className='flex flex-row items-center gap-4'>
                            <FcBusinessman className='w-12 h-12 rounded-full bg-gray-100 p-2' />

                            <div className=''>
                                <p className='text-xs'> <span className='font-bold '>Sarah D</span>, <span className='opacity-60'>IT Professional</span></p>
                                <div className='flex flex-row'>
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                </div>
 
                            </div>

                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='w-[371px] h-[201px] space-y-2 p-3 font-semibold bg-[#FFFFF5]'>
                        <h1 className="text-[19px]">Expertise and Compassion <br /> Combined</h1>
                        <p className='text-xs'> I can not thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way. </p>

                        <div className='flex flex-row items-center gap-4'>
                            <FcBusinessman className='w-12 h-12 rounded-full bg-gray-100 p-2' />

                            <div className=''>
                                <p className='text-xs'> <span className='font-bold '>Sarah D</span>, <span className='opacity-60'>IT Professional</span></p>
                                <div className='flex flex-row'>
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                <CiStar className='text-orange-400' />
                                </div>
 
                            </div>

                        </div>

                    </div>

                </SwiperSlide>


            </Swiper>
        </>
    );
};

export default TestimonialSlider;
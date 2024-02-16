import React,{useState,useRef } from 'react';
import {Swiper} from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/mousewheel'
import "swiper/css/autoplay"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Movie() {
  const swiper1 = useSwiper();
  const img =[
    "./imgmain/1.jpg",
    "./imgmain/2.jpg",
    "./imgmain/3.jpg",
    "./imgmain/4.jpg",
    "./imgmain/5.jpg",
    "./imgmain/6.jpg",
    "./imgmain/7.jpg",
    "./imgmain/8.jpg",
    "./imgmain/9.jpg",
]
const [activeIndex, setActiveIndex] = useState(0);
const swiperRef = useRef(null);
const handleNext = () => {
  if (swiperRef.current !== null) {
    swiperRef.current.swiper.slideNext();
  }
};
const handlePrev = () => {
  if (swiperRef.current !== null) {
    swiperRef.current.swiper.slidePrev();
  }
};
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
    <div className='lg:text-[50px] text-[30px] font-bold text-blue-900 hover:text-blue-300 cursor-pointer'>
      <p>
        MOVIES
      </p>
    </div>
    <div className='relative flex justify-center items-center'>
          <div onClick={handleNext} className="hidden lg:block absolute z-10 right-[-2%] top-[50%]  text-blue-700 p-4 bg-white shadow-2xl  border-2 rounded-full" ><ArrowForwardIosIcon /></div>
    <div className='lg:block hidden'>
    <Swiper
    ref={swiperRef}
    spaceBetween={0}
    slidesPerView={3}
    className='lg:max-w-[60vw] '
    
    loop = {true}
  >
    {img.slice(activeIndex, activeIndex + 3).map((image, index) => (
      <>
    <SwiperSlide className='group flex relative  z-10'>
      <img className='hover:blur hover:scale-110 transition-all ease-in duration-3000' src={img[0]}/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
      </SwiperSlide>
    <SwiperSlide className='group flex relative  z-10'>
      <img src={img[1]} className='hover:blur hover:scale-110 transition-all ease-in duration-3000'/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
      </SwiperSlide>
    <SwiperSlide className='group flex relative  z-10'>
      <img src={img[2]} className='hover:blur hover:scale-110 transition-all ease-in duration-3000'/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
      </SwiperSlide>
    <SwiperSlide className='group flex relative  z-10'>
      <img src={img[3]}className='hover:blur hover:scale-110 transition-all ease-in duration-3000'/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
      </SwiperSlide>
    <SwiperSlide className='group flex relative  z-10'>
      <img src={img[4]} className='hover:blur hover:scale-110 transition-all ease-in duration-3000'/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
      </SwiperSlide>
    <SwiperSlide className='group flex relative  z-10'>
      <img src={img[5]} className='hover:blur hover:scale-110 transition-all ease-in duration-3000'/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
    </SwiperSlide>
    <SwiperSlide className='group flex relative  z-10'>
      <img src={img[6]} className='hover:blur hover:scale-110 transition-all ease-in duration-3000'/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
      </SwiperSlide>
    <SwiperSlide className='group flex relative  z-10'>
      <img src={img[7]} className='hover:blur hover:scale-110 transition-all ease-in duration-3000'/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
      </SwiperSlide>
    <SwiperSlide className='group flex relative  z-10'>
      <img src={img[8]} className='hover:blur hover:scale-110 transition-all ease-in duration-3000'/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
      </SwiperSlide>
    </>
    ))}
  </Swiper>
  </div>
  <div className='lg:hidden '>
  <Swiper
    ref={swiperRef}
    spaceBetween={0}
    slidesPerView={1.5}
    centeredSlides={true}
    className='max-w-[100vw]'
    
    loop = {true}
  >
    {img.slice(activeIndex, activeIndex + 3).map((image, index) => (
      <>
    <SwiperSlide className='group flex relative  z-10'>
      <img className='hover:blur hover:scale-110 transition-all ease-in duration-3000' src={img[0]}/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
      </SwiperSlide>
    <SwiperSlide className='group flex relative  z-10'>
      <img src={img[1]} className='hover:blur hover:scale-110 transition-all ease-in duration-3000'/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
      </SwiperSlide>
    <SwiperSlide className='group flex relative  z-10'>
      <img src={img[2]} className='hover:blur hover:scale-110 transition-all ease-in duration-3000'/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
      </SwiperSlide>
    <SwiperSlide className='group flex relative  z-10'>
      <img src={img[3]}className='hover:blur hover:scale-110 transition-all ease-in duration-3000'/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
      </SwiperSlide>
    <SwiperSlide className='group flex relative  z-10'>
      <img src={img[4]} className='hover:blur hover:scale-110 transition-all ease-in duration-3000'/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
      </SwiperSlide>
    <SwiperSlide className='group flex relative  z-10'>
      <img src={img[5]} className='hover:blur hover:scale-110 transition-all ease-in duration-3000'/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
    </SwiperSlide>
    <SwiperSlide className='group flex relative  z-10'>
      <img src={img[6]} className='hover:blur hover:scale-110 transition-all ease-in duration-3000'/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
      </SwiperSlide>
    <SwiperSlide className='group flex relative  z-10'>
      <img src={img[7]} className='hover:blur hover:scale-110 transition-all ease-in duration-3000'/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
      </SwiperSlide>
    <SwiperSlide className='group flex relative  z-10'>
      <img src={img[8]} className='hover:blur hover:scale-110 transition-all ease-in duration-3000'/>
      <p className="absolute top-[50%] left-[42%] text-white font-semibold hidden group-hover:block">SEE MORE</p>
      </SwiperSlide>
    </>
    ))}
  </Swiper>
  </div>
  <div onClick={handlePrev} className="hidden lg:block  absolute left-[-2%] top-[50%] z-10 text-blue-700 p-4 bg-white shadow-2xl  border-2 rounded-full" ><ArrowBackIosNewIcon /></div>
  </div>
  </div>
  </>
)}

export default Movie;
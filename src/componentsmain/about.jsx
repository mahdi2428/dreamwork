import React, { useState,useEffect } from "react";
import {Swiper} from 'swiper/react';
import { SwiperSlide, useSwiper } from 'swiper/react';
import {animate, motion, useMotionValue} from "framer-motion"
import 'swiper/css';
import 'swiper/css/mousewheel'
import "swiper/css/autoplay"


 function About(){
    const Drag_buffer = 50 ;
    const [imgindex , setImageindex] =useState(1);
    const [dragging , setDragging]=useState(false);
    const dragX = useMotionValue(0);
    // console.log(dragX.get());
    const onDragStart = ()=>{
        setDragging(true);
        // console.log("start");
    }
    const v = 0
    const onDragEnd = ()=>{
        setDragging(false);
        const slider1 = document.querySelectorAll('.slider')
        
        const x = dragX.get();
        if (x <= -Drag_buffer ){
            setImageindex((prevIndex) => (prevIndex + 1) % Gallery.length)
            
            
        
        }else if ( x >= Drag_buffer){
            setImageindex((prevIndex) => (prevIndex - 1 + Gallery.length) % Gallery.length)
            if (imgindex == -1 ){
                setImageindex(6)
            }
        }
         
    }
    const data = [
        {
            title: "CAMPUS",
            imgtext: "CAMPUS",
            text:"The 9-acre campus in Glendale houses over 1200 empolyees in the feature film division-800 of whom are artists #D animatores , and 200 of whom are technologists and enaineers."
        },
        {
            title: "MOVIES",
            imgtext: "ICONIC FEATURES FILMS",
            text:"The 9-acre campus in Glendale houses over 1200 empolyees in the feature film division-800 of whom are artists #D animatores , and 200 of whom are technologists and enaineers."
        },
        {
            title: "TV",
            imgtext: "AWARD_WINNING TELEVISION",
            text:"The 9-acre campus in Glendale houses over 1200 empolyees in the feature film division-800 of whom are artists #D animatores , and 200 of whom are technologists and enaineers."
        },
        {
            title: "TECH",
            imgtext: "INNOVATIVE TECHNOLOGY",
            text:"The 9-acre campus in Glendale houses over 1200 empolyees in the feature film division-800 of whom are artists #D animatores , and 200 of whom are technologists and enaineers."
        },
        
    ]
    const [ change , setChange] = useState(
        {campus: false , 
        movies:true , 
        tv:false , 
        tech:false}
    )
    const handleTabClick = (tab) => {
        setChange({
            campus: tab === "campus",
            movies: tab === "movies",
            tv: tab === "tv",
            tech: tab === "tech"
        });
    };

    const Gallery =[
        "./imgmain/about-1.jpg",
        "./imgmain/about-2.jpg",
        "./imgmain/about-3.jpg",
        "./imgmain/about-4.jpg",

    ]
    const Image=()=>{
        return(
            <>
            <motion.div 
            
            className=" flex justify-center gap-2 lg:gap-10">
                    
                            <div className="flex flex-col items-center ">
                                <div 
                                className="aspect-video flex items-center justify-center  w-[90vw]  lg:w-full lg:h-[20vw] cursor-grab active:cursor-grabbing"
                                style={{
                                
                                    backgroundImage : `url(${Gallery[0]})`,
                                    backgroundSize : "cover",
                                    backgroundPosition:"center",
                                    backgroundRepeat : "no-repeat",
                                }}>
                                    {imgindex == 0 && 
                                            <div>
                                                <p className="font-semibold lg:text-2xl text-white">CAMPUS</p>
                                            </div>
                                    }
                                </div>
                                {imgindex == 0 && 
                                            <div className="text-center">
                                                <p className="font-semibold  text-white">The 9-acre campus in Glendale houses over 1200 empolyees in the feature film division-800 of whom are artists #D animatores , and 200 of whom are technologists and enaineers.</p>
                                            </div>
                                    }
                            </div>
                            
                            
                            <div className="flex flex-col items-center">
                                <div 
                                className="aspect-video flex items-center justify-center w-[90vw] lg:w-full lg:h-[20vw] cursor-grab active:cursor-grabbing"
                                style={{
                                
                                    backgroundImage : `url(${Gallery[1]})`,
                                    backgroundSize : "cover",
                                    backgroundPosition:"center",
                                    backgroundRepeat : "no-repeat",
                                }}>
                                    {imgindex == 1 && 
                                            <div>
                                                <p className="font-semibold lg:text-2xl text-white">ICONIC FEATURES FILMS</p>
                                            </div>
                                    }
                                </div>
                                {imgindex == 1 && 
                                            <div className="text-center">
                                                <p className="font-semibold  text-white">The 9-acre campus in Glendale houses over 1200 empolyees in the feature film division-800 of whom are artists #D animatores , and 200 of whom are technologists and enaineers.</p>
                                            </div>
                                    }
                            </div>

                            <div className="flex flex-col items-center">
                                <div 
                                className="aspect-video flex items-center justify-center w-[90vw] lg:w-full lg:h-[20vw] cursor-grab active:cursor-grabbing"
                                style={{
                                
                                    backgroundImage : `url(${Gallery[2]})`,
                                    backgroundSize : "cover",
                                    backgroundPosition:"center",
                                    backgroundRepeat : "no-repeat",
                                }}>
                                    {imgindex == 2 && 
                                            <div>
                                                <p className="font-semibold lg:text-2xl text-white">AWARD_WINNING TELEVISION</p>
                                            </div>
                                    }
                                </div>
                                {imgindex == 2 && 
                                            <div className="text-center">
                                                <p className="font-semibold  text-white">The 9-acre campus in Glendale houses over 1200 empolyees in the feature film division-800 of whom are artists #D animatores , and 200 of whom are technologists and enaineers.</p>
                                            </div>
                                    }
                            </div>
                            
                            <div className="flex flex-col items-center">
                                <div 
                                className="aspect-video flex items-center justify-center w-[90vw] lg:w-full lg:h-[20vw] cursor-grab active:cursor-grabbing"
                                style={{
                                
                                    backgroundImage : `url(${Gallery[3]})`,
                                    backgroundSize : "cover",
                                    backgroundPosition:"center",
                                    backgroundRepeat : "no-repeat",
                                }}>
                                    {imgindex == 3 && 
                                            <div>
                                                <p className="font-semibold lg:text-2xl text-white">INNOVATIVE TECHNOLOGY</p>
                                            </div>
                                    }
                                </div>
                                {imgindex == 3 && 
                                            <div className="text-center">
                                                <p className="font-semibold  text-white">The 9-acre campus in Glendale houses over 1200 empolyees in the feature film division-800 of whom are artists #D animatores , and 200 of whom are technologists and enaineers.</p>
                                            </div>
                                    }
                            </div>
                            
                    
                    
            </motion.div>
            </>
        )
    }
    const handle = () =>{
        handleTabClick("campus")
        setImageindex(imgindex == imgindex ? 0 : imgindex)
    }
    const handle1 = () =>{
        handleTabClick("movies")
        setImageindex(imgindex == imgindex ? 1 : imgindex)
    }
    const handle2 = () =>{
        handleTabClick("tv")
        setImageindex(imgindex == imgindex ? 2 : imgindex)
    }
    const handle3 = () =>{
        handleTabClick("tech")
        setImageindex(imgindex == imgindex ? 3 : imgindex)
    }
    console.log(imgindex);
        return(
        <>
        <div className="bg-blue-900 overflow-hidden  flex flex-col items-center align-center justify-center py-16 mt-10">
            <div className="">
                <p className=" text-white font-bold  lg:text-[50px] hover:text-blue-500 transition cursor-pointer ease-out duration-7000">ABOUT DREAMWORKS</p>
            </div>
            <div className="flex flex-col items-center align-center justify-center">
            <div className="flex  pb-5">
                    <p onClick={handle} className={` border-b-2 border-blue-500 w-[20vw] lg:w-[4vw] text-center font-bold text-xs cursor-pointer ${ imgindex==0  ? "text-blue-500 border-blue-700 " : "text-blue-100"}`}>CAMPUS</p>
                    <p onClick={handle1} className={` border-b-2 border-blue-500 w-[20vw] lg:w-[4vw] text-center font-bold text-xs cursor-pointer ${ imgindex==1 ? "text-blue-500 border-blue-700 " : "text-blue-100"}`}>MOVIES</p>
                    <p onClick={handle2} className={` border-b-2 border-blue-500 w-[20vw] lg:w-[4vw] text-center font-bold text-xs cursor-pointer ${ imgindex==2 ?  "text-blue-500 border-blue-700 " : "text-blue-100"}`}>TV</p>
                    <p onClick={handle3} className={` border-b-2 border-blue-500 w-[20vw] lg:w-[4vw] text-center font-bold text-xs cursor-pointer ${ imgindex==3 ? "text-blue-500 border-blue-700 " : "text-blue-100"}`}>TECH</p>
                </div>
                <motion.div
                className="ml-[75%]"
                drag="x"
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                dragConstraints={{
                    right : 0,
                    left : 0,
                }}
                animate = {{
                    translateX: `-${(25.1*imgindex)}%` , 
                    duration : 300
                }}
                style={{
                    
                    x:dragX,
                }}
                transition={{
                    type : "spring",
                    mass : 2,
                    stiffness :100,
                    damping : 20,
                    ease: 'linear', 
                   
                }}
                
                >
                    <Image />
                    
                    
                </motion.div>
            </div>
        </div>
        </>
    )
}
export default About;
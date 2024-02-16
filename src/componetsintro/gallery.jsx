import React, { useState ,useEffect} from "react";
import {animate, motion, useMotionValue} from "framer-motion"
import { duration } from "@mui/material";

export default function Gallery(){
    const Drag_buffer = 50 ;
    const [imgindex , setImageindex] =useState(0);
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
            console.log('ttttttt');
            
            
        
        }else if ( x >= Drag_buffer){
            setImageindex((prevIndex) => (prevIndex - 1 + Gallery.length) % Gallery.length)
            if (imgindex == -1 ){
                setImageindex(6)
            }
        }
         
    }
    
    const Images = () =>{

        return (
            <>
                
                    {/* return( */}
                        <div className="flex w-full ">
                            {/* <div style={{
                                backgroundImage :`url(${imgsrc})` , 
                                backgroundSize : "cover",
                                backgroundPosition:"center",
                                backgroundRepeat : "no-repeat",
                                // height : "38vw",
                        }} className="h-96 w-full"> */}
                        {/* <img src={Gallery[2]}  className="h-[700px] w-full"/>  */}
                        {/* <img src={Gallery[imgindex]} onDragStart={onDragStart} onDragEnd={onDragEnd} className="h-[700px] w-full"/>  */}
                        {/* <img src={Gallery[3]}  className="h-[700px] w-full"/>  */}
                            {/* </div> */}
                            <motion.div 
                            
                        // key={index}
                        style={{
                            width:'70%'  , 
                            marginRight:'10px' ,
                            backgroundImage :`url(${proxy[imgindex-1]})`,
                            backgroundSize : "cover",
                            backgroundPosition:"center",
                            backgroundRepeat : "no-repeat",
                            // height : "500px",
                            
                        }} 
                        
                        transition={{
                            type : "spring",
                            mass : 0,
                            stiffness :0,
                            damping : 0,
                            ease: 'linear', 
                            repeat: Infinity   
                            
                        }}
                        
                        className="aspect-video h-screen  shrink-0 object-cover " >
                        
                        

                        {/* <img src={Gallery[imgindex]} onDragStart={onDragStart} onDragEnd={onDragEnd} className="h-[700px] w-full"/>  */}

                        </motion.div> 
                        <motion.div 
                        // key={index}
                        style={{
                            width:'70%'  , 
                            marginRight:'20px' ,
                            backgroundImage :`url(${proxy[imgindex]})`,
                            backgroundSize : "cover",
                            backgroundPosition:"center",
                            backgroundRepeat : "no-repeat",
                            // height : "38vw",
                            
                        }} 
                        
                        transition={{
                            type : "spring",
                            mass : 0,
                            stiffness : 0,
                            damping : 0,
                            ease: 'linear', 
                            repeat: Infinity   
                            
                        }}
                        
                        className="aspect-video w-screen shrink-0 object-cover " >
                        
                        

                        {/* <img src={Gallery[imgindex]} onDragStart={onDragStart} onDragEnd={onDragEnd} className="h-[700px] w-full"/>  */}

                        </motion.div> 
                         <motion.div 
                        // key={index}
                        style={{
                            width:'70%'  , 
                            marginRight:'20px' ,
                            backgroundImage :`url(${proxy[imgindex+1]})`,
                            backgroundSize : "cover",
                            backgroundPosition:"center",
                            backgroundRepeat : "no-repeat",
                            // duration:300 , 
                            // height : "38vw",
                            
                        }} 
                        
                        transition={{
                            type : "spring",
                            mass : 3,
                            stiffness : 200,
                            damping : 20,
                            ease: 'linear', 
                            repeat: Infinity   
                            
                        }}
                        
                        className="aspect-video w-screen shrink-0 object-cover " >
                        
                        

                        {/* <img src={Gallery[imgindex]} onDragStart={onDragStart} onDragEnd={onDragEnd} className="h-[700px] w-full"/>  */}

                        </motion.div> 
                        </div>
                    {/* ) */}
                
            </>
        )
    }
    const Dots = ()=>{
        return(
            <div className="flex justify-center items-center gap-3 mt-4 ">
                {Gallery.map((img , idx) =>{
                    return<button key={idx}
                    onClick={()=> setImageindex(idx)}
                    className={`h-3 w-3  rounded-full bg-black transition-clor 
                    ${idx=== imgindex ? "bg-blue-900  " :"bg-gray-400"}`}
                    >
                        
                    </button>
                })}
            </div>
        )
    }
    
    const Gallery = [
        "./img/gallery.jpg",
        "./img/gallery1.jpg",
        "./img/gallery2.jpg",
        "./img/gallery3.jpg",
        "./img/gallery4.jpg",
        "./img/gallery5.jpg",
        "./img/gallery6.jpg",
    ]
    const proxy = new Proxy(Gallery, {
        get(target, prop) {
            if (!isNaN(prop)) {
                prop = parseInt(prop, 10);
                if (prop < 0) {
                    prop += target.length;
                }
                if (prop >= target.length){
                    prop -= target.length
                }
            }
            return target[prop];
        }
    });

        return(
        
        <div className="relative bg-black mb-13 overflow-hidden h-screen">
            <div className="absolute z-10 left-[14%] top-[2%] text-white font-bold text-[35px]">
                <p>Gallery</p>
            </div>
            <motion.div 
            infinit = {true}
            drag ="x"
            dragConstraints={{
                right: 0,
                left: 0,
            }}
            animate = {{
                translateX: `-${(55+imgindex)}%` , 
                duration : 300
            }}
            
            style={{
                x: dragX
            }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            transition={{
                type : "spring",
                mass : 3,
                stiffness : 2400,
                damping : 400,
                 
            }} className="relative  cursor-grab items-center active:cursor-grabbing  w-full">
            
                <div className=" flex slider">
                    <Images />
                </div>
                
                
            </motion.div>
            {/* <Dots/> */}
        </div>
        
    )
    
}


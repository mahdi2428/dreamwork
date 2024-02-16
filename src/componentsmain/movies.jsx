import React, { useEffect, useState,useRef } from "react";
import "./movies.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Movies(){
    const carouselRef = useRef(null);
    const [isDragStart, setIsDragStart] = useState(false);
    const [prevPageX, setPrevPageX] = useState(0);
    const [prevScrollLeft, setPrevScrollLeft] = useState(0);
    const [classlist,setClasslist] = useState(false)
    const [position , setPosition] =useState(0)
    const dragStart = (event) => {
      setIsDragStart(true);
      setPrevPageX(event.pageX || event.touches[0].pageX);
      setPrevScrollLeft(carouselRef.current.scrollLeft);
    };
  
    const dragging = (event) => {
      if (!isDragStart) return;
      event.preventDefault();
      setPosition((event.pageX || event.touches[0].pageX ) - prevPageX)
      carouselRef.current.scrollLeft = prevScrollLeft - position;
      setClasslist(!classlist)
    };
  
    const dragStop = (event) => {
      setIsDragStart(false);
      setClasslist(classlist)
      autoSlide(event)
    };
     
    const autoSlide=(event)=>{
      setPosition((event.pageX || event.touches[0].pageX ) - prevPageX)
      let positionDiff = setPosition(Math.abs(position))
      
      let valdiff = 1200 - positionDiff

      if(carouselRef.current.scrollLeft > prevScrollLeft){
       if(carouselRef.current.scrollLeft > 50){
        setPosition((event.pageX || event.touches[0].pageX ) - prevPageX)
        console.log('fuck')

        carouselRef.current.scrollLeff += 1200 
       }else{
        setPosition(()=>carouselRef.current.scrollLeff - position)
       }

      }
    }



    const [scrollPosition, setScrollPosition] = useState(0);
    const next = () => {
        const myElement = carouselRef.current;
    
        if (myElement) {
        const newScrollPosition = scrollPosition + 1200;
          myElement.scrollLeft = newScrollPosition;
          setScrollPosition(newScrollPosition);
        }
      };
      const perv = () => {
        const myElement = carouselRef.current;
    
        if (myElement) {
        const newScrollPosition = scrollPosition - 1200;
          myElement.scrollLeft = newScrollPosition;
          setScrollPosition(newScrollPosition);
        }
      };

    
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
    
       
    return(
        <>
        <div className="flex flex-col justify-center items-center">
            <div>
                <p>
                    Movies
                </p>
            </div>
            
            <div  className="max-w-[1200px] relative flex items-center">
                <div onClick={perv} className=" absolute top-[50%] left-[-2%] text-blue-700 p-4 bg-white shadow-2xl  border-2 rounded-full"><ArrowBackIosNewIcon className="" /></div>

                <div 
                    onMouseDown={dragStart}
                    onMouseMove={dragging}
                    onMouseUp={dragStop}
                    onTouchStart={dragStart}
                    onTouchMove={dragging}
                    onTouchEnd={dragStop}
                    ref={carouselRef}

                    className={`flex items-center holder scroll-smooth overflow-hidden ${classlist ? "" :""}`}
                    style={{
                        
                    }}
                    >
                    
                    
                    <img className=" object-contain" src={img[0]} />
                    <img className=" object-contain" src={img[1]} />
                    <img className=" object-contain" src={img[2]} />
                    <img className=" object-contain" src={img[3]} />
                    <img className=" object-contain" src={img[4]} />
                    <img className=" object-contain" src={img[5]} />
                    <img className=" object-contain" src={img[6]} />
                    <img className=" object-contain" src={img[7]} />
                    <img className=" object-contain" src={img[8]} />
                    
                </div>
                <div onClick={next}  className=" absolute top-[50%] right-[-2%] text-blue-700 p-4 bg-white shadow-2xl  border-2 rounded-full" ><ArrowForwardIosIcon /></div>
            </div>
            
        </div>
        </>
    )
}
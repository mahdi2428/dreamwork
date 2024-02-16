import React from "react";
import image from "../assets/aboutus.jpg"
export default function Header(){
    return(
        <>
        <div className="h-screen  bg-cover mt-[5vw] items-center flex"
         style={{backgroundImage:`url(${image})`}}>
            <div className=" z-10 text-white ml-[4vw]">
                <p className="text-[30px] font-semibold">
                ABOUT DREAMWORKS
                </p>
                <p className="text-[75px] font-extrabold">
                WHO WE ARE
                </p>
                <p className="text-lg">
                We tell stories about dreams, and the journeys our unconventional <br/> heroes take to make them come true.
                </p>
            </div>
        </div>
        </>
    )
}
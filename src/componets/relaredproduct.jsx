import React from "react";
import img from "../assets/gallery2.jpg"
import img1 from "../assets/gallery3.jpg"
export default function Related(){
    return(
        <>
        <div  className="h-[500px] flex lg:flex-row flex-col ">
            <div style={{backgroundImage : `url(${img})`}}
            className="w-full h-full bg-cover flex pb-4 items-end justify-center ">
                <div className="text-white mr-20">
                    <p className="font-semibold lg:text-lg">RELATED</p>
                    <p className="font-bold lg:text-2xl">DRAGONS:RACE TO THE EDGE</p>
                    <p className="font-semifont lg:text-lg ">NOW STREAMING ON NETFLIX</p>
                    <button className="py-1 lg:text-lg  mt-3 px-9 font-semibold text-md border border-white">VIEW DETAILS</button>
                </div>
            </div>
            <div style={{backgroundImage : `url(${img1})`}}
            className="w-full h-full bg-cover flex pb-4 items-end justify-center">
                <div className="text-white  mr-20">
                    <p className="font-semibold lg:text-lg">RELATED</p>
                    <p className="font-bold lg:text-2xl">HOW TO TRAIN YOUR DRAGON</p>
                    <p className="font-semifont lg:text-lg ">NOW ON BLU-RAY,DVD AND DIGITAL</p>
                    <button className="py-1 mt-3 px-9 font-semibold lg:text-md border border-white">VIEW DETAILS</button>
                </div>
            </div>
        </div>
        </>
    )
}
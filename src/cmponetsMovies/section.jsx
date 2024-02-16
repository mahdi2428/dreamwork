import React from "react";
import img from "../assets/croods.jpg"
import img1 from "../assets/babyboss.jpg"
export default function Section(){
    return(
        <>
        <div  className="h-[500px] flex lg:flex-row flex-col ">
            <div style={{backgroundImage : `url(${img})`}}
            className="w-full h-full bg-cover flex pb-4 items-end justify-center ">
                <div className="text-white mr-20">
                    <p className="font-bold lg:text-2xl">THE CROODS</p>
                    <p className="font-semifont lg:text-lg ">ON BLU-RAY, DVD & DIGITAL</p>
                    <button className="py-1 lg:text-sm  mt-3 px-9 font-semibold text-md border border-white">VIEW SITE</button>
                </div>
            </div>
            <div style={{backgroundImage : `url(${img1})`}}
            className="w-full h-full bg-cover flex pb-4 items-end ">
                <div className="text-white ml-10 mr-20">
                    <p className="font-bold lg:text-2xl">THE BOSS BABY</p>
                    <p className="font-semifont lg:text-lg ">ON BLU-RAY, DVD & DIGITAL</p>
                    <button className="py-1 mt-3 px-9 font-semibold lg:text-sm border border-white">VIEW SITE</button>
                </div>
            </div>
        </div>
        </>
    )
}
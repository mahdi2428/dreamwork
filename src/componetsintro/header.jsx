import React from "react";
import video from "../assets/HOW_TO_TRAIN_YOUR_DRAGON__THE_HIDDEN_WORLD___Official_Trailer.mp4"


export default function Header(){
    return(
        <>
        <div className="relative flex justify-center items-center " >
            <video src={video} loop muted autoPlay/>
            <div className="absolute flex flex-col items-center justify-center">
                <img className="  object-cover w-[30vw]" src="./imgintro/how-to-train-your-dragon-the-hidden-world-logo.png" />
                <button className=" z-10 text-white border border-white px-4 py-1 font-semibold ">WACHT TRAILER</button>
            </div>
        </div>


        </>
    )
}
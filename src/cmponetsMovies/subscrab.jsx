import React, { useEffect, useRef, useState } from "react";
import "./subscrab.css"
export default function Subscrap(){

    return(
        <>
        <div className=" transition-all z-30 duration-7000 overflow-hidden">
            <div className="subsbcriber relative transform flex shadow-xl ">
                <p className="text-blue-800 pt-3 font-semibold  text-sm bg-white p-2 z-10 cursor-pointer hover:text-blue-400">SUBSCRIBE TO THE NEWSLETTER</p>
            </div>  
        </div>
        </>
    )
}
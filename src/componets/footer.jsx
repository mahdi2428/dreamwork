import React from "react";

export default function Footer(){
    return(
        <>
        <div className="flex flex-col bg-blue-900 gap-7 pb-16 pt-16 justify-center items-center mt-10">
            <div>
                <img className="h-16 object-contain" src="./img/logo1.png"/>
            </div>
            <div>
                <ul className=" gap-5 font-semibold text-white hidden lg:flex text-sm">
                    <il>HOME</il>
                    <il>MOVIES</il>
                    <il>TV SHOWS</il>
                    <il>ABOUT</il>
                    <il>CAREERS</il>
                    <il>CULTURE</il>
                    <il>CLASSICS</il>
                    <il>DEI</il>
                </ul>
                <div className="flex gap-10 lg:hidden">
                <ul className=" gap-5 font-semibold text-white flex  flex-col text-sm">
                    <il>HOME</il>
                    <il>MOVIES</il>
                    <il>TV SHOWS</il>
                </ul>
                <ul className=" gap-5 font-semibold text-white flex flex-col text-sm">
                    <il>ABOUT</il>
                    <il>CAREERS</il>
                </ul>
                <ul className=" gap-5 font-semibold text-white flex flex-col text-sm">
                    <il>CULTURE</il>
                    <il>CLASSICS</il>
                    <il>DEI</il>
                </ul>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-semibold text-white text-sm">FOLLOW DREAMWORKS</p>
                <div className="flex items-center gap-5 ">
                    <img className="lg:h-[3vw] lg:w-[1.2vw] h-[20vw] w-[10vw] object-cover" src="./img/x1.png"/>
                    <img className="lg:h-[2vw] w-[10vw] lg:w-[2vw] object-contain" src="./img/facebooklogo.png"/>
                    <img className="lg:h-[2vw] w-[10vw] lg:w-[2vw] object-contain" src="./img/youtubelogo.png"/>
                    <img className="lg:h-[2vw] w-[10vw] lg:w-[2vw] object-contain" src="./img/instagramlogo.png"/>
                    <img className="lg:h-[2vw] w-[10vw] lg:w-[2vw] object-contain" src="./img/tiktoklogo.png"/>
                </div>
            </div>
            <div className="flex flex-col text-[11px] text-white items-center">
                <p>
                © 2024 DREAMWORKS ANIMATION ALL RIGHTS RESERVED.
                </p>
                <ul className="flex flex-wrap justify-center whitespace-nowrap gap-1">
                    <li className="border-r-2 pr-1 border-white cursor-pointer hover:underline ">PRIVACY POLICY</li>
                    <li className="border-r-2 pr-1 border-white cursor-pointer hover:underline ">CA NOTICE</li>
                    <li className="border-r-2 pr-1 border-white cursor-pointer hover:underline ">TERMS OF SERVICE</li>
                    <li className="border-r-2 pr-1 border-white cursor-pointer hover:underline ">YOUTUBE TERMS OF SERVICE</li>
                    <li className=" pr-1 cursor-pointer hover:underline ">GOOGLE PRIVACY POLICY</li>
                </ul>
                <div className="flex mt-2 lg:mt-0 ">
                <img className="h-5 pr-2" src="./img/netapp-white.jpg"/>
                <img className="h-5" src="./img/lenovo-blue.png" />
                </div>
            </div>

        </div>
        </>
    )
}
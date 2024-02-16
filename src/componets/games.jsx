import React from "react";

export default function Games(){
    const data = [
        {
            img: "./img/game.jpg",
            text:"DRAGONS :DAWN OF NEW RIDERS",
            text2:"JOIN SCRIBBLER SND PATCH IN AN ALL NEW EPIC ADVENTURE ON PS4,XB1,SWITCH & PC!",
        },
        {
            img: "./img/game2.jpg",
            text:"DRAGONS: RISE OF BERK",
            text2:"TRAIN YOUR DRAGONS FOR BATTLE!",
        },
        {
            img: "./img/game3.jpg",
            text:"DRAGONS: TITAN UPRISING ",
            text2:"JOIN TOOTHLESS AND HICCUP IN FIGHT TO SAVE BERK",
        },
        {
            img: "./img/game4.jpg",
            text:"SCHOOL OF DRAGONS",
            text2:"WITNESS THE RISE OF STORMHEAT",
        },
        {
            img: "./img/game6.jpg",
            text:"DWA ALL-STAR KARTS",
            text2:"",
        },
        
    ]
    return(
        <>
        <div className="lg:mx-32 mb-10 ">
            <div className="text-blue-900 font-bold text-2xl my-10">
                <p >GAMES</p>
            </div>
            <div className="flex gap-5 lg:items-start items-center lg:justify-start justify-center  flex-wrap">
                {data.map((items)=>(
                    <>
                        <div className="flex flex-col justify-center items-center">
                            <div className="lg:w-[360px] w-[50vw] relative  group">
                               <img className="hover:blur-sm" src={items.img} /> 
                               <div className="w-80 ">
                                <p className="group-hover:block hidden absolute top-[48%] left-[38%] text-white font-bold">SEE MORE</p>
                            </div>
                            </div>
                            
                            
                            <div className="lg:w-80 w-48 ">
                                <p className="text-blue-900 font-bold">{items.text}</p>
                                <p className="text-blue-800 text-sm ">{items.text2}</p>
                            </div>
                           
                        </div>
                    </>
                ))}
            </div>
        </div>
        </>
    )
}
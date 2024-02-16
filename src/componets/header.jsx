import React, { useState } from "react";
import video from "../assets/vid3.mp4"
import video1 from "../assets/ninerealms2.mp4"
export default function Header(){
    const[change , setChange]= useState(false)
    const changer = () =>{
        setChange(!change)
    }
    setTimeout(changer ,20000)
    const change1 = () => {
        setChange(false)
    }
    const change2 = () => {
        setChange(true)
    }
    return(
        <> 
        
        <div className="flex mt-[8%] xl:mt-[6%] items-center relative overflow-hidden">
        {change ?   <>
                    <div className=" hidden lg:block z-[-1] ">
                        <video className=" w-[100vw]" src={video}  autoPlay loop muted />
                    </div>
                    <div className="block lg:hidden">
                        <img className="w-screen h-[80vh] object-cover" src="./img/dragon.jpg" />
                    </div>
                    </>
        :
                    <>
                    <div className="hidden lg:block z-[-1] ">
                        <video className=" w-[100vw]" src={video1}  autoPlay loop muted />
                    </div>
                    <div className="block lg:hidden">
                    <   img className="w-screen object-cover h-[80vh]" src="./img/nine.jpg" />
                    </div>
                    </>
        }
        
       
        {change ? <div className="absolute flex flex-col ml-[8%] top-[80%] lg:top-[20%]">
                        <div className="xl:text-[25px] text-white">
                            <p>ON BLU-RAY,DVD & DIGITAL</p>
                        </div>
                        <div className="text-white xl:text-[50px] xl:w-[30vw] font-extrabold">
                            <p>HOW TO TRAIN YOUR DRAGON : THE HIDDEN WORLD</p>
                        </div>
                        <div className="flex gap-5">
                            <button className="border py-2 px-7 lg:px-9 text-white font-semibold lg:font-bold text-[10px] lg:text-sm hover:text-blue-500 hover:bg-white transition-all ease-in-out duration-500">OFFICIAL SITE</button>
                            <button className="border py-2 px-7 lg:px-9 text-white font-semibold lg:font-bold text-[10px] lg:text-sm hover:text-blue-500 hover:bg-white transition-all ease-in-out duration-500">WATCH VIDEO</button>
                        </div>
                    </div>
        :
                    <div className="absolute flex flex-col ml-[8%] top-[80%] lg:top-[30%]">
                        <div className="xl:text-[25px] text-white">
                            <p>NEW EPISODES NOW STREAMIN ON HULU AND PEACOCK</p>
                        </div>
                        <div className="text-white xl:text-[60px] xl:w-[40vw] font-extrabold">
                            <p>DRAGONS : THE NINE REALMS</p>
                        </div>
                        <div className="flex gap-5">
                            <button className="border py-2 px-7 lg:px-9 text-white font-semibold lg:font-bold text-[10px] lg:text-sm hover:text-blue-500 hover:bg-white transition-all ease-in-out duration-500">OFFICIAL SITE</button>
                            <button className="border py-2 px-7 lg:px-9 text-white font-semibold lg:font-bold text-[10px] lg:text-sm hover:text-blue-500 hover:bg-white transition-all ease-in-out duration-500">WATCH VIDEO</button>
                        </div>
                    </div> }
                    <div className="absolute text-white  flex top-[96%] lg:top-[85%] xl:top-[93%] left-[10%] lg:left-[35%]">
                        <p onClick={change1} className={change ? " cursor-pointer border-b-2 border-white text-gray-300 text-center  font-bold text-[12px] mt-3 w-[15vw] hidden lg:block" : "hidden lg:block font-bold text-[12px] w-[15vw] border-b-2 text-center border-blue-600 text-white mt-3 "}>DRAGONS : THE NINE REALMS</p>
                        <p onClick={change2} className={change ? "border-b-2 border-blue-600 text-white w-[15vw] text-center font-bold text-[12px] hidden lg:block" : "hidden lg:block text-[12px] cursor-pointer  font-bold w-[15vw] text-center border-b-2 border-white text-gray-300 "}>HOW TO TRAIN YOUR DRAGON : THE HIDDEN WORLD</p>
                        <span onClick={change1} className={change ? " cursor-pointer border-b-2 border-white text-gray-300 text-center  font-bold text-[12px] mt-3 w-[40vw] block lg:hidden" : "block lg:hidden font-bold text-[12px] w-[40vw] border-b-2 text-center border-blue-600 text-white mt-3 "}></span>
                        <span onClick={change2} className={change ? "border-b-2 border-blue-600 text-white w-[40vw] text-center font-bold text-[12px] block lg:hidden" : "block lg:hidden text-[12px] cursor-pointer  font-bold w-[40vw] text-center border-b-2 border-white text-gray-300"}></span>
                    </div>
                    </div>
        
        
        
        </>
    )
}
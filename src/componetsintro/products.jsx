import React from "react";

export default function Products(){
    return(
        <>
        <div className="flex">
            <div className="flex items-end basis-1/2 justify-end p-8">
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-lg text-blue-700">HOW TO TRAIN YOUR<br/> DRAGON: THE HIDDEN WORLD</p>
                    <button className=" py-1 px-3 w-[80%] font-bold text-sm text-blue-700 border border-blue-700 ">OWN ON DIGITAL</button>
                </div>
                <div>
                    <img className="object-contain w-[18vw]" src="./imgintro/pro.png" />
                </div>
            </div>
            <div className="flex items-end basis-1/2 bg-blue-800 p-8" >
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-lg text-white">HOW TO TRAIN YOUR<br/> DRAGON: THE HIDDEN WORLD</p>
                    <button className=" py-1 px-3 w-[80%] font-bold text-sm text-white border border-white">OWN ON DIGITAL</button>
                </div>
                <div>
                    <img className="object-contain w-[18vw]" src="./imgintro/pro2.png" />
                </div>
            </div>
        </div>
        
        </>
    )
}
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";


export default function Navbar(){
    
    const[show , setShow]=useState(false)
    const menu= () => {
        setShow(!show)
    }
    const[show1 , setShow1]=useState(false)
    const search= () => {
        setShow1(!show1)
    }
    const[res , setRes]=useState(false)
    const resbondsive = () => {
        setRes(!res)
    }
 
     const ref = useRef(null)
     const ref1 = useRef()
     const ref2 = useRef()
     const ref3 = useRef()
     const ref4 = useRef()
     const ref5 = useRef()
     const ref6 = useRef()

    const view = () =>{
            ref.current?.scrollIntoView();
    }
    return(
        <>
        <div className="flex z-10 fixed bg-white shadow-2xl w-full top-0 justify-between py-3 px-5 lg:p-0 items-center lg:items-stretch lg:flex-col gap-5 ">
        <div className="flex justify-between items-center lg:px-[100px] pt-2" >
            <div className="w-[30vw] md:w-[15vw] lg:w-[5vw] cursor-pointer font-semibold">
                <img  src="./img/logo.png" />
            </div>
            <div className="hidden lg:flex items-center gap-24">
                <div className="flex gap-5 cursor-pointer font-semibold">
                    <img src="./img/x.svg" />
                    <img src="./img/fb.svg" />
                    <img src="./img/you.svg" />
                    <img src="./img/in.svg" />
                    <img src="./img/tik.svg" /> 
                </div>
                
                <div className=" flex gap-2 flex-row-reverse cursor-pointer font-semibold">
                    <img className="w-[1.5vw]" onClick={search} src="./img/search.png"/>
                    <div className="">
                    {show1 && (
                        <>
                        <div className=" transition-all ease-in duration-300 border-b border-blue-400">
                            <input className="focus:outline-none  bg-transparent" type="search"></input>
                        </div>
                        </>
                    )}
                    </div>
                        
                </div>
                
                <div className="flex gap-3">
                    <p className="cursor-pointer font-semibold"><Link to="/movies">MOVIES</Link></p>
                    <p className="cursor-pointer font-semibold">TV</p>
                    <p className="cursor-pointer font-semibold">EXPLORE</p>
                </div>
                <div className="w-[1.5vw] cursor-pointer font-semibold">
                    {show ? <img className="object-cover " onClick={menu} src="./img/close.png"/> : <img className="object-cover" onClick={menu} src="./img/menu.png"/> }
                </div>
                
            </div>
            
        </div>
        
        <div className="bg-blue-800 items-center z-50 hidden lg:flex justify-between px-[50px] xl:px-[100px] relative ">
            <div>
                <h3 className="text-white font-bold whitespace-nowrap">HOW TO TRAIN YOUR DRAGON </h3>
            </div>
            <div className="flex text-white gap-8">
                
                    <p onClick={view} className="cursor-pointer font-semibold hover:text-blue-800 hover:bg-white transition ease-in duration-300 py-1 whitespace-nowrap">ABOUT</p>
                
                    <p className="cursor-pointer font-semibold hover:text-blue-800 hover:bg-white transition ease-in duration-300 py-1 whitespace-nowrap">MOVIES</p>
                
                    <p className="cursor-pointer font-semibold hover:text-blue-800 hover:bg-white transition ease-in duration-300 py-1 whitespace-nowrap">TV SHOWS</p>
                
                    <p className="cursor-pointer font-semibold hover:text-blue-800 hover:bg-white transition ease-in duration-300 py-1 whitespace-nowrap">GAMES</p>

                    <p className="cursor-pointer font-semibold hover:text-blue-800 hover:bg-white transition ease-in duration-300 py-1 whitespace-nowrap">EXPOLER</p>

                    <p className="cursor-pointer font-semibold hover:text-blue-800 hover:bg-white transition ease-in duration-300 py-1 whitespace-nowrap">GALLERY</p>

                    <p className="cursor-pointer font-semibold hover:text-blue-800 hover:bg-white transition ease-in duration-300 py-1 whitespace-nowrap">SING UP</p>

            </div>
        </div>
        {show && (
                    <>
                    <div className="absolute top-[70%] w-full bg-blue-800 left-0 text-white justify-center gap-10 text-2xl py-10  flex">
                        <h1 className="transition ease-in duration-300 hover:text-blue-400 cursor-pointer">ABOUT</h1>
                        <h1 className="transition ease-in duration-300 hover:text-blue-400 cursor-pointer">CAREERS</h1>
                        <h1 className="transition ease-in duration-300 hover:text-blue-400 cursor-pointer">CULTURE</h1>
                        <h1 className="transition ease-in duration-300 hover:text-blue-400 cursor-pointer">CLASSICS</h1>
                        <h1 className="transition ease-in duration-300 hover:text-blue-400 cursor-pointer">DEI</h1>
                    </div>
                    </>
                ) }
                    <div className="lg:hidden">
                        <div className=" cursor-pointer font-semibold w-[10vw] md:w-[5vw]">
                                    {res ? <img onClick={resbondsive} src="./img/close.png"/> : <img onClick={resbondsive} src="./img/menu.png"/> }
                        </div>
                        
                        {res && (
                            <>
                            <div>adadadad</div>
                            </>
                        )}
                    </div>
        </div>
     
        </>
    )
}
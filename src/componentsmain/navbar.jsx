import { Link } from "react-router-dom";
import React, { useState } from "react";

import { Links, Element } from 'react-scroll';
import Subscrap from "../cmponetsMovies/subscrab";
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
 
    let pervscroopos = 0;
    window.onscroll=function() {
        let currentscrollpos = window.pageYOffset;
        
        if(pervscroopos > currentscrollpos){
            document.querySelector(".subsbcriber").style.top = "2.9vw";

        }else{
            document.querySelector(".subsbcriber").style.top = "-10%";
        }
        pervscroopos=currentscrollpos;
    }

    return(
        <>
        <div className="fixed top-0 z-40  ">
            <div className="flex relative justify-between items-center bg-white shadow-2xl w-screen px-5 py-3 lg:p-0  lg:items-stretch lg:flex-col gap-5 ">
                <div className="fixed  subsbcriber top-[2.9vw]  right-[10%] transition-all  duration-7000">
                {/* <Subscrap /> */}
                </div>
            <div className="flex z-40 justify-between items-center  xl:px-[100px] py-3 lg:px-5" >
                <div className="w-[15vw] lg:w-[5vw] lg:w-[5vw] cursor-pointer font-semibold">
                    <img src="./img/logo.png" />
                    
                </div>
                
                <div className="hidden lg:flex items-center gap-24">
                    <div className="flex gap-5 cursor-pointer font-semibold">
                        <img src="./img/x.svg" />
                        <img src="./img/fb.svg" />
                        <img src="./img/you.svg" />
                        <img src="./img/in.svg" />
                        <img src="./img/tik.svg" /> 
                    </div>
                    
                    <div className=" flex gap-2 flex-row-reverse  cursor-pointer font-semibold">
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
                    
                </div>

                    <div className="w-[1.5vw] lg:block hidden cursor-pointer font-semibold">
                        {show ? <img onClick={menu} src="./img/close.png"/> : <img onClick={menu} src="./img/menu.png"/> }
                    </div>
                    
                    
            </div>
            <div className="lg:hidden ">
                        <div className=" cursor-pointer font-semibold w-[5vw]">
                                    {res ? <img onClick={resbondsive} src="./img/close.png"/> : <img onClick={resbondsive} src="./img/menu.png"/> }
                        </div>
                        
                        {res && (
                            <>
                            <div>adadadad</div>
                            </>
                        )}
                    </div>
       </div>
       

       </div>
        </>
    )
}
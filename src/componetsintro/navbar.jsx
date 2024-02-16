import { Link } from "react-router-dom";
import React, { useState,useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import DragHandleIcon from '@mui/icons-material/DragHandle';import { Links, Element } from 'react-scroll';
import CloseIcon from '@mui/icons-material/Close';
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
        if( currentscrollpos === 0){
            setHover(false)
           
        }else{
            setHover(true)
            
        }
        pervscroopos=currentscrollpos;
    }
    const[hover , setHover] = useState()
    return(
        <>
        <div className={`${hover ? "hover:translate-y-12 top-[-5%] bg-blue-800" :"hover:translate-y-0 top-0 bg-transparent"} flex transition-all duration-5000 ease-in fixed nav z-10  w-full  justify-between py-3 px-5 lg:p-0 items-center lg:items-stretch lg:flex-col gap-5 pt-10 hover:bg-blue-800 `}>
        <div className="flex justify-between items-center lg:px-[100px]" >
            <div className="w-[30vw] py-2 lg:w-[5vw] cursor-pointer font-semibold">
                <img src="./img/logo1.png" />
            </div>
            <div className="hidden lg:flex items-center gap-24">
                <div className="flex gap-5 cursor-pointer font-semibold items-center">
                    <img className="lg:h-[3vw] lg:w-[1.2vw] h-[20vw] w-[10vw] object-cover " src="./img/x1.png"/>
                    <img className="lg:h-[2vw] w-[10vw] lg:w-[1.4vw] object-contain" src="./img/facebooklogo.png"/>
                    <img className="lg:h-[2vw] w-[10vw] lg:w-[1.4vw] object-contain" src="./img/youtubelogo.png"/>
                    <img className="lg:h-[2vw] w-[10vw] lg:w-[1.4vw] object-contain" src="./img/instagramlogo.png"/>
                    <img className="lg:h-[2vw] w-[10vw] lg:w-[1.4vw] object-contain" src="./img/tiktoklogo.png"/>
                </div>
                
                <div className=" flex gap-2 flex-row-reverse cursor-pointer font-semibold">
                    <div onClick={search} className="text-white"><SearchIcon/></div>
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
                
                <div className="flex gap-3 text-white">
                    <p className="cursor-pointer font-semibold"><Link to="/movies">MOVIES</Link></p>
                    <p className="cursor-pointer font-semibold">TV</p>
                    <p className="cursor-pointer font-semibold">EXPLORE</p>
                </div>
                <div className="w-[1.5vw] cursor-pointer font-semibold">
                    {show ? <div onClick={menu} className="text-white">< CloseIcon fontSize="large"/></div> : <div onClick={menu} className="text-white"><DragHandleIcon fontSize="large"/></div> }
                </div>
                
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
                        <div className=" cursor-pointer font-semibold w-[10vw]">
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
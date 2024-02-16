import React, { useEffect, useState } from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Navbar from "../componetsintro/navbar";
import Header from "../componetsintro/header";
import Products from "../componetsintro/products";
import About from "../componetsintro/about";
import Gallery from "../componetsintro/gallery";
import Related from "../componetsintro/Related";
import Signup from "../componetsintro/sign";
import Footer from "../componets/footer"

export default function Intro(){
    const [add ,setAdd] = useState(0)
    const [scroll_position , setscroll_position] = useState()
    const [isDisabled, setIsDisabled] = useState(false);


  
    
    useEffect(()=>{
        
        window.addEventListener("wheel",(event)=>{
            
            if(event.deltaY > 0){
            setAdd( add + 1 )
            
            if(add===6){
            setAdd(add === 6 && 6)
            }}
            else if (event.deltaY < 0) {
                setAdd( add - 1 )
            if(add===0){
            setAdd(add === 0 ? 0 :0)
            }}
            
            if (!isDisabled) {
                setIsDisabled(true);
                setAdd(add + 1);
                setTimeout(() => {
                  setIsDisabled(false);
                }, 2000);
              }
            console.log(window.scrollY);
        })
        
    },[add])
    useEffect(()=>{ 
        if (add ==0){
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
        if (add == 1){
            window.scrollTo({ top: 570, behavior: "smooth" })
        }
        if (add == 2){
            window.scrollTo({ top: 1530, behavior: "smooth" })
        }
        if (add == 3){
            window.scrollTo({ top: 2510, behavior: "smooth" })
        }
        if (add == 4){
            window.scrollTo({ top: 3020, behavior: "smooth" })
        }
        if (add == 5){
            window.scrollTo({ top: 3480, behavior: "smooth" })
        }
        if (add == 6){
            window.scrollTo({ top: 4000, behavior: "smooth" })
        }
    } , [add])
    console.log(add)
    return(
        <>
        <Navbar />
        <div className="min-h-screen overflow-hidden ">
        <div onClick={()=>setAdd(add ? 0 : 0)} className={add === 1? "" :""}>
        <Header  />
        </div>
        <div onClick={()=>setAdd(add ? 1 : 1)}  className={add === 2 ? "" :""}>
        <Products />
        </div>
        <div onClick={()=>setAdd(add ? 2 : 2)}  className=" ">
        <About />
        </div>
        <div onClick={()=>setAdd(add ? 3 : 3)}  className=" ">
        <Gallery />
        </div>
        <div onClick={()=>setAdd(add ? 4 : 4)}  className=" ">
        <Related />
        </div>
        <div onClick={()=>setAdd(add ?5 : 5)}  className=" ">
        <Signup />
        </div>
        <div onClick={()=>setAdd(add ?6 : 6)}  className=" ">
        <Footer />
        </div>
        <div className="fixed top-[40%] left-[1%] flex flex-col z-10 text-gray-200 ">
            <div onClick={()=>setAdd(add === add ? 0 : 0)} className="cursor-pointer"><FiberManualRecordIcon fontSize="small" className={` ${add ===0 ? "text-red-600 scale-125 transition-all ease-in duration-5000" :"scale-50 transition-all ease-in duration-5000"}`} /></div>
            <div onClick={()=>setAdd(add === add ? 1 : 1)} className="cursor-pointer"><FiberManualRecordIcon fontSize="small" className={` ${add ===1 ? "text-red-600 scale-125 transition-all ease-in duration-5000" :"scale-50 transition-all ease-in duration-5000"}`}/></div>
            <div onClick={()=>setAdd(add === add ? 2 : 2)} className="cursor-pointer"><FiberManualRecordIcon fontSize="small" className={` ${add ===2 ? "text-red-600 scale-125 transition-all ease-in duration-5000" :"scale-50 transition-all ease-in duration-5000"}`}/></div>
            <div onClick={()=>setAdd(add === add ? 3 : 3)} className="cursor-pointer"><FiberManualRecordIcon fontSize="small" className={` ${add ===3 ? "text-red-600 scale-125 transition-all ease-in duration-5000" :"scale-50 transition-all ease-in duration-5000"}`}/></div>
            <div onClick={()=>setAdd(add === add ? 4 : 4)} className="cursor-pointer"><FiberManualRecordIcon fontSize="small" className={` ${add ===4 ? "text-red-600 scale-125 transition-all ease-in duration-5000" :"scale-50 transition-all ease-in duration-5000"}`}/></div>
            <div onClick={()=>setAdd(add === add ? 5 : 5)} className="cursor-pointer"><FiberManualRecordIcon fontSize="small" className={` ${add ===5 ? "text-red-600 scale-125 transition-all ease-in duration-5000" :"scale-50 transition-all ease-in duration-5000"}`}/></div>
            <div onClick={()=>setAdd(add === add ? 6 : 6)} className="cursor-pointer"><FiberManualRecordIcon fontSize="small" className={` ${add ===6 ? "text-red-600 scale-125 transition-all ease-in duration-5000" :"scale-50 transition-all ease-in duration-5000"}`}/></div>
        </div>
        </div>
        </>
    )
}
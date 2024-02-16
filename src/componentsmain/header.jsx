import React, { useState,useEffect } from "react";
import video from "../assets/panda.mp4"
import video1 from "../assets/trolls1.mp4"
import video2 from "../assets/ruby.mp4"
import video3 from "../assets/puss.mp4"
import video4 from "../assets/badguy.mp4"
import video5 from "../assets/spirit.mp4"
import Subscrap from "../cmponetsMovies/subscrab";
export default function Header(){
    const[Time,setTime]=useState(9000)

    const [videos,setVideos] = useState({
        panda:true,
        trolls : false,
        rubby:false,
        puss:false,
        badguy:false,
        spirit:false,
        
    })
    const handle0 = () =>{
        setVideos({...videos ,panda:true,
            trolls : false,
            rubby:false,
            puss:false,
            badguy:false,
            spirit:false,})
            setCounter(counter ? 0 :0)
            setTime(Time)
    }
    
    const handle1 = () =>{
        setVideos({...videos ,panda:false,
            trolls : true,
            rubby:false,
            puss:false,
            badguy:false,
            spirit:false,})
            setCounter(counter ? 1 :1)
            setTime(Time)

    }
    const handle2 = () =>{
        setVideos({...videos ,panda:false,
            trolls : false,
            rubby:true,
            puss:false,
            badguy:false,
            spirit:false,})
            setCounter(counter ? 2 :2)
            setTime(Time)

    }
    const handle3 = () =>{
        setVideos({...videos ,panda:false,
            trolls : false,
            rubby:false,
            puss:true,
            badguy:false,
            spirit:false,})
            setCounter(counter ? 3 :3)
            setTime(Time)

    }
    const handle4 = () =>{
        setVideos({...videos ,panda:false,
            trolls : false,
            rubby:false,
            puss:false,
            badguy:true,
            spirit:false,})
            setCounter(counter ? 4 :4)
            setTime(Time)

    }
    const handle5 = () =>{
        setVideos({...videos ,panda:false,
            trolls : false,
            rubby:false,
            puss:false,
            badguy:false,
            spirit:true,})
            setCounter(counter ? 5 :5)
            setTime(Time)

    }
    const [ counter , setCounter]= useState(0)
    const autoplay = [
        ()=>handle0(),
        ()=>handle1(),
        ()=>handle2(),
        ()=>handle3(),
        ()=>handle4(),
        ()=>handle5()
    ]
    useEffect(() => {
        const intervalId = setInterval(() => {
            autoplay[counter](); 
          setCounter((prevCounter) => (prevCounter + 1) % autoplay.length);
        }, Time); 
        return () => clearInterval(intervalId);
      }, [counter]);

    return(
        <> 
        
        <div className="flex mt-[4%] items-center relative overflow-hidden ">
        
        {videos.panda ? <><div className=" hidden lg:block z-[-1] ">
                            <video className=" w-screen" src={video}  autoPlay loop muted />
                        </div>
                        <div className="block lg:hidden">
                            <img className="h-[80vh] w-screen object-cover" src="./imgmain/OATD_Hero_Mobile.jpg" />
                        </div>
                        </>
                        :
                        <></>
        }
        {videos.trolls ? <>
            <div className=" hidden lg:block z-[-1] ">
                            <video className=" w-screen" src={video1}  autoPlay loop muted />
                        </div>
                        <div className="block lg:hidden">
                            <img className="h-[80vh] w-screen object-cover" src="./imgmain/kung-fu-panda-4-hero-image-mobile3.jpg" />
                        </div>
                        </>
                        :
                        <></>}
        {videos.rubby ? <>
            <div className=" hidden lg:block z-[-1] ">
                            <video className=" w-screen" src={video2}  autoPlay loop muted />
                        </div>
                        <div className="block lg:hidden">
                            <img className="h-[80vh] w-screen object-cover" src="./imgmain/trolls-3-hero-mobile-1.jpg" />
                        </div></>
                        :
                        <></>}
        {videos.puss ? <>
            <div className=" hidden lg:block z-[-1] ">
                            <video className=" w-screen" src={video3}  autoPlay loop muted />
                        </div>
                        <div className="block lg:hidden">
                            <img className="h-[80vh] w-screen object-cover" src="./imgmain/GAB_S8B_Hero_Mobile.jpg" />
                        </div>
                        </>
                        :
                        <></>}
        {videos.badguy ? <>
            <div className=" hidden lg:block z-[-1] ">
                            <video className=" w-screen" src={video4}  autoPlay loop muted />
                        </div>
                        <div className="block lg:hidden">
                            <img className="h-[80vh] w-screen object-cover" src="./imgmain/NQN_S2_Hero_Mobile.jpg" />
                        </div>
                        </>
                        :
                        <></>}
        {videos.spirit ? <>
            <div className=" hidden lg:block z-[-1] ">
                            <video className=" w-screen" src={video5}  autoPlay loop muted />
                        </div>
                        <div className="block lg:hidden">
                            <img className="h-[80vh] w-screen object-cover" src="./img/dragon.jpg" />
                        </div>
        </>:
        <></>}
        
        {videos.panda ? <div className="absolute flex flex-col ml-[8%] top-[70%] lg:top-[20%]">
                        <div className="xl:text-[30px] text-white">
                            <p>IN THEATERS MARCH 8, 2024</p>
                        </div>
                        <div className="text-white xl:text-[60px] lg:w-[30vw] font-extrabold">
                            <p>KUNG FU PANDA<br/> 4</p>
                        </div>
                        <div className="flex gap-5">
                            <button className="border py-2 px-7 lg:px-9 text-white font-semibold lg:font-bold text-[10px] lg:text-sm hover:text-blue-500 hover:bg-white transition-all ease-in-out duration-500">OFFICIAL SITE</button>
                            <button className="border py-2 px-7 lg:px-9 text-white font-semibold lg:font-bold text-[10px] lg:text-sm hover:text-blue-500 hover:bg-white transition-all ease-in-out duration-500">WATCH VIDEO</button>
                        </div>
                    </div>
        :<></>}
        {videos.trolls ?
                    <div className="absolute flex flex-col ml-[8%] top-[70%] lg:top-[30%]">
                        <div className="xl:text-[22px] text-white">
                            <p>AVAILABLE NOW ON
                            DIGITAL, 4K UHD, BLU-RAY & DVD</p>
                        </div>
                        <div className="text-white xl:text-[60px] xl:w-[40vw] font-extrabold">
                            <p>TROLLS BAND TOGETHAR</p>
                        </div>
                        <div className="flex gap-5">
                            <button className="border py-2 px-7 lg:px-9 text-white font-semibold lg:font-bold text-[10px] lg:text-sm hover:text-blue-500 hover:bg-white transition-all ease-in-out duration-500">OFFICIAL SITE</button>
                            <button className="border py-2 px-7 lg:px-9 text-white font-semibold lg:font-bold text-[10px] lg:text-sm hover:text-blue-500 hover:bg-white transition-all ease-in-out duration-500">WATCH VIDEO</button>
                        </div>
                    </div> :
                    <></>}
                    {videos.rubby ?
                    <div className="absolute flex flex-col ml-[8%] top-[70%] lg:top-[30%]">
                        <div className="xl:text-[25px] text-white">
                            <p>AVAILABLE NOW ONDIGITAL, BLU-RAY & DVD</p>
                        </div>
                        <div className="text-white xl:text-[60px] xl:w-[40vw] font-extrabold">
                            <p>RUBBY GILLMAN TEENAGE KARAKEN</p>
                        </div>
                        <div className="flex gap-5">
                            <button className="border py-2 px-7 lg:px-9 text-white font-semibold lg:font-bold text-[10px] lg:text-sm hover:text-blue-500 hover:bg-white transition-all ease-in-out duration-500">OFFICIAL SITE</button>
                            <button className="border py-2 px-7 lg:px-9 text-white font-semibold lg:font-bold text-[10px] lg:text-sm hover:text-blue-500 hover:bg-white transition-all ease-in-out duration-500">WATCH VIDEO</button>
                        </div>
                    </div> :
                    <></>}
                    {videos.puss ?
                    <div className="absolute flex flex-col ml-[8%] top-[70%] lg:top-[30%]">
                        <div className="xl:text-[25px] text-white">
                            <p>AVAILABLE NOW DIGITAL, 4K UHD, BLU-RAY & DVD</p>
                        </div>
                        <div className="text-white xl:text-[60px] xl:w-[40vw] font-extrabold">
                            <p>PUSS IN BOOTS: THE LAST WISH</p>
                        </div>
                        <div className="flex gap-5">
                            <button className="border py-2 px-7 lg:px-9 text-white font-semibold lg:font-bold text-[10px] lg:text-sm hover:text-blue-500 hover:bg-white transition-all ease-in-out duration-500">OFFICIAL SITE</button>
                            <button className="border py-2 px-7 lg:px-9 text-white font-semibold lg:font-bold text-[10px] lg:text-sm hover:text-blue-500 hover:bg-white transition-all ease-in-out duration-500">WATCH VIDEO</button>
                        </div>
                    </div> :
                    <></>}
                    {videos.badguy ?
                    <div className="absolute flex flex-col ml-[8%] top-[70%] lg:top-[30%]">
                        <div className="xl:text-[25px] text-white">
                            <p>AVAILABLE NOW ON DIGITAL, 4K UHD, BLU-RAY & DVD</p>
                        </div>
                        <div className="text-white xl:text-[60px] xl:w-[40vw] font-extrabold">
                            <p>THE BAD GUYS</p>
                        </div>
                        <div className="flex gap-5">
                            <button className="border py-2 px-7 lg:px-9 text-white font-semibold lg:font-bold text-[10px] lg:text-sm hover:text-blue-500 hover:bg-white transition-all ease-in-out duration-500">OFFICIAL SITE</button>
                            <button className="border py-2 px-7 lg:px-9 text-white font-semibold lg:font-bold text-[10px] lg:text-sm hover:text-blue-500 hover:bg-white transition-all ease-in-out duration-500">WATCH VIDEO</button>
                        </div>
                    </div> :
                    <></>}
                    {videos.spirit ?
                    <div className="absolute flex flex-col ml-[8%] top-[70%] lg:top-[30%]">
                        <div className="xl:text-[25px] text-white">
                            <p>
                            AVAILABLE NOW
                            BLU-RAY, DVD, DIGITAL
                            & ON DEMAND</p>
                        </div>
                        <div className="text-white xl:text-[60px] xl:w-[40vw] font-extrabold">
                            <p>SPIRIT UNTAMED</p>
                        </div>
                        <div className="flex gap-5">
                            <button className="border py-2 px-7 lg:px-9 text-white font-semibold lg:font-bold text-[10px] lg:text-sm hover:text-blue-500 hover:bg-white transition-all ease-in-out duration-500">OFFICIAL SITE</button>
                            <button className="border py-2 px-7 lg:px-9 text-white font-semibold lg:font-bold text-[10px] lg:text-sm hover:text-blue-500 hover:bg-white transition-all ease-in-out duration-500">WATCH VIDEO</button>
                        </div>
                    </div> :
                    <></>}

                    <div className="absolute text-white top-[94%] hidden lg:top-[85%] 2xl:top-[90%] lg:left-[15%] left-[5%] items-end lg:flex">
                        <p onClick={handle0} className={videos.panda ? "  font-bold text-[12px] w-[11vw] border-b-2 text-center border-blue-600 text-white mt-3" : "cursor-pointer border-b-2 border-white text-gray-300 text-center  font-bold text-[12px] mt-3 w-[11vw] hidden lg:block"}>KUNG FU PANDA 4</p>
                        <p onClick={handle1} className={videos.trolls ? "  font-bold text-[12px] w-[11vw] border-b-2 text-center border-blue-600 text-white mt-3" : "cursor-pointer border-b-2 border-white text-gray-300 text-center  font-bold text-[12px] mt-3 w-[11vw] hidden lg:block"}>TROLLS BAND TOGETHAR</p>
                        <p onClick={handle2} className={videos.rubby ? "  font-bold text-[12px] w-[11vw] border-b-2 text-center border-blue-600 text-white mt-3" : "cursor-pointer border-b-2 border-white text-gray-300 text-center  font-bold text-[12px] mt-3 w-[11vw] hidden lg:block"}>RUBBY GILLMAN TEENAGE KARAKEN</p>
                        <p onClick={handle3} className={videos.puss ? "  font-bold text-[12px] w-[11vw] border-b-2 text-center border-blue-600 text-white mt-3" : "cursor-pointer border-b-2 border-white text-gray-300 text-center  font-bold text-[12px] mt-3 w-[11vw] hidden lg:block"}>PUSS IN BOOTS: THE LAST WISH</p>
                        <p onClick={handle4} className={videos.badguy ? "  font-bold text-[12px] w-[11vw] border-b-2 text-center border-blue-600 text-white mt-3" : "cursor-pointer border-b-2 border-white text-gray-300 text-center  font-bold text-[12px] mt-3 w-[11vw] hidden lg:block"}>THE BAD GUYS</p>
                        <p onClick={handle5} className={videos.spirit ? "  font-bold text-[12px] w-[11vw] border-b-2 text-center border-blue-600 text-white mt-3" : "cursor-pointer border-b-2 border-white text-gray-300 text-center  font-bold text-[12px] mt-3 w-[11vw] hidden lg:block"}>DRAGONS : THE NINE REALMS</p>
                    </div>
                    <div className="absolute text-white  flex top-[96%] lg:top-[91%] lg:left-[15%] left-[11%] items-end  lg:hidden">
                        <p onClick={handle0} className={videos.panda ? "  font-bold text-[12px] w-[13vw] border-b-2 text-center border-blue-600 text-white mt-3" : "cursor-pointer border-b-2 border-white text-gray-300 text-center  font-bold text-[12px] mt-3 w-[13vw] "}></p>
                        <p onClick={handle1} className={videos.trolls ? "  font-bold text-[12px] w-[13vw] border-b-2 text-center border-blue-600 text-white mt-3" : "cursor-pointer border-b-2 border-white text-gray-300 text-center  font-bold text-[12px] mt-3 w-[13vw] "}></p>
                        <p onClick={handle2} className={videos.rubby ? "  font-bold text-[12px] w-[13vw] border-b-2 text-center border-blue-600 text-white mt-3" : "cursor-pointer border-b-2 border-white text-gray-300 text-center  font-bold text-[12px] mt-3 w-[13vw] "}></p>
                        <p onClick={handle3} className={videos.puss ? "  font-bold text-[12px] w-[13vw] border-b-2 text-center border-blue-600 text-white mt-3" : "cursor-pointer border-b-2 border-white text-gray-300 text-center  font-bold text-[12px] mt-3 w-[13vw] "}></p>
                        <p onClick={handle4} className={videos.badguy ? "  font-bold text-[12px] w-[13vw] border-b-2 text-center border-blue-600 text-white mt-3" : "cursor-pointer border-b-2 border-white text-gray-300 text-center  font-bold text-[12px] mt-3 w-[13vw] "}></p>
                        <p onClick={handle5} className={videos.spirit ? "  font-bold text-[12px] w-[13vw] border-b-2 text-center border-blue-600 text-white mt-3" : "cursor-pointer border-b-2 border-white text-gray-300 text-center  font-bold text-[12px] mt-3 w-[13vw] "}></p>
                    </div>
                    </div>
        
        
        
        </>
    )
    
}
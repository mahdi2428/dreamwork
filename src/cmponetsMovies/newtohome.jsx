import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Newtohome(){
    const data =[{
        img:"./img2/trolls.jpg",
        text: "TROLLS BAND TOGETHER",
        text2 : "AVAILABLE NOW ON DIGITAL,4K UHD,BLU-RAY & DVD"
    },
    {
        img:"./img2/rgtk-poster.jpg",
        text: "RUBY GILLMAN, TEENAGE KARKEN",
        text2 : "AVAILABLE NOW ON DIGITAL,4K UHD,BLU-RAY & DVD"
    }]
    return(
        <>
        <div className="lg:mx-32 mx-2 mb-10">
            <div className="text-blue-900 font-bold text-2xl my-10">
                <p >NEW TO HOME ENTERTAINMENT</p>
            </div>
            <ScrollContainer
             className="flex gap-5  overflow-hidden"
             
            >
                {data.map((items)=>(
                    <>
                        <div  style={{backgroundImage : `url(${items.img})`}}
                        className="relative lg:h-[540px] lg:w-[355px]  h-[320px] w-[220px] bg-no-repeat shrink-0 transform flex justify-end flex-col  bg-cover group transition ease-in duration-1000  ">
                            <div className="hidden backdrop-blur text-white transition ease-in duration-1000  font-semibold text-xl w-full h-full group-hover: group-hover:block">
                                <p className="flex transition ease-in duration-1000   items-center mt-[70%] justify-center ">SEE MORE</p>
                            </div>
                            <div className="transition ease-in duration-1000 z-10  py-2 group-hover:hidden  px-1">
                            
                                <p className="text-white font-bold ">{items.text}</p>
                                <p className="text-white font-semibold ">{items.text2}</p>
                            </div>
                           <span className="bg-gradient-to-t from-black  opacity-75 h-20 w-full absolute left-0 buttom-0">  
                            </span>
                        </div>
                    </>
                ))}
            </ScrollContainer>
        </div>
        </>
    )
}
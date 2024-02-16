import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Tv(){
    const data = [
        {
            img: "./img/tv.jpg",
            text:"DRAGONS : THE NINE REALMS",
            text2:"NEW EPISODES NOS STREAMING ON HULU AND PEACOVK",
        },
        {
            img: "./img/tv2.jpg",
            text:"DRAGONS: RACE TO THE EDGE",
            text2:"NOW STREAMING ON NETFLIX",
        },
        {
            img: "./img/tv3.jpg",
            text:"HOW TO TRAIN YOUR DRAGON HOMECOMING",
            text2:"ON BLU-RAY, DVD & DIGITAL",
        }
    ]
    return(
        <>
        <div className="lg:mx-32 mx-2 mb-10">
            <div className="text-blue-900 font-bold text-2xl my-10">
                <p >TV SHOWES</p>
            </div>
            <ScrollContainer className="flex gap-5">
                {data.map((items)=>(
                    <>
                        <div style={{backgroundImage : `url(${items.img})`}}
                        className="lg:h-[550px] lg:w-[400px] h-[320px] w-[220px] shrink-0 transform flex justify-end flex-col  bg-cover group transition ease-in duration-1000  ">
                            <div className="hidden backdrop-blur text-white transition ease-in duration-1000  font-semibold text-xl w-full h-full group-hover: group-hover:block">
                                <p className="flex transition ease-in duration-1000   items-center mt-[70%] justify-center ">SEE MORE</p>
                            </div>
                            <div className="transition ease-in duration-1000   py-2 group-hover:hidden  px-1">
                                <p className="text-white  font-bold">{items.text}</p>
                                <p className="text-white font-semibold">{items.text2}</p>
                            </div>
                           
                        </div>
                    </>
                ))}
            </ScrollContainer>
        </div>
        </>
    )
}
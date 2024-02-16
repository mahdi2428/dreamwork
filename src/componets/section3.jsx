import React from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import img from "../assets/hiccop.jpg"
export default function Section(){
    return(
        <>
            <div className="flex lg:flex-row flex-col flex-col-reverse">
                <div className="basis-1/2 flex gap-5 flex-col justify-center px-10 pt-10 lg:pt-0 lg:px-20">
                    <h3 className="text-blue-900  text-xl font-bold hidden lg:block">
                    WELCOME TO BERK
                    </h3>
                    <p className="text-blue-800 ">
                    "Life here is amazing. Dragons used to be a bit of a problem, but now they’ve all moved in."
                    </p>
                    <p className="text-blue-800">
                    The official site for How To Train Your Dragon and Dreamworks Dragons. Watch trailers, clips and videos, play games, explore the world and discover dragons! "Fire up" your favorite stuff to help others find the hottest content and check back regularly for fresh updates.
                    </p>
                    <div className="flex gap-3 ">
                        <span className="font-bold text-blue-800">#httydragon</span>
                        <div className="text-blue-800 hover:text-blue-400 cursor-pointer"><FacebookRoundedIcon /></div>
                        <div className="text-blue-800 hover:text-blue-400 cursor-pointer"><InstagramIcon /></div>
                    </div>
                </div>
                <div className="hidden lg:block basis-1/2">
                    <img className="h-[800px] w-full object-cover" src="./img/hiccop.jpg" />
                </div>
                <div className=" h-52 bg-center flex bg-cover" style={{
                    backgroundImage : `url(${img})`
                }}>
                    <h3 className="text-white pt-5 pl-5 text-xl font-bold  lg:hidden">
                    WELCOME TO BERK
                    </h3>
                </div>
            </div>
        </>
    )
}
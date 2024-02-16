import React from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function About(){
    return(
        <>
        <div className="flex">
            <div className="basis-1/2 bg-blue-900 flex flex-col justify-center gap-5 px-60">
                <p className="text-white font-extrabold text-xl">ABOUT</p>
                <p className="text-white">From DreamWorks Animation comes a surprising tale about growing up, finding the courage to face the unknown... and how nothing can ever train you to let go. What began as an unlikely friendship between an adolescent Viking and a fearsome Night Fury dragon has become an epic adventure spanning their lives.</p>
                <div className="flex gap-3 text-white">
                        <span className="font-bold text-white">#httydragon</span>
                        <div className="text-white hover:text-blue-400 cursor-pointer"><FacebookRoundedIcon /></div>
                        <div className="text-white hover:text-blue-400 cursor-pointer"><InstagramIcon /></div>
                </div>
                <p className="text-white">Cast:<br/>
                    Jay Baruchel (Hiccup)<br/>
                    America Ferrera (Astrid)<br/>
                    Cate Blanchett (Valka)<br/>
                    Gerard Butler (Stoick the Vast)<br/>
                    Craig Ferguson (Gobber)<br/>
                    Jonah Hill (Snotlout)<br/>
                    Kirsten Wiig (Ruffnut)<br/>
                    Justin Rupple (Tuffnut)<br/>
                    Kit Harington (Eret)<br/>
                    Christopher Mintz-Plasse (Fishlegs)<br/>
                </p>
                <p className="text-white">
                    Crew:<br/>
                    Dean DeBlois (Director)<br/>
                    Brad Lewis (Producer)<br/>
                    Bonnie Arnold (Producer)<br/>
                    John Powers Middleton (Executive Producer)<br/>
                    John Powell (Music)<br/>
                    Chris Sanders (Executive Producer)<br/>
                </p>
                <p className="text-white">
                On Blu-Ray, DVD & Digital<br/>
                </p>
                <p className="text-white">
                    2019<br/>
                    101 Minutes<br/>
                </p>
            </div>
            <div className="basis-1/2">
                <img src="./imgintro/about.jpg" />
            </div>
        </div>
        </>
    )
}
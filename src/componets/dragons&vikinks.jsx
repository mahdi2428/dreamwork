import React, { useState } from "react";
import img2 from "../assets/bgdragon.jpg"
import img1 from "../assets/vikinks.jpg"
import ScrollContainer from "react-indiana-drag-scroll";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Dragonsandvikinks(){
    const dragonnames = [
        "TOOTHLESS",
        "MEATLUG",
        "LIGHT FURY",
        "HOOKFANG",
        "GRUMP",
        "BARF & BLECH",
        "STORMFLY",
        "SKULLCRUSHER",
        "CLOUDJUMPER",       
    ]
    const des = [
        "Once thought of as the “unholy offspring of lightning and death itself,” Toothless (20 in dragon years) has proven to be much more of a giant, winged pussycat than the stuff of nightmares.",
        "Unlike other Gronckles, Meatlug is actually a very sweet and affectionate dragon, especially with her rider, Fishlegs.",
        "The Light Fury moves as fast as Toothless and shares his ability to blend into the sky – even during daylight hours.",
        "Hookfang and Snotlout have a... complicated relationship.",
        "Grump is not a Gronckle. He's a related, but different breed of Boulder Class dragon known as a Hotburple.",
        "Much like the twins who ride them, Barf & Belch spend more time bickering than working in concert.",
        "Although she preens and grooms herself like the most fastidious of birds, Stormfly actually possesses a playful spirit.",
        "From the Rumblehorn species, Skullcrusher is part of a previously undiscovered class -- tracker class, being that he's the bloodhound of dragons.",
        "The owl-like Cloudjumper has been Valka's companion of choice for flying and rescuing other dragons over the last twenty years. Cloudjumper's pride, confidence, and large size lead him to think of himself as the top dragon in Valka's mountain fortress, second only to the Bewilderbeast, who is the king of all dragons in the nest.",
    ]
    const vikingsdragonnamess = [
        "HICCUP",
        "ASTRID",
        "FISHLEGS",
        "RUFFNUT",
        "TUFFNUT",
        "SNOTLOUT",
        "STOICK",
        "VALKA",
        "GOBBER",
        "ERET",       
    ]
    const des1 = [
        "Hiccup, now 20, is the tenacious, spirited son of Stoick the Vast, chieftain of Berk. No longer a runt, but still lanky by comparison, Hiccup is the island’s ace flier and resident dragon expert.",
        "Astrid, 20, is the self-assured, competitive champion of the Dragon Races and Hiccup’s longtime girlfriend. Beautiful despite herself, she’s tough and rational, providing Hiccup with a blunt voice of reason while remaining his most outspoken supporter.",
        "Resident dragon nerd and statistics guru, Fishlegs, 19, is a skittish and lovable oaf who seems to only get bigger with age. He’s a timid sort, reluctant to break or even bend rules, preferring instead to play it safe.",
        "Ruffnut, 19, is the crass, conniving sister half of the notorious twin duo. Much like her brother, Tuffnut, she delights in all things dangerous and against the rules.",
        "Tuffnut, 19, is one half of the bickering, unkempt brother-sister twins known as Ruff & Tuff. Though slow on the uptake, Tuffnut is brazen and fearless – making him a dangerous combination in any scenario.",
        "Cocky and smug, Snotlout, 20, is a hero in his own mind, always carrying himself with the utmost bravado, despite having emerged from puberty as the shortest, squattest Viking of the gang.",
        "Stoick, 50, is the mythic and mighty Chieftain of Berk – a great, shaggy mountain of a man whose conquests have become the stuff of Viking legend.",
        "Valka is Hiccup's long-lost mother and Stoick's wife who was abducted in a dragon attack twenty years ago.",
        "Gobber, 55, is Stoick's crass, opinionated friend and trusty right hand man. In five years, he's gone from village blacksmith, forging weapons for dragon slaying, to building saddles for riding them. He even performs dragon dentistry!",
        "Eret, Son of Eret, 25, is the self touted 'Greatest Dragon Trapper Alive, ' selling a steady supply of dragons to the toughest customer of all--the ruthless Drago Bludvist",
    ]
    const dragonprofile = [
        "./img/profile.png",
        "./img/profile2.png",
        "./img/profile3.png",
        "./img/profile4.png",
        "./img/profile5.png",
        "./img/profile6.png",
        "./img/profile7.png",
        "./img/profile8.jpg",
        "./img/profile1.jpg",

    ]
   
    const vikingprofile = [
        
        "./img/1.jpg",
        "./img/2.jpg",
        "./img/3.jpg",
        "./img/4.jpg",
        "./img/5.jpg",
        "./img/7.jpg",
        "./img/8.jpg",
        "./img/9.jpg",
        "./img/10.jpg",
        "./img/11.jpg",

    ]
    const dragonimg = [
        "./img/dragon-hero.png",
        "./img/dragon-hero (5).png",
        "./img/dragon-hero (8).png",
        "./img/dragon-hero (4).png",
        "./img/dragon-hero (3).png",
        "./img/dragon-hero (2).png",
        "./img/dragon-hero (1).png",
        "./img/dragon-hero (7).png",
        "./img/dragon-hero (6).png",
    ]
    const vikingimg = [
        "./img/viking-hero.png",
        "./img/viking-hero (1).png",
        "./img/viking-hero (2).png",
        "./img/viking-hero (3).png",
        "./img/viking-hero (4).png",
        "./img/viking-hero (5).png",
        "./img/viking-hero (6).png",
        "./img/viking-hero (7).png",
        "./img/viking-hero (8).png",
        "./img/viking-hero (9).png",
    ]
    const[clas,setclas] = useState(false)
    const clasdragonnames = ()=>{
        setclas(!clas)
    }
    const [change ,setChange] = useState(false)
    const changer = () =>{
        setChange(false)
    }
    
    const changer1 = () =>{
        setChange(true)
    }
    const [nex1 , setNex1] = useState(0)
    const [nex2 , setNex2] = useState(0)
    const next = () =>{
        setNex1(nex1===9 ? 0 : nex1+1)
        setNex2(nex2 === 8 ? 0 : nex2 +1)
    }
    const perv = () => {
        setNex1(nex1===0 ? 9 : nex1-1)
        setNex2(nex2 === 0 ? 8 : nex2 - 1)
        
    }
    const [choos , setChoos] = useState(0)
    const handlechang = () =>{
        setNex2( nex2 === nex2 ? 0 : 0 )
    }
    
    return(
        <>
        <div className="w-full flex lg:flex-row flex-col-reverse gap-[100px] lg:h-[900px] bg-cover lg:pl-[200px] " style={change ? {backgroundImage : `url(${img1})`} : {backgroundImage : `url(${img2})`}}>
            <div className="flex flex-col basis-4/12 lg:ml-[80px] mx-2 lg:mx-0 lg:w-[10%]">
                <div className="lg:basis-3/4  backdrop-blur-lg justify-center lg:p-10 flex flex-col gap-48" >
                    <div className="hidden lg:block text-2xl text-blue-900 font-bold ">
                        <p> EXPLORE </p>
                    </div>
                    <div className="flex flex-col gap-6 ">
                       
                            {change ?
                            <>
                            <p className="text-blue-900 font-semibold ">{vikingsdragonnamess[nex1]}</p>
                            <p className="text-blue-800">{des1[nex1 ]} </p>
                            </>
                            :
                            <>
                            <p className="text-blue-900 font-semibold ">{dragonnames[nex2 ]}</p>
                            <p className="text-blue-800">{des[nex2]} </p>
                            </>
                            }
                            
                            <div className="flex gap-4 lg:flex-row flex-col items-center">
                                <button className="text-blue-900 font-semibold border border-blue-800 w-48 py-1 hover:text-white hover:bg-blue-800">VIEW CHARCTER</button>
                                <button className="text-blue-900 font-semibold border border-blue-800 w-48 py-1 hover:text-white hover:bg-blue-800">VIEW ALL</button>
                            </div>
                            
                        
                    </div>
                </div>
                <div className="pt-7 pb-20 pl-2 flex flex-col gap-7 shadow-2xl">
                    <div className="flex  justify-center px-2">
                        <button onClick={changer} className={change ? " text-blue-900 text-sm font-bold border-b border-blue-900 opacity-50 pr-2" : "pr-2 text-blue-900 text-sm font-bold border-b border-blue-900 " }>MEET THE DRAGONS</button>
                        <button onClick={changer1} className={change ? "text-blue-900 text-sm font-bold border-b border-blue-900 pl-2" : "pl-2 text-blue-900 text-sm font-bold border-b border-blue-900 opacity-50"}>MEET THE VIKINGS</button>
                    </div>
                    <ScrollContainer className={change ? "hidden" : " flex overflow-hidden gap-7"} >
                            
                            <div className="flex  items-center  trensition duration-300 gap-2">
                                <div onClick={()=> setNex2( nex2 === nex2 ? 0 : 0 )} className="flex flex-col group items-center cursor-pointer">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={dragonprofile[0]}/></div>
                                    <p className=" whitespace-nowrap text-sm text-blue-800 font-semibold group-hover:text-blue-400">{dragonnames[0]}</p>
                                </div>
                                <div onClick={()=> setNex2( nex2 === nex2 ? 1 : 1 )} className="flex flex-col items-center group cursor-pointer">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={dragonprofile[1]}/></div>
                                    <p className=" whitespace-nowrap text-sm text-blue-800 font-semibold group-hover:text-blue-400">{dragonnames[1]}</p>
                                </div>
                                <div onClick={()=> setNex2( nex2 === nex2 ? 2 : 2 )} className="flex flex-col items-center group cursor-pointer">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={dragonprofile[2]}/></div>
                                    <p className=" whitespace-nowrap text-sm text-blue-800 font-semibold group-hover:text-blue-400">{dragonnames[2]}</p>
                                </div>
                                <div onClick={()=> setNex2( nex2 === nex2 ? 3 : 3)} className="flex flex-col items-center group cursor-pointer">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={dragonprofile[3]}/></div>
                                    <p className=" whitespace-nowrap text-sm text-blue-800 font-semibold group-hover:text-blue-400">{dragonnames[3]}</p>
                                </div>
                                <div onClick={()=> setNex2( nex2 === nex2 ? 4: 4 )} className="flex flex-col items-center group cursor-pointer">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={dragonprofile[4]}/></div>
                                    <p className=" whitespace-nowrap text-sm text-blue-800 font-semibold group-hover:text-blue-400">{dragonnames[4]}</p>
                                </div>
                                <div onClick={()=> setNex2( nex2 === nex2 ? 5 : 5 )} className="flex flex-col items-center group cursor-pointer">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={dragonprofile[5]}/></div>
                                    <p className=" whitespace-nowrap text-sm text-blue-800 font-semibold group-hover:text-blue-400">{dragonnames[5]}</p>
                                </div>
                                <div onClick={()=> setNex2( nex2 === nex2 ? 6: 6 )} className="flex flex-col items-center group cursor-pointer">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={dragonprofile[6]}/></div>
                                    <p className=" whitespace-nowrap text-sm text-blue-800 font-semibold group-hover:text-blue-400">{dragonnames[6]}</p>
                                </div>
                                <div onClick={()=> setNex2( nex2 === nex2 ? 7 : 7 )} className="flex flex-col items-center group cursor-pointer">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={dragonprofile[7]}/></div>
                                    <p className=" whitespace-nowrap text-sm text-blue-800 font-semibold group-hover:text-blue-400">{dragonnames[7]}</p>
                                </div>
                                <div onClick={()=> setNex2( nex2 === nex2 ? 8 : 8 )} className="flex flex-col items-center group cursor-pointer">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={dragonprofile[8]}/></div>
                                    <p className=" whitespace-nowrap text-sm text-blue-800 font-semibold group-hover:text-blue-400">{dragonnames[8]}</p>
                                </div>
                            </div>    
                            
                            
                    </ScrollContainer>
                    <ScrollContainer className={change ? "flex overflow-hidden gap-7 trensition duration-300 " : "hidden "} >
                      
                            <div className="flex  items-center  cursor-pointer trensition duration-300 gap-2">
                                <div onClick={()=>setNex1 (nex1 === nex1 ? 0 : 0)} className="flex flex-col items-center group">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={vikingprofile[0]}/></div>
                                    <p className=" whitespace-nowrap text-xs text-blue-800 font-semibold group-hover:text-blue-400">{vikingsdragonnamess[0]}</p>
                                </div>
                                <div onClick={()=>setNex1 (nex1 === nex1 ? 1 : 1)} className="flex flex-col items-center group">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={vikingprofile[1]}/></div>
                                    <p className=" whitespace-nowrap text-xs text-blue-800 font-semibold group-hover:text-blue-400">{vikingsdragonnamess[1]}</p>
                                </div>
                                <div onClick={()=>setNex1 (nex1 === nex1 ? 2 : 2)} className="flex flex-col items-center group">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={vikingprofile[2]}/></div>
                                    <p className=" whitespace-nowrap text-xs text-blue-800 font-semibold group-hover:text-blue-400">{vikingsdragonnamess[2]}</p>
                                </div>
                                <div onClick={()=>setNex1 (nex1 === nex1 ? 3 : 3)} className="flex flex-col items-center group">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={vikingprofile[3]}/></div>
                                    <p className=" whitespace-nowrap text-xs text-blue-800 font-semibold group-hover:text-blue-400">{vikingsdragonnamess[3]}</p>
                                </div>
                                <div onClick={()=>setNex1 (nex1 === nex1 ? 4 : 4)} className="flex flex-col items-center group">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={vikingprofile[4]}/></div>
                                    <p className=" whitespace-nowrap text-xs text-blue-800 font-semibold group-hover:text-blue-400">{vikingsdragonnamess[4]}</p>
                                </div>
                                <div onClick={()=>setNex1 (nex1 === nex1 ? 5 : 5)} className="flex flex-col items-center group">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={vikingprofile[5]}/></div>
                                    <p className=" whitespace-nowrap text-xs text-blue-800 font-semibold group-hover:text-blue-400">{vikingsdragonnamess[5]}</p>
                                </div>
                                <div onClick={()=>setNex1 (nex1 === nex1 ? 6 : 6)} className="flex flex-col items-center group">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={vikingprofile[6]}/></div>
                                    <p className=" whitespace-nowrap text-xs text-blue-800 font-semibold group-hover:text-blue-400">{vikingsdragonnamess[6]}</p>
                                </div>
                                <div onClick={()=>setNex1 (nex1 === nex1 ? 7 : 7)} className="flex flex-col items-center group">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={vikingprofile[7]}/></div>
                                    <p className=" whitespace-nowrap text-xs text-blue-800 font-semibold group-hover:text-blue-400">{vikingsdragonnamess[7]}</p>
                                </div>
                                <div onClick={()=>setNex1 (nex1 === nex1 ? 8 : 8)} className="flex flex-col items-center group">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={vikingprofile[8]}/></div>
                                    <p className=" whitespace-nowrap text-xs text-blue-800 font-semibold group-hover:text-blue-400">{vikingsdragonnamess[8]}</p>
                                </div>
                                <div onClick={()=>setNex1 (nex1 === nex1 ? 9 : 9)} className="flex flex-col items-center group">
                                    <div className="h-[80px] w-[80px]"><img className="  object-cover rounded-full" src={vikingprofile[9]}/></div>
                                    <p className=" whitespace-nowrap text-xs text-blue-800 font-semibold group-hover:text-blue-400">{vikingsdragonnamess[9]}</p>
                                </div>
                            </div>    
                           
                    </ScrollContainer>      
                    
                </div>
            </div>
            <div className="basis-1/2  relative">
                    {change ? 
                    <>
                        <div className="text-white trensition duration-300 absolute top-[50%]">
                            <ArrowBackIosIcon onClick={perv} fontSize="large" />
                        </div>
                        <div className=" text-white trensition duration-300 absolute top-[50%] right-[0%]">
                            <ArrowForwardIosIcon onClick={next} fontSize="large"/>
                        </div>
                    </> : 
                    <>
                    <div className="text-white trensition duration-300 absolute top-[50%]">
                            <ArrowBackIosIcon onClick={perv} fontSize="large" />
                        </div>
                        <div className=" text-white trensition duration-300 absolute top-[50%] right-[0%]">
                            <ArrowForwardIosIcon onClick={next} fontSize="large"/>
                        </div>
                    </>}
                        
                        <div className="trensition duration-300">
                            <p className="block lg:hidden  ml-2 mt-2 text-2xl text-blue-900 font-bold">EXPOLOR</p>
                            {change ? <img  src={vikingimg[nex1  ]}/> : <img  src={dragonimg[nex2 ]}/> }
                        </div>    
            </div>
        </div>
        
        </>
    )
}
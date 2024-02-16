import React from "react"; 
import Header from '../componets/header';
import Section from '../componets/section3';
import Movies from '../componets/movies';
import Tv from '../componets/TV';
import Games from '../componets/games';
import Dragonsandvikinks from '../componets/dragons&vikinks';
import Gallery from '../componets/gallery';
import Related from '../componets/relaredproduct';
import Signup from '../componets/signup';
import Footer from "../componets/footer";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../componets/navbar";
import {ref,ref1,ref2,ref3,ref4,ref5,ref6} from "../componets/navbar"
export default function Home({ref,ref1,ref2,ref3,ref4,ref5,ref6}) {
    return(
        <>
        <Navbar />
        <Header />
        <div ref={ref}><Section /></div>
        <Movies /> 
        <Tv />
        <Games />
        <Dragonsandvikinks />
        <Gallery />
        <Related />
        <Signup />
        <Footer />
       
        
        </>
    )
}
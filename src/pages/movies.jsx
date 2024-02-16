import React from "react";
import Header from "../cmponetsMovies/header";
import Section from "../cmponetsMovies/section";
import Comingsoon from "../cmponetsMovies/comingsoon";
import Newtohome from "../cmponetsMovies/newtohome";
import Library from "../cmponetsMovies/library";
import Signup from "../cmponetsMovies/signup";
import Footer from "../componets/footer";
import Navbar from "../cmponetsMovies/navbar";

export default function Moviespage(){
    return(
        <>
        <Navbar />
        <Header />
        <Section />
        <Comingsoon />
        <Newtohome />
        <Library />
        <Signup />
        <Footer />
        
        </>
    )
}
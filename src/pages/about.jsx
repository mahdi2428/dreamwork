import React from "react";
import Navbar from "../componentsmain/navbar";
import Subscrap from "../cmponetsMovies/subscrab";
import Header from "../componentabout/header";
import Body from "../componentabout/body";
import Signup from "../cmponetsMovies/signup";
import Footer from "../componets/footer";

export default function Aboutus(){
    return(
        <>
        <Navbar />
        <Subscrap />
        <Header />
        <Body />
        <Signup />
        <Footer />
        </>
    )
}
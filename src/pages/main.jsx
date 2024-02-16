import React from "react";
import Navbar from "../componentsmain/navbar";
import Header from "../componentsmain/header";
import Movie from "../componentsmain/movie";
import Tvshows from "../componentsmain/tvs";
import About from "../componentsmain/about";
import Signup from "../cmponetsMovies/signup"
import Footer from "../componets/footer"
 function Main(){
    return(
        <>
            <Navbar />
            <Header />
            <Movie />
            <Tvshows/>
            <About />
            <Signup />
            <Footer />
        </>
    )
}
export default Main
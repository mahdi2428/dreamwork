import React from "react";
import Form from "./form";

export default function Signup(){
    
    return(
        <>
        <div className="flex lg:flex-row flex-col-reverse mt-10">
            <div className="basis-1/2 mx-2 overflow-hidden flex flex-col justify-center items-center" > 
            <Form />     
            </div>

            <div className="basis-1/2 flex items-center">
                <img className="h-96 object-contain" src="./img/signup.jpg"/>     
            </div>
        </div>
        </>
    )
}
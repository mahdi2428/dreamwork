import React, { useState,useEffect } from "react";
import "./form.css"
import { Email } from "@mui/icons-material";
export default function Form() {
    const step2 = document.querySelector[".step2"]
    const [show , setShow] =useState("block")
    const [show1 , setShow1] =useState("hidden" , true)
    const [show2 , setShow2] =useState("hidden")
    const next1 = () =>{
        setShow("hidden")
        setShow1("block" )   
    }
    const next2 = () =>{
        setShow1("hidden") 
        setShow2("block")  
    }
    const [input , setInput] =useState("")
    const [input1 , setInput1] =useState("")
    const [input2 , setInput2] =useState("")
    const [input3 , setInput3] =useState("")
    const [errorMessage, setErrorMessage] = useState("");
    const inputchange = (e) =>{
        const value = e.target.value.trim();
        setInput(value)
    }
    const inputchange1 = (e) =>{
        const value1 = e.target.value.trim();
        setInput1(value1)
    }
    const inputchange2 = (e) =>{
        const value2 = e.target.value.trim();
        setInput2(value2)
    }
    const inputchange3 = (e) =>{
        const value3 = e.target.value.trim();
        setInput3(value3)
    }
    const min = 1
    const min1 = 1
    const min2 = 1930
    const max = 12
    const max1 = 31
    const max2 = 2024
    const cond = () =>{
        if( setInput || setInput1 || setInput2 ===""){
            setErrorMessage("the fills cannot be empty or be put wrong number")
        }

    }
        
        const [email, setEmail] = useState('');
        const [isValid, setIsValid] = useState(false);
    
        const validateEmail = (email) => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        };
        useEffect(() => {
            setIsValid(validateEmail(email));
         }, [email]);
        
         const [isChecked, setIsChecked] = useState(false);
         const [isChecked1, setIsChecked1] = useState(false);
         const handleCheckboxChange = (event) => {
            setIsChecked(event.target.checked);
         };
         const handleCheckboxChange1 = (event) => {
            setIsChecked1(event.target.checked);
         };
         
     return(
        <>
        <div className="flex ">
        <div className={`flex flex-col gap-3 ${show}`}>
                <p className="font-extrabold text-[30px] text-blue-900">STAY IN TOUCH</p>
                <p className="text-blue-800 font-lg">Register today for the DreamWorks Animation newsletter to receive <br/> all the latest information about our upcoming films and projects.</p>
                <p className="font-semibold text-blue-800 text-[15px]">ENTER BIRTH DATE</p>
                
                <div className="flex gap-4 mt-4">
                    <div className="relative input1   basis-1/3" >
                        <input id="date" onChange={inputchange} value={input} className="border-b border-blue-500 w-[100%]  focus:outline-none text-[14px] focus:border-blue-500 invalid:border-blue-800" type="number"  required/>
                        <label htmlFor="date" className="absolute pointer-events-none transition-all duration-300 top-0 left-0 text-blue-900 text-sm focus:text-blue-300" >MONTH</label>
                    </div>
                    <div className="relative input1 basis-1/3">
                        <input id="date"  onChange={inputchange1} value={input1} className="border-b group border-blue-500 w-[100%] basis-1/3 focus:outline-none text-[14px] focus:border-blue-500 invalid:border-blue-800" type="number"  required />
                        <label htmlFor="date" className="absolute pointer-events-none transition-all duration-300 top-0 left-0 text-blue-900 text-sm focus:text-blue-300 ">DAY</label>
                    </div>
                    <div className="relative group input1 w-[] basis-1/3" >
                        <input  id="date" onChange={inputchange2} value={input2} className="border-b  w-full border-blue-500 w-[100%] basis-1/3 focus:outline-none text-[14px] focus:border-blue-500 invalid:border-blue-800" type="number"  required />
                        <label htmlFor="date" className="absolute pointer-events-none transition-all duration-300 label top-0 left-0 text-blue-900 text-sm group-focus:text-blue-300">YEAR</label>
                    </div>
                </div>
                <div className="w-full"> 
                    <button disabled={input === "" ||input < min || input>max  || input1 === ""|| input1 < min1 || input >max1 || input2 === "" || input2 < min2 || input2 > max2 } onClick={next1}  type="submit" className={`border  text-sm font-bold  py-1 w-32 mt-8   ${input === "" ||input < min || input>max  || input1 === ""|| input1 < min1 || input >max1 || input2 === "" || input2 < min2 || input2 > max2 ? " cursor-not-allowed text-blue-400 border-blue-400 " : "corsur-pointer text-blue-800 border-blue-800"}`}>NEXT</button>
                </div>
            </div>

            <div className={`flex flex-col gap-3 ${show1} step2`}>
                <p className="font-extrabold text-[30px] text-blue-900">STAY IN TOUCH</p>
                <p className="text-blue-800 font-lg">Register today for the DreamWorks Animation newsletter to receive <br/> all the latest information about our upcoming films and projects.</p>
                <p className="font-semibold text-blue-800 text-[15px]">ENTER BIRTH DATE</p>
                <div className="flex flex-col gap-4 mt-4">
                    <div className="relative input1" >
                        <input id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-b border-blue-800 basis-1/3 focus:outline-none text-[14px] focus:border-blue-500 w-full" type="email"  required/>
                        <label htmlFor="date" className="absolute pointer-events-none transition-all duration-300 top-0 left-0 text-blue-900 text-sm focus:text-blue-300" >ENTER EMAIL</label>
                    </div>
                    <div className="relative ">
                        <input id="date1" name="club" value='true'  checked={isChecked} onChange={handleCheckboxChange} className="border-b  group border-blue-800 basis-1/3 focus:outline-none text-[14px] focus:border-blue-500" type="checkbox"  required />
                        <label htmlFor="date" className="absolute pointer-events-none transition-all duration-300 top-0 left-5 text-blue-900 text-sm focus:text-blue-300">JOIN THE DREAMWORKS ANIMTION MAILING LIST TO RECEIVE SPECIAL PROMOTIONAL MAILINGS </label>
                    </div>
                    <div className="relative  " >
                        <input id="date1" name="club" value='true'  checked={isChecked1} onChange={handleCheckboxChange1} className="check  basis-1/3  focus:outline-none text-[14px] focus:border-blue-500 " type="checkbox"  required />
                        <label htmlFor="date" className="absolute pointer-events-none transition-all duration-300 label top-0 left-5 text-blue-900 text-sm group-focus:text-blue-300">BY CLICKING SUBMIT YOU AGREE TO OUR PRIVACY POLICY AND TERMS OF USE </label>
                    </div>
                </div>
                <div className="w-full"> 
                    <button disabled={!isValid || !isChecked ||!isChecked1 }  onClick={next2}  type="submit" className={`border  text-sm font-bold  py-1 w-32 mt-8  cursor-not-allowe ${!isValid || !isChecked || !isChecked1? " cursor-not-allowed text-blue-400 border-blue-400 " : "corsur-pointer text-blue-800 border-blue-800"} ` }>SUBMIT</button>
                </div>
            </div>

            <div className={`flex flex-col gap-3 ${show2} step2`}>
            <p className="text-blue-800 font-extrabold text-[30px]">Thank You for signing up!</p>
            </div>
            </div>
        </>
    )
}
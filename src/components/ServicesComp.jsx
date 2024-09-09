import { useState } from "react"
import ServiceModal from "./ServiceModal";
import { useNavigate } from "react-router-dom";


export default function ServicesComp({image,text,bullet,paragraph,pic}){
    const[open,setopen]=useState(false);
    const navigate=useNavigate();

    function help(){
        navigate("/service",{state:{bullet,paragraph,title:text,image:pic}});
    }
    return (
        <>
            <div onClick={help} className="flex flex-col justify-center items-center  w-fit bg-white cursor-pointer  ">
                <div className="">
                <img className="object-cover w-96 h-60 md:w-80 md:h-72 lg:w-80 lg:h-72" src={image}/>
                </div>
                <div className="text-PPurple pt-2 md:pt-0 font-bold text-sm  w-full  items-center text-center pb-4">
                    {text}
                </div>
            </div>
        </>
    )
}
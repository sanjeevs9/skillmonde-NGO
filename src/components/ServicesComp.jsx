import { useState } from "react"
import ServiceModal from "./ServiceModal";


export default function ServicesComp({image,text,bullet,paragraph}){
    const[open,setopen]=useState(false);

    function help(){
        setopen(!open);
    }
    return (
        <>
        <ServiceModal bullet={bullet} paragraph={paragraph} open={open} fn={help}></ServiceModal>
            <div onClick={help} className="flex flex-col justify-center items-center  w-fit bg-white cursor-pointer ">
                <div className="">
                <img className="object-contain h-60" src={image}/>
                </div>
                <div className="text-PPurple font-bold text-sm  w-10/12  items-center text-center pb-4">
                    {text}
                </div>
            </div>
        </>
    )
}
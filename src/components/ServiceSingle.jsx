import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";

export default function ServiceSingle() {
    const location = useLocation();
    const { bullet, paragraph,title,image } = location.state;
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <div className="">
                <Navbar />
                <div className="flex justify-center flex-col items-center gap-8 p-5 ">
                <div className="text-center font-bold text-xl lg:text-2xl underline underline-offset-4 pt-5">
                        {title}
                    </div>
                    <div className="flex flex-col p-5 sm:pl-10 sm:pr-10 md:w-3/4  xl:w-8/12 2xl:w-7/12 gap-3 bg-[#daf4c9] rounded-tr-[3rem] rounded-bl-[3rem] h-fit ">
                    
                        <div className="text-PPurple font-medium pb-5 md:text-lg">
                            {paragraph}
                        </div>
                        <div className="text-sm font-medium  md:text-base xl:text-lg">
                            {Object.values(bullet).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </div>
                        <div>
                            <img src={image}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
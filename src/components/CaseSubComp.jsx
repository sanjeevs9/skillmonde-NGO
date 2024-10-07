
import image1 from "../assets/case1.png"
import image2 from "../assets/case2.png"
import image3 from "../assets/case3.png"
import image4 from "../assets/case4.jpg"
import image5 from "../assets/case5.jpg"
import image6 from "../assets/case6.jpg"
import image7 from "../assets/case7.jpg"
import image8 from "../assets/case8.jpg"
import image9 from "../assets/case9.jpg"
import image10 from "../assets/case10.jpg"
import image11 from "../assets/case11.jpg"
import { useNavigate } from "react-router-dom"


const imageMap={
    1:image1,
    2:image2,
    3:image3,
    4:image4,
    5:image5,
    6:image6,
    7:image7,
    8:image8,
    9:image9,
    10:image10,
    11:image11

}

export default function CaseSubComp({image,heading,text,paragraph,id}){
    const imagePath=imageMap[id];
    const navigate=useNavigate();
    
    return (
    <>
    
            <div onClick={()=>{navigate("/case",{state:{image:imagePath,title:heading,paragraph,text}})}} className="flex flex-col  justify-center items-center cursor-pointer">
                <div className="h-[22rem] w-[22rem]  ">
                    <img className="object-cover h-full" src={imagePath}/>
                </div>
                <div>
                    <div className="flex flex-col gap-5 bg-white h-[18rem] w-[18rem] -translate-y-16 p-5">
                        <div className="text-PPurple font-bold text-sm">
                            {heading}
                        </div>
                        <div className="text-sm font-medium">
                            {paragraph}
                        </div>
                        <div className="text-sm">
                            learn more...
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
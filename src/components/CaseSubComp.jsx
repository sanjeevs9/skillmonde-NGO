
import image1 from "../assets/case1.png"
import image2 from "../assets/case2.png"
import image3 from "../assets/case3.png"

const imageMap={
    1:image1,
    2:image2,
    3:image3

}

export default function CaseSubComp({image,heading,text,paragraph,id}){
    const imagePath=imageMap[id];
    
    return (
    <>
            <div className="flex flex-col  justify-center items-center cursor-pointer">
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
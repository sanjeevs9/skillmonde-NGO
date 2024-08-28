

export default function ServicesComp({image,text}){
    return (
        <>
            <div className="flex flex-col justify-center items-center  w-fit bg-white  ">
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
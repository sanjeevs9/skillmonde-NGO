


export default function NewsLetter(){
    return (
        <>
            <div className="pt-10">
                <div className="bg-[#bce382] w-full h-[10rem] md:h-[12rem] lg:h-[14rem] xl:h-[16rem] flex justify-center">
                    <div className="flex  flex-col items-center justify-center gap-7">
                        <div className="text-PPurple font-bold text-xl md:text-2xl ">SUBSCRIBE TO NEWSLETTER</div>
                        <div className="flex">

                        <input className="border-2 border-PPurple rounded-tl-[1rem] w-[13rem] md:w-[15rem] lg:w-[12rem] xl:w-[18rem] placeholder:pl-2 xl:placeholder:pl-4 focus:outline-none pl-4" placeholder="Enter your email"></input>
                        <button className="bg-PPurple p-3 md:p-3 lg:p-3 xl:p-4 rounded-br-[1rem] rounded-tl-[1rem] -translate-x-6 text-sm  lg:text-xs pl-4 pr-4 xl:pl-4 xl:pr-4 text-white">Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
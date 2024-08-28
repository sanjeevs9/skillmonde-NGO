


export default function NewsLetter(){
    return (
        <>
            <div>
                <div className="bg-[#bce382] w-full h-[10rem] md:h-[12rem] lg:h-[14rem] xl:h-[16rem] flex justify-center">
                    <div className="flex  flex-col items-center justify-center gap-7">
                        <div className="text-PPurple font-bold text-xl md:text-2xl ">SUBSCRIBE TO NEWSLETTER</div>
                        <div className="flex">

                            <input className="rounded-tl-[1rem] w-[10rem] md:w-[15rem] xl:w-[18rem] placeholder:pl-2 xl:placeholder:pl-4 focus:outline-none pl-4" placeholder="Enter your email"></input>
                            <button className="bg-PPurple p-2 md:p-3 rounded-br-[1rem] rounded-tl-[1rem] -translate-x-6 text-xs md:text-sm pl-2 pr-2 xl:pl-4 xl:pr-4 text-white">Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
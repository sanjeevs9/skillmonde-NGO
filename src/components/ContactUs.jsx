import svg from "../assets/asset 1.png"

export default function ContactUs(){
    return (
        <>
            <div className="flex pt-10 relative ">
                <div className=" hidden lg:flex flex-col flex-1 gap-5 ">
                    <div className="font-bold text-3xl text-center">Contact Us</div>
                    <img className="absolute lg:h-[26rem] xl:h-[30rem] 2xl:h-[33rem]  bottom-5  left-5 2xl:left-32 " src={svg}></img>
                </div>
                <div className="flex flex-1 bg-[#bce382] p-10 justify-center lg:justify-start">
                    <div className="flex flex-col gap-5 ">
                        <div className="flex flex-col gap-2 pt-5">
                        <div className="font-bold text-xl">Lets Connect</div>
                        <div className="font-medium text-sm">We provide the best latest technology of equipment and our staff are available 24*7 at clients call.</div>
                        </div>
                        <div className="flex gap-5 w-full ">
                            <div className="flex flex-col w-full  ">
                            <span className="text-PPurple font-semibold ">First Name</span>
                            <input  className=" bg-[#9490aa] rounded-bl-2xl p-2 w-[9rem] sm:w-auto"></input>
                            </div>
                            <div className="flex flex-col  w-full">
                                <span className="text-PPurple font-semibold">Second Name</span>
                            <input  className=" bg-[#9490aa] rounded-bl-2xl p-2 w-[9rem] sm:w-auto"></input>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-PPurple font-semibold">Email address</span>
                            <input  className=" bg-[#9490aa] rounded-bl-2xl p-2 "></input></div>
                        <div className="flex flex-col">
                            <span className="text-PPurple font-semibold">Message</span>
                            <textarea className="bg-[#9490aa] rounded-bl-2xl h-[10rem] pl-2"></textarea>
                        </div>
                        <div className="flex w-full justify-end">
                            <button className="p-2 bg-white pl-10 pr-10 rounded-bl-2xl border-2 border-PPurple text-PPurple font-medium ">SUBMIT</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
import logo from "../assets/footer/sk.png"
import insta from "../assets/footer/insta.png"
import x from "../assets/footer/x.png"
import fb from "../assets/footer/fb.png"
import yt from "../assets/footer/yt.png"
import wp from "../assets/footer/wp.png"
import location from "../assets/footer/Vector (1).png"
import phone from "../assets/footer/Vector (2).png"
import message from "../assets/footer/Vector (3).png"


export default function Footer() {
    return (
        <>
            <div>
                <div className="flex flex-col lg:flex-row  p-5 lg:p-9 justify-center items-center gap-10 xl:justify-between xl:pl-20 xl:pr-20">
                    <div className="flex flex-col  items-center lg:items-start gap-5 w-3/4 lg:w-auto" >
                        <div>
                            <img className="object-contain h-[6rem] xl:h-[7rem]" src={logo}></img>
                        </div>
                        <div className="text-PPurple text-sm font-semibold lg:max-w-[15rem] ">
                            We provde the best latest technology of equipment and our staff are available in 24/7 at clientall.
                        </div>
                        <div className="flex gap-5">
                            <img className="object-contain h-[1.5rem] cursor-pointer" src={insta}></img>
                            <img className="object-contain h-[1.5rem] cursor-pointer" src={x}></img>
                            <img className="object-contain h-[1.5rem] cursor-pointer" src={fb}></img>
                            <img className="object-contain h-[1.5rem] cursor-pointer" src={yt}></img>
                            <img className="object-contain h-[1.5rem] cursor-pointer" src={wp}></img>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center lg:items-start gap-1 font-medium ">
                            <div className="font-bold text-xl lg:text-base xl:text-xl">Contact Us</div>
                            <div className="flex gap-1">
                                <img className="object-contain  h-[1rem] pt-1" src={location}></img>
                                <div className="lg:text-sm xl:text-base">
                                   Sharda University Greater Noida
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <img className="object-contain  h-[1rem] pt-1" src={phone}></img>
                                <div className="lg:text-sm xl:text-base">
                                +91&nbsp;9348923842
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <img className="object-contain  h-[1rem] pt-1" src={message}></img>
                                <div className="lg:text-sm xl:text-base">sample@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex">
                        <div className="flex flex-col lg:gap-2 font-medium">
                            <span className="font-bold xl:text-xl">Section</span>
                            <span className="lg:text-sm xl:text-base">Home</span>
                            <span className="lg:text-sm xl:text-base">About US</span>
                            <span className="lg:text-sm xl:text-base">Testimonials</span>
                            <span className="lg:text-sm xl:text-base">Case Study</span>
                            <span className="lg:text-sm xl:text-base">Our Team</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-5 justify-center items-center">
                            <div className="text-2xl lg:text-xl font-semibold xl:text-2xl">Lets Subsribe to Newsletter</div>
                            <div>
                                <div className="flex justify-center translate-x-3">

                                    <input className="border-2 border-PPurple rounded-tl-[1rem] w-[13rem] md:w-[15rem] lg:w-[12rem] xl:w-[18rem] placeholder:pl-2 xl:placeholder:pl-4 focus:outline-none pl-4" placeholder="Enter your email"></input>
                                    <button className="bg-PPurple p-3 md:p-3 lg:p-3 xl:p-4 rounded-br-[1rem] rounded-tl-[1rem] -translate-x-6 text-sm  lg:text-xs pl-4 pr-4 xl:pl-4 xl:pr-4 text-white">Subscribe Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
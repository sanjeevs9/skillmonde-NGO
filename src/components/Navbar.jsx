import { useNavigate,Link } from "react-router-dom";

const logo="https://d502jbuhuh9wk.cloudfront.net/orgData/663c735c5b9b21433a1a933a/pages/assets/images/YjHkHsillmondelogobothversiontm1.png";

export default function Navbar({serviceref,clientref,aboutref,contactref}){
    const navigate =useNavigate();
    return (
        <>
        <div className="bg-PPurple flex  bg-opacity-45  h-[3rem] md:h-auto">
            <div className="flex justify-center items-center"><img className="h-11 sm:h-14 object-contain md:h-14 lg:h-16 lg:pl-10 pl-2  " src={logo} /></div>
            <div className="w-full flex justify-center">
                <div className="flex lg:gap-20 gap-6 md:gap-14  items-center text-white lg:font-medium text-xs lg:text-sm ">
                    <div className="cursor-pointer" onClick={()=>{navigate("/")}}>HOME</div>
                    <div onClick={() => {
                                if (serviceref && serviceref.current) {
                                    serviceref.current.scrollIntoView();
                                } else {
                                    navigate("/#service")
                                }
                            }} className="cursor-pointer">SERVICES</div>
                    <div onClick={() => {
                                if (clientref && clientref.current) {
                                    clientref.current.scrollIntoView();
                                } else {
                                    navigate("/#client")
                                }
                            }} className="cursor-pointer">CLIENTS</div>
                    <div onClick={() => {
                                if (aboutref && aboutref.current) {
                                    aboutref.current.scrollIntoView();
                                } else {
                                    navigate("/#about")
                                }
                            }} className="cursor-pointer hidden md:block">ABOUT US</div>
                    <div onClick={() => {
                                if (contactref && contactref.current) {
                                    contactref.current.scrollIntoView();
                                } else {
                                    navigate("/#contact")
                                }
                            }} className="cursor-pointer ">CONTACT</div>
                </div>
            </div>
        </div>
        </>
    )
}
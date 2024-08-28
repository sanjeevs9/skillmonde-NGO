
const logo="https://d502jbuhuh9wk.cloudfront.net/orgData/663c735c5b9b21433a1a933a/pages/assets/images/YjHkHsillmondelogobothversiontm1.png";

export default function Navbar(){
    return (
        <>
        <div className="bg-PPurple flex  bg-opacity-45  ">
            <div><img className="h-8 md:h-14 lg:h-16 lg:pl-10 pl-2  " src={logo} /></div>
            <div className="w-full flex justify-center">
                <div className="flex lg:gap-20 gap-6 md:gap-14  items-center text-white lg:font-medium text-xs lg:text-sm ">
                    <div className="cursor-pointer">HOME</div>
                    <div className="cursor-pointer">SERVICES</div>
                    <div className="cursor-pointer">CLIENTS</div>
                    <div className="cursor-pointer hidden md:block">ABOUT US</div>
                    <div className="cursor-pointer">CONTACT</div>
                </div>
            </div>
        </div>
        </>
    )
}
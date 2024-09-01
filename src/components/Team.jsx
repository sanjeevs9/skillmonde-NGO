import one  from "../assets/1.png"
import two from "../assets/2.png"
import three  from "../assets/3.png"

export default function Team() {
    return (
        <>
            <div className="flex justify-center overflow-x-hidden  pb-48 md:pb-[22rem] lg:pb-[32rem] ">
                <div className="  w-full h-[5rem] md:h-[7rem] lg:h-[11rem] absolute -translate-y-10 " >
                    <div className="relative   top-3/4 sm:top-3/4 md:top-3/4  justify-center  flex items-center">
                        <div className=" flex w-full xl:w-[85rem]  h-full justify-between xl:justify-around pl-2 pr-2 md:pl-7 md:pr-7 lg:pl-10 lg:pr-10  ">
                            <div className=" bg-[#8478a3] rounded-tr-3xl rounded-bl-3xl flex flex-col justify-center items-center h-[7rem] w-[7rem] sm:h-[11rem] sm:w-[11rem] md:h-[13rem] md:w-[13rem] lg:h-[17rem] lg:w-[17rem] xl:h-[18rem] xl:w-[18rem]">
                                <div className=" rounded-full h-[6rem] w-[6rem]  sm:h-[9rem] sm:w-[9rem]  md:h-[10rem] md:w-[10rem] lg:h-[11rem] lg:w-[11rem]  absolute lg:static " style={{
                                    backgroundImage: `url(${one})`, backgroundPosition: "center",
                                    backgroundSize: "cover"
                                }}>

                                </div>
                                <div className="hidden lg:flex lg:flex-col lg:pt-3 ">
                                    <div className="text-sm lg:font-medium text-center">Chander Ramchandani</div>
                                    <div className="flex text-xs justify-center gap-5 xl:gap-6">
                                        <svg className="size-fit w-5  hover:fill-red-600 cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                                        </svg>
                                        <div className="cursor-pointer"><svg className="size-fit w-5  hover:fill-red-600 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"  >    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" /></svg></div>
                                        <div className="cursor-pointer"><svg className="size-fit w-5 hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" /></svg></div>
                                        <div className="cursor-pointer"><svg className="size-fit w-5 hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.084,3.163,9.426,7.627,11.174c-0.105-0.949-0.2-2.406,0.042-3.442 c0.218-0.936,1.407-5.965,1.407-5.965s-0.359-0.719-0.359-1.781c0-1.669,0.967-2.914,2.171-2.914c1.024,0,1.518,0.769,1.518,1.69 c0,1.03-0.655,2.569-0.994,3.995c-0.283,1.195,0.599,2.169,1.777,2.169c2.133,0,3.772-2.249,3.772-5.495 c0-2.873-2.064-4.882-5.012-4.882c-3.414,0-5.418,2.561-5.418,5.208c0,1.031,0.397,2.137,0.893,2.739 c0.098,0.119,0.112,0.223,0.083,0.344c-0.091,0.379-0.293,1.194-0.333,1.361c-0.052,0.22-0.174,0.266-0.401,0.16 c-1.499-0.698-2.436-2.889-2.436-4.649c0-3.785,2.75-7.262,7.929-7.262c4.163,0,7.398,2.966,7.398,6.931 c0,4.136-2.608,7.464-6.227,7.464c-1.216,0-2.359-0.632-2.75-1.378c0,0-0.602,2.291-0.748,2.853 c-0.271,1.042-1.002,2.349-1.492,3.146C12.57,26.812,13.763,27,15,27c6.627,0,12-5.373,12-12S21.627,3,15,3z" /></svg></div>
                                    </div>
                                </div>
                                <div className="relative lg:hidden -bottom-3/4 sm:-bottom-2/3">
                                    <div className="text-sm text-white text-center sm:text-base">Chander Ramchandani</div>

                                </div>
                            </div>
                            <div className=" bg-[#8478a3] rounded-tr-3xl rounded-bl-3xl flex flex-col justify-center items-center h-[7rem] w-[7rem] sm:h-[11rem] sm:w-[11rem] md:h-[13rem] md:w-[13rem] lg:h-[17rem] lg:w-[17rem] xl:h-[18rem] xl:w-[18rem]">
                                <div className=" rounded-full h-[6rem] w-[6rem] sm:h-[9rem] sm:w-[9rem]   md:h-[10rem] md:w-[10rem] lg:h-[11rem] lg:w-[11rem] absolute lg:static " style={{
                                    backgroundImage: `url(${two})`, backgroundPosition: "center",
                                    backgroundSize: "cover"
                                }}>
                                </div>
                                <div className="hidden lg:flex lg:flex-col lg:pt-3 ">
                                    <div className="text-sm lg:font-medium text-center">Prof Dubey </div>
                                    <div className="flex text-xs justify-center gap-5 xl:gap-6">
                                        <svg className="size-fit w-5  hover:fill-red-600 cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                                        </svg>
                                        <div className="cursor-pointer"><svg className="size-fit w-5  hover:fill-red-600 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"  >    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" /></svg></div>
                                        <div className="cursor-pointer"><svg className="size-fit w-5 hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" /></svg></div>
                                        <div className="cursor-pointer"><svg className="size-fit w-5 hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.084,3.163,9.426,7.627,11.174c-0.105-0.949-0.2-2.406,0.042-3.442 c0.218-0.936,1.407-5.965,1.407-5.965s-0.359-0.719-0.359-1.781c0-1.669,0.967-2.914,2.171-2.914c1.024,0,1.518,0.769,1.518,1.69 c0,1.03-0.655,2.569-0.994,3.995c-0.283,1.195,0.599,2.169,1.777,2.169c2.133,0,3.772-2.249,3.772-5.495 c0-2.873-2.064-4.882-5.012-4.882c-3.414,0-5.418,2.561-5.418,5.208c0,1.031,0.397,2.137,0.893,2.739 c0.098,0.119,0.112,0.223,0.083,0.344c-0.091,0.379-0.293,1.194-0.333,1.361c-0.052,0.22-0.174,0.266-0.401,0.16 c-1.499-0.698-2.436-2.889-2.436-4.649c0-3.785,2.75-7.262,7.929-7.262c4.163,0,7.398,2.966,7.398,6.931 c0,4.136-2.608,7.464-6.227,7.464c-1.216,0-2.359-0.632-2.75-1.378c0,0-0.602,2.291-0.748,2.853 c-0.271,1.042-1.002,2.349-1.492,3.146C12.57,26.812,13.763,27,15,27c6.627,0,12-5.373,12-12S21.627,3,15,3z" /></svg></div>
                                    </div>
                                </div>
                                <div className="relative lg:hidden -bottom-3/4 sm:-bottom-2/3">
                                    <div className="text-sm text-white sm:text-base">Prof Dubey </div>
                                </div>
                            </div>
                            <div className=" bg-[#8478a3] rounded-tr-3xl rounded-bl-3xl flex flex-col justify-center items-center h-[7rem] w-[7rem] sm:h-[11rem] sm:w-[11rem] md:h-[13rem] md:w-[13rem] lg:h-[17rem] lg:w-[17rem] xl:h-[18rem] xl:w-[18rem]">
                                <div className=" rounded-full h-[6rem] w-[6rem] sm:h-[9rem] sm:w-[9rem]   md:h-[10rem] md:w-[10rem] lg:h-[11rem] lg:w-[11rem] absolute lg:static " style={{
                                    backgroundImage: `url(${three})`, backgroundPosition: "center",
                                    backgroundSize: "cover"
                                }}>
                                </div>
                                <div className="hidden lg:flex lg:flex-col lg:pt-3 ">
                                    <div className="text-sm lg:font-medium text-center">Gagan Josh</div>
                                    <div className="flex text-xs justify-center gap-5 xl:gap-6">
                                        <svg className="size-fit w-5  hover:fill-red-600 cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                                        </svg>
                                        <div className="cursor-pointer"><svg className="size-fit w-5  hover:fill-red-600 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"  >    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" /></svg></div>
                                        <div className="cursor-pointer"><svg className="size-fit w-5 hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" /></svg></div>
                                        <div className="cursor-pointer"><svg className="size-fit w-5 hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.084,3.163,9.426,7.627,11.174c-0.105-0.949-0.2-2.406,0.042-3.442 c0.218-0.936,1.407-5.965,1.407-5.965s-0.359-0.719-0.359-1.781c0-1.669,0.967-2.914,2.171-2.914c1.024,0,1.518,0.769,1.518,1.69 c0,1.03-0.655,2.569-0.994,3.995c-0.283,1.195,0.599,2.169,1.777,2.169c2.133,0,3.772-2.249,3.772-5.495 c0-2.873-2.064-4.882-5.012-4.882c-3.414,0-5.418,2.561-5.418,5.208c0,1.031,0.397,2.137,0.893,2.739 c0.098,0.119,0.112,0.223,0.083,0.344c-0.091,0.379-0.293,1.194-0.333,1.361c-0.052,0.22-0.174,0.266-0.401,0.16 c-1.499-0.698-2.436-2.889-2.436-4.649c0-3.785,2.75-7.262,7.929-7.262c4.163,0,7.398,2.966,7.398,6.931 c0,4.136-2.608,7.464-6.227,7.464c-1.216,0-2.359-0.632-2.75-1.378c0,0-0.602,2.291-0.748,2.853 c-0.271,1.042-1.002,2.349-1.492,3.146C12.57,26.812,13.763,27,15,27c6.627,0,12-5.373,12-12S21.627,3,15,3z" /></svg></div>
                                    </div>
                                </div>
                                <div className="relative lg:hidden -bottom-3/4 sm:-bottom-2/3">
                                    <div className="text-sm text-white sm:text-base ">Gagan Josh</div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[7rem] sm:h-[10rem] lg:h-[15rem]  flex bg-[#cfc8e1] justify-center items-end lg:pb-5 xl:pb-10">
                        <div className="hidden lg:flex text-white    lg:text-4xl   lg:font-semibold   h-fit">
                            Our Team
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
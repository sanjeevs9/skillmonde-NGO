import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Navbar from './Navbar';
import one from "../../public/1.png"
import two from "../../public/2.png"
import three from "../../public/3.png"
import left from "../../public/left.png"
import right from "../../public/right.png"
import "../index.css"


export default function Hero({ serviceref, clientref, aboutref, contactref }) {

  return (
    <>
      <div className=' relative z-0  '>
        <div className='absolute   z-20  w-full pt-1'>
          <Navbar serviceref={serviceref} clientref={clientref} aboutref={aboutref} contactref={contactref} />
        </div>
        <Swiper className=''
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 100000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom"
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide>
            <div className='h-60  md:h-screen w-full relative  '>
            <img className='object-cover h-full w-full ' src={one}></img>
            <div className='absolute inset-0 flex items-center   justify-center  w-full   h-full '>
              <div className=' translate-y-5 sm:translate-y-0 md:translate-y-1/4 lg:translate-y-32    h-full w-full'>
                <div className='bg-contain h-60  sm:h-[20rem] md:h-[40rem]  lg:h-[50rem] relative  ' style={{
                  backgroundImage:'url("https://s3-alpha-sig.figma.com/img/024a/8ed3/9d0888cad9ca01ddf7fd525fa5c6542e?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fN65~aQdPdBw~5W0Hykz7kdgbXFQ2XTJNLWYCzdCZ6jwVm6AQumuaKkuUIWYMUCX5v1zeXyyRWipGW3-vJxLoXZD0LpvOCx~KlUhg2s8zRDQvndt1LingTFxAG1IP76VlOCp6GGRpdDqFThZlObEaUmBFyxSx8YfckZzLW5OCTlJ4kFdZZQguUwO7u4tHrnh4FwO98fHGyGeItkJWE24G79cSr4TSbtSkJ1VBsfbSN5BzRy~b-KcWgm27-ltStJm~KLJ7U3pNMDANCv~YUko1ex~S4FJtZx8iiKO7YL9lvqs6~Ck0eoAQlsk~rIDsUhshUPgT4-rIXgmsOHce8tT5A__")',
                  backgroundRepeat:"no-repeat",
                }}>
                  <div className='absolute   text-center  translate-y-1/2    translate-x-1/2 sm:translate-x-1/4 md:translate-x-1/3 pt-5 sm:pt-5 md:pt-16 lg:pt-20 '>
                      <div className='w-[12rem] sm:w-1/2 md:w-8/12 h-1/2 '>
                        <div className='text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl sm:pb-2 md:font-semibold'>
                        <h1 className='font-bold  md:text-xl md:pb-3 lg:text-4xl xl:text-5xl'>Helping NGOs Make a Greater Impact</h1>
                        Simple, effective solutions in Training, CSR, and eLearning to drive your mission forward
                        </div>
                        <button className='bg-green-400 text-xs p-1 sm:p-2 md:p-3 md:text-base xl:p-4 xl:text-lg sm:font-semibold text-white '>
                          REACH US
                        </button>
                      </div>
                  </div>

                </div>
              </div>
            </div>
            </div>
            
            
            </SwiperSlide>
          <SwiperSlide><div className='h-60 md:h-screen w-full '><img className='object-cover h-full w-full ' src={two}></img>
                
           </div></SwiperSlide>
          <SwiperSlide><div className='h-60 md:h-screen w-full'><img className='object-cover h-full w-full' src={three}></img> 
          <div className='absolute inset-0 flex items-center   justify-center  w-full   h-full '>
              <div className=' translate-y-5 sm:translate-y-0 md:translate-y-1/4 lg:translate-y-32  h-full w-full'>
                <div className='bg-contain h-60  sm:h-[20rem] md:h-[40rem]  lg:h-[50rem] relative  ' style={{
                  backgroundImage:'url("https://s3-alpha-sig.figma.com/img/024a/8ed3/9d0888cad9ca01ddf7fd525fa5c6542e?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fN65~aQdPdBw~5W0Hykz7kdgbXFQ2XTJNLWYCzdCZ6jwVm6AQumuaKkuUIWYMUCX5v1zeXyyRWipGW3-vJxLoXZD0LpvOCx~KlUhg2s8zRDQvndt1LingTFxAG1IP76VlOCp6GGRpdDqFThZlObEaUmBFyxSx8YfckZzLW5OCTlJ4kFdZZQguUwO7u4tHrnh4FwO98fHGyGeItkJWE24G79cSr4TSbtSkJ1VBsfbSN5BzRy~b-KcWgm27-ltStJm~KLJ7U3pNMDANCv~YUko1ex~S4FJtZx8iiKO7YL9lvqs6~Ck0eoAQlsk~rIDsUhshUPgT4-rIXgmsOHce8tT5A__")',
                  backgroundRepeat:"no-repeat",
                }}>
                  <div className='absolute   text-center  translate-y-1/2    translate-x-1/2 sm:translate-x-1/4 md:translate-x-1/3 xl:translate-x-1/4  pt-2 sm:pt-5 md:pt-16 lg:pt-20 '>
                      <div className='w-[12rem] sm:w-1/2 md:w-6/12   '>
                        <div className='text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl sm:pb-2 md:font-semibold'>
                        <h1 className='font-bold  md:text-xl md:pb-3 lg:text-4xl xl:text-5xl'>Transform  your Learning with Cutting-Edge Technology</h1>
                        Personalized Course Design
                        Interactive and Engaging Content
                        Seamless LMS Integration
                        </div>
                        <button className='bg-green-400 text-xs p-1 sm:p-2 md:p-3 md:text-base xl:p-4 xl:text-lg sm:font-semibold text-white '>
                          REACH US
                        </button>
                      </div>
                  </div>

                </div>
              </div>
            </div>
          </div></SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev-custom">
          <img src={left} alt="Previous" />
        </div>
        <div className="swiper-button-next-custom">
          <img src={right} alt="Next" />
        </div>
        <div className='  flex gap-0 lg:gap-10 xl:gap-12 justify-center absolute -bottom-1/4 left-1/2 transform -translate-x-1/2 z-20 -translate-y-1/2'>
          <div className='bg-[#aa91e4] rounded-bl-[5rem] hidden md:block'>
            <div className='flex flex-col justify-center items-center text-white  gap-2 xl:gap-5 pl-8 pr-8 pt-6 pb-6 lg:pl-8 lg:pr-8 h-full lg:pt-6 lg:pb-6 xl:pl-10 xl:pr-10 xl:pt-8 xl:pb-8 2xl:pr-14 2xl:pl-14 2xl:pt-10 2xl:pb-19'>
              <div className='font-semibold text-base lg:text-2xl 2xl:text-2xl'>
                JOIN US NOW 
              </div>
              <div className='w-[12rem] xl:w-[14rem] text-xs lg:text-sm 2xl:text-sm text-center'>
              We believe that education is the key to a better future. We are dedicated to supporting our partners in their mission to educate, empower, and inspire learners
                
              </div>
              <div>
                <button className='border-2 p-1 text-xs xl:text-sm 2xl:text-base'>
                  Read More
                </button>
              </div>
              
            </div>
          </div>
          <div className='bg-[#95d338] rounded-br-[5rem] rounded-tl-[5rem] hidden md:block'>
            <div className='flex flex-col justify-center items-center text-white  gap-2 xl:gap-5 pl-8 pr-8 pt-6 pb-6 lg:pl-8 lg:pr-8 h-full lg:pt-6 lg:pb-6 xl:pl-10 xl:pr-10 xl:pt-8 xl:pb-8 2xl:pr-14 2xl:pl-14 2xl:pt-10 2xl:pb-19'>
              <div className='font-semibold text-base lg:text-2xl'>
                OUR SERVICES
              </div>
              <div className='w-[12rem] text-xs  lg:text-sm text-center'>
              At SkillMonde, we offer a comprehensive suite of services designed to support NGOs, publishers, EdTech companies, and universities in their educational initiatives.
              </div>
              <div>
                <button className='border-2 p-1 text-xs xl:text-sm 2xl:text-base'>
                  Read More
                </button>
              </div>
              
            </div>
          </div>
          <div className='bg-[#aa91e4] rounded-br-[5rem] hidden md:block'>
            <div className='flex flex-col justify-center items-center text-white  gap-2 xl:gap-5 pl-8 pr-8 pt-6 pb-6 lg:pl-8 lg:pr-8 h-full lg:pt-6 lg:pb-6  xl:pl-10 xl:pr-10 xl:pt-8 xl:pb-8 2xl:pr-14 2xl:pl-14 2xl:pt-10 2xl:pb-19'> 
              <div className='font-semibold text-base lg:text-2xl'>
                GET INVOLVED
              </div>
              <div className='w-[12rem] text-xs lg:text-sm text-center'>
              SkillMonde blends educational expertise, quality, and innovation with global relevance. Get involved to help create impactful, culturally sensitive solutions.
              </div>
              <div>
                <button className='border-2 p-1 text-xs xl:text-sm 2xl:text-base'>
                  Read More
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>


  )
}
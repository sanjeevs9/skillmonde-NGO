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
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom"
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide><div className='h-60  md:h-screen w-full '><img className='object-cover h-full w-full ' src={one}></img> </div></SwiperSlide>
          <SwiperSlide><div className='h-60 md:h-screen w-full '><img className='object-cover h-full w-full ' src={two}></img> </div></SwiperSlide>
          <SwiperSlide><div className='h-60 md:h-screen w-full'><img className='object-cover h-full w-full' src={three}></img> </div></SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev-custom">
          <img src={left} alt="Previous" />
        </div>
        <div className="swiper-button-next-custom">
          <img src={right} alt="Next" />
        </div>
        <div className='flex gap-10 justify-center absolute -bottom-1/4 left-1/2 transform -translate-x-1/2 z-20'>
          <div className='bg-[#aa91e4] rounded-bl-[5rem]'>
            <div className='flex flex-col justify-center items-center text-white  gap-2 pl-8 pr-8 h-full pt-6 pb-6 '>
              <div className='font-semibold text-2xl'>
                JOIN US NOW
              </div>
              <div className='w-[12rem] text-sm text-center'>
                We beleive that education is the key to a better future. 
                We are dedicated to supporting our partners in their mission to educate, empower and inspire learners.
              </div>
              <div>
                <button className='border-2 p-1 text-xs'>
                  Read More
                </button>
              </div>
              
            </div>
          </div>
          <div className='bg-[#95d338] rounded-br-[5rem] rounded-tl-[5rem]'>
            <div className='flex flex-col justify-center items-center text-white  gap-2  pl-8 pr-8 h-full '>
              <div className='font-semibold text-2xl'>
                OUR SERVICES
              </div>
              <div className='w-[12rem] text-sm text-center'>
                At SkillMonde, we offer a comprehensive suite of servies designed to support NGOs, Publishers, EdTech companies and universites in their educational initiatives
              </div>
              <div>
                <button className='border-2 p-1 text-xs'>
                  Read More
                </button>
              </div>
              
            </div>
          </div>
          <div className='bg-[#aa91e4] rounded-br-[5rem]'>
            <div className='flex flex-col justify-center items-center text-white  gap-2 pl-8 pr-8 h-full  '> 
              <div className='font-semibold text-2xl'>
                GET INVOLVED
              </div>
              <div className='w-[12rem] text-sm text-center'>
                Skillmonde beldns educational expertise, quality, and innovation with global relevance. GEt involved to help create impactful, culturally sensitive solutions.
              </div>
              <div>
                <button className='border-2 p-1 text-xs'>
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
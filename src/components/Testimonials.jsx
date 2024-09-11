import TestimonialComp from "./TestimonialComp";
import left from "../../public/left.png"
import right from "../../public/right.png"
import "../index.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,Navigation, Pagination} from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonial(){
    return(
        <>
            <div className="pt-10 p-5 relative  ">
            <Swiper className=''
      spaceBetween={50}
      slidesPerView={1}
      // autoplay={{delay: 3500,disableOnInteraction: false}}
      loop={true}
      speed={1000}
      navigation={{nextEl:".swiper-button-next-custom-one",
        prevEl:".swiper-button-prev-custom-one"
      }}
      pagination={{clickable:true}}
      modules={[Navigation,Pagination]}
    >
      <SwiperSlide><TestimonialComp review={"The course developed by SkillMonde was exceptional and interactive. They expertly handled the complexity of our requirements, delivering content that was both comprehensive and accessible across a range of critical subjects. Their work on multilingual support and seamless LMS integration was key to the program’s success."}  client={"-Charu Kapoor, Country Director, NIIT Foundation."}/></SwiperSlide>
      <SwiperSlide><TestimonialComp review={"The NEP training provided by SkillMonde was exactly what our teachers needed. The sessions were engaging and informative, offering practical strategies our teachers could use immediately. We’ve already seen a positive impact in our classrooms, and our teachers are more motivated and better equipped to implement the NEP."}  client={"- Umesh Parihar, Program Director, Deepalaya Foundation"}/></SwiperSlide>
      <SwiperSlide><TestimonialComp review={"SkillMonde delivered an impactful training program that resonated with our students. Their approach to helping students assess their skills and explore career and entrepreneurial options was both engaging and effective. We’re grateful for their expertise and the positive impact this training has had on our students"}  client={"-Roopali Mehra, CEO, MyTransform"}/></SwiperSlide>
      <SwiperSlide><TestimonialComp review={"“SkillMonde delivered exactly what we needed under very tight deadlines. Their ability to conceptualize, develop, and deliver high-quality interactive content for our BCA and MCA programs was outstanding. The courses are now a cornerstone of our online offerings, and we’ve received excellent feedback from our students.”"}  client={"-GLA University"}/></SwiperSlide>
      <SwiperSlide><TestimonialComp review={"“SkillMonde’s outreach program was instrumental in expanding the reach of our textbooks. Their ability to manage a large-scale, multi-year campaign with such precision and effectiveness was impressive. The team they built and managed in the USA delivered outstanding results, helping us achieve our goal of reaching 20,000 professors.”"}  client={"-OpenStax, Rice University"}/></SwiperSlide>
      <SwiperSlide><TestimonialComp review={"“SkillMonde did an outstanding job designing our school books. The complexity of the project was handled with incredible skill and attention to detail. The final designs were not only visually appealing but also educationally effective. We’re thrilled with the outcome and look forward to working with SkillMonde on future projects.”"}  client={"- Scholars Learning USA"}/></SwiperSlide>
    </Swiper>

    <div className="swiper-button-prev-custom-one absolute cursor-pointer left-0 lg:left-1/4 top-1/2 transform -translate-y-1/2 z-10 pl-5">
    <img className="object-contain h-10" src={left} alt="Previous" />
</div>
<div className="swiper-button-next-custom-one absolute  cursor-pointer right-0  lg:right-1/4 top-1/2 transform -translate-y-1/2 z-10 pr-5">
    <img className="object-contain h-10" src={right} alt="Next" />
</div>
            </div>
        </>
    )
}

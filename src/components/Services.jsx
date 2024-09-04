import ServicesComp from "./ServicesComp";
import course from "../assets/course.png"
import learn from "../assets/58096.jpg"
import lms from "../assets/lms.png"
import help from "../assets/service.jpg";

import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';


// import required modules

export default function Services(){
    
    return(

        <>
            <div  className="pt-20  ">
                <div className="items-center flex justify-center  font-bold text-4xl pb-5">Services</div>
            <div className="flex flex-col xl:flex-row bg-[#eeeeee] gap-5  xl:gap-0  pt-10 pb-10  xl:justify-center ">
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-5 md:gap-20 lg:gap-40   xl:justify-evenly xl:gap-0 xl:pl-5  2xl:translate-x-10 "  >
       <ServicesComp bullet={{
    "0": "CSR Strategy Development: Collaborate with our expert team to develop a CSR strategy that reflects your organization’s values and community needs. We ensure that every project aligns with compliance standards and maximizes social impact.",
    "1": "End-to-End Project Management: From initial concept to execution, we manage every aspect of your CSR projects. Our comprehensive approach ensures that your initiatives are executed smoothly and effectively, with clear goals and timelines.",
    "2": "Monitoring, Evaluation, and Reporting: Our robust monitoring systems track the progress and impact of your CSR activities. We provide detailed reports to showcase the effectiveness of your programs, ensuring transparency and accountability.",
    "3": "Capacity Building Workshops: Boost the skills of your team with targeted training in project management, community engagement, and leadership development. Our workshops are designed to strengthen your organization from the ground up.",
    "4": "Skill Development Programs: Empower your beneficiaries with essential vocational skills that enhance employability and promote self-sufficiency. Our programs are adaptable to various community needs and focused on practical outcomes.",
    "5": "Awareness and Sensitization Training: Conduct impactful workshops that educate your staff and community members on critical social issues, improving outreach and engagement strategies."
  }} paragraph={"Your Trusted Training Partner for NGOs SkillMonde is a leading training agency dedicated to empowering NGOs with customized training solutions that enhance organizational capabilities and drive social impact. As a trusted training vendor, we offer a range of tailored programs designed to equip your team and beneficiaries with the skills they need to succeed.Our Training Services Include:"} text={"Training Programs for NGOs"} image={course}/>
       <ServicesComp bullet={{
  "0": "CSR Strategy Development: Collaborate with our expert team to develop a CSR strategy that reflects your organization’s values and community needs. We ensure that every project aligns with compliance standards and maximizes social impact.",
  "1": "End-to-End Project Management: From initial concept to execution, we manage every aspect of your CSR projects. Our comprehensive approach ensures that your initiatives are executed smoothly and effectively, with clear goals and timelines.",
  "2": "Monitoring, Evaluation, and Reporting: Our robust monitoring systems track the progress and impact of your CSR activities. We provide detailed reports to showcase the effectiveness of your programs, ensuring transparency and accountability."
}} paragraph={"Expert CSR Implementation Agency for Effective Social Impact SkillMonde specializes in CSR implementation services that help organizations design and execute impactful Corporate Social Responsibility initiatives. As a leading CSR implementation agency, we partner with NGOs and corporate entities to create programs that align with social goals and deliver measurable outcomes.Our CSR Implementation Services Include:"} text={"CSR Implementation Services"} image={learn}/>
       </div>
       <div className="flex flex-col md:flex-row w-full justify-center items-center gap-5 md:gap-20 lg:gap-40 xl:gap-0 xl:justify-evenly xl:pr-5 2xl:-translate-x-10 "  >
       <ServicesComp bullet={{
    "0": "CSR Strategy Development: Collaborate with our expert team to develop a CSR strategy that reflects your organization’s values and community needs. We ensure that every project aligns with compliance standards and maximizes social impact.",
    "1": "End-to-End Project Management: From initial concept to execution, we manage every aspect of your CSR projects. Our comprehensive approach ensures that your initiatives are executed smoothly and effectively, with clear goals and timelines.",
    "2": "Monitoring, Evaluation, and Reporting: Our robust monitoring systems track the progress and impact of your CSR activities. We provide detailed reports to showcase the effectiveness of your programs, ensuring transparency and accountability.",
    "3": "Capacity Building Workshops: Boost the skills of your team with targeted training in project management, community engagement, and leadership development. Our workshops are designed to strengthen your organization from the ground up.",
    "4": "Skill Development Programs: Empower your beneficiaries with essential vocational skills that enhance employability and promote self-sufficiency. Our programs are adaptable to various community needs and focused on practical outcomes.",
    "5": "Awareness and Sensitization Training: Conduct impactful workshops that educate your staff and community members on critical social issues, improving outreach and engagement strategies.",
    "6": "Custom Course Creation for K-12 Education: We design tailored learning modules for K-12 education, featuring interactive content such as videos, animations, quizzes, and gamification. Our visually engaging courses make complex concepts easy to understand, ensuring that learning is both effective and enjoyable for students of all backgrounds.",
    "7": "Skilling and Vocational Training Programs: Equip your beneficiaries with the skills they need to thrive in the job market. Our skilling courses incorporate engaging videos, step-by-step tutorials, and animated content that provides hands-on learning experiences aligned with real-world industry requirements.",
    "8": "Multilingual Learning Solutions: Understanding the diverse linguistic landscape, we create courses in multiple regional languages, ensuring accessibility for learners across different regions. Our multilingual approach allows NGOs to reach a wider audience and make a greater impact with localized video and animated content.",
    "9": "Interactive eLearning Modules with Videos and Animations: We specialize in developing eLearning modules that are not just informative but also highly engaging. Our courses utilize videos, animations, infographics, and interactive assessments to keep learners captivated, making education more dynamic and interactive."
  }} paragraph={"Leading Course Design and Development Company in Delhi NCR SkillMonde is a top-rated course design and development company based in Delhi NCR, specializing in creating complete interactive learning solutions for NGOs in K-12 education and skilling programs. As a trusted partner for NGOs, we develop engaging and impactful courses that cater to diverse learning needs, incorporating videos, animations, and interactive elements to enhance the learning experience.Our Course Design and Development Services:"}  text={"Course Design and Development Services"} image={lms}/>
       <ServicesComp bullet={{
    "0": "LMS for School-Level Learners: We specialize in developing LMS platforms that cater to young learners in K-12 education. Our systems are designed with user-friendly interfaces, engaging features like videos, animations, quizzes, and interactive games that make learning fun and accessible for children of all ages.",
    "1": "LMS for Mature Audiences and Skilling Programs: For NGOs focusing on adult education, skilling, or vocational training, our LMS solutions are tailored to meet the needs of mature learners. Our platforms include features like modular learning paths, certifications, progress tracking, and robust assessment tools that facilitate continuous learning and skill development.",
    "2": "Customizable and Scalable LMS Platforms: SkillMonde’s LMS solutions are fully customizable, allowing NGOs to tailor the system to their specific needs. From branding and course structuring to user management and reporting, our platforms can be scaled to fit any size and scope of educational initiatives.",
    "3": "Multi-Device Compatibility: Our LMS platforms are compatible with multiple devices, including smartphones, tablets, and computers, ensuring that learners can access content anytime, anywhere. This flexibility is crucial for NGOs working in remote or resource-limited settings.",
    "4": "Interactive Features and Multimedia Integration: Incorporate videos, animations, infographics, and other multimedia elements into your LMS to create an engaging learning environment. Our LMS solutions support a wide range of content formats, making it easy to deliver interactive and impactful educational experiences."
  }} paragraph={"Custom LMS Solutions for NGOs in Delhi NCR, Gurgaon, and Beyond SkillMonde offers tailored Learning Management System (LMS) solutions designed to meet the unique requirements of NGOs, catering to both school-level learners and mature audiences. Whether you need an LMS for K-12 education, vocational training, or adult learning programs, SkillMonde provides scalable and customizable platforms that enhance the learning experience and drive educational outcomes.Our LMS Solutions Include:"} text={"LMS Solutions for NGOs"} image={help}/>
       </div>

       </div>
        
      
            </div>
        </>
    )
}
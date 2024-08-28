import idea from "../assets/idea.png"
import education from "../assets/education.png"
import quality from "../assets/quality.png"
import social from "../assets/social.png"


export default function Section3Half2(){
    return (
        <>
            <div className="">
                <div className="bg-[#f6f4fd] rounded-tl-[6rem] ">
                    <div className="flex flex-col p-2 lg:p-12 xl:p-16 gap-5  lg:gap-16  w-full ">
                        <div className="flex flex-col lg:flex-row w-full  items-center md:items-start lg:justify-between pl-5 pr-5  gap-5 xl:gap-0 ">
                            <div className="flex flex-col max-w-72  lg:w-60  ">
                                <img className="object-contain h-20" src={education}/>
                                <div className="font-bold text-sm">
                                    Expertise in Education 
                                </div>
                                <div className="text-sm">
                                 Our team brings a deep understanding of educational best practices, curriculum design, and the unique needs of learners across different stages of education.
                                </div>
                            </div>
                            <div className="flex flex-col pt-4 max-w-72  lg:w-60  ">
                                <img className="object-contain h-12" src={quality}/>
                                <div className="font-bold text-sm">
                                    Expertise in Education 
                                </div>
                                <div className="text-sm">
                                We prioritize quality in every project, ensuring that our solutions not only meet but exceed client expectations.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center lg:items-start  lg:justify-between pl-5 pr-5 gap-5 xl:gap-0">
                            <div className="flex flex-col max-w-72  lg:w-60">
                                <img className="object-contain h-12" src={idea}/>
                                <div className="font-bold text-sm">
                                    Expertise in Education 
                                </div>
                                <div className="text-sm">
                                We leverage the latest technologies and methodologies to create innovative solutions that make a tangible difference in education.
                                </div>
                            </div>
                            <div className="flex flex-col max-w-72  lg:w-60">
                                <img className="object-contain h-12" src={social}/>
                                <div className="font-bold text-sm">
                                    Expertise in Education 
                                </div>
                                <div className="text-sm">
                                While we operate on a global scale, we ensure that our solutions are culturally and linguistically relevant to the communities we serve.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
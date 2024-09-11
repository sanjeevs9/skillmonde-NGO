

export default function TestimonialComp({review,client,image}){
    return(
        <>
        <div className=" flex justify-center">
            <div className="bg-[#c8c0dd] rounded-tr-[6rem] rounded-bl-[6rem] p-5 w-[40rem] pt-10 bg ">

                <div className="flex flex-col items-center gap-2 lg:gap-6">
                    <div className="font-bold">
                        TESTIMONIALS
                    </div>
                    <div>
                    <img className="object-contain h-16" src="https://avatar.iran.liara.run/public" />
                    </div>
                    <div className="lg:w-1/2 w-72  p-1 text-base font-medium lg:text-lg">
                        {review}
                    </div>
                    <div className="italic font-semibold pb-10  text-center">
                        {client}
                    </div>
                </div>
            </div>
        </div>    
        </>
    )
}
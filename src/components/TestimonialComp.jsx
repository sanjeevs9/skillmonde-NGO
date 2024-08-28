

export default function TestimonialComp({review,client,image}){
    return(
        <>
        <div className=" flex justify-center">
            <div className="bg-[#c8c0dd] rounded-tr-[6rem] rounded-bl-[6rem] p-5 w-[50rem] pt-10 bg">

                <div className="flex flex-col items-center gap-6">
                    <div>
                    <img className="size-fit h-16" src="https://avatar.iran.liara.run/public" />
                    </div>
                    <div className="w-1/2 font-medium text-lg">
                        {review}
                    </div>
                    <div className="italic font-semibold pb-10">
                        {client}
                    </div>
                </div>
            </div>
        </div>    
        </>
    )
}
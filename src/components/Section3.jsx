import Section3Half1 from "./Section3Half1";
import Section3Half2 from "./Section3Half2";


export default function Section3(){
    return(
        <>
        <div className="flex flex-col md:flex-row pt-52">
            <div className="md:w-1/2 p-5 md:p-0 flex md:block  justify-center  items-center">
           <Section3Half1/>
           </div >
           <div className="md:w-1/2   p-5 md:p-0   flex md:block   justify-center  items-center ">
            <Section3Half2/>
            </div>
        </div>
        </>
    )
}
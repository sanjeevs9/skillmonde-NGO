import Section3Half1 from "./Section3Half1";
import Section3Half2 from "./Section3Half2";


export default function Section3(){
    return(
        <>
        <div className="flex  pt-10">
            <div className="w-1/2">
           <Section3Half1/>
           </div >
           <div className="w-1/2 ">
            <Section3Half2/>
            </div>
        </div>
        </>
    )
}
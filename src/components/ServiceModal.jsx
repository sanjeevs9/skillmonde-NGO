import ReactDOM from "react-dom"

export default function ServiceModal({open,fn,bullet,paragraph}){
    if(!open)return null;

console.log({bullet})
    return ReactDOM.createPortal(
        <>
        <div className="backdrop-blur-sm z-50 h-screen w-screen fixed inset-0 justify-center items-center flex ">
       
            <div className="flex flex-col bg-white w-10/12 h-[55rem]   relative border-2 p-2">
            <button className="bg-red-400 w-fit absolute right-0" onClick={fn}>close </button>
            <div className="text-xs text-PPurple font-medium pb-2">
        {paragraph}
        </div>
        
        <div className="text-xs">
        {Object.values(bullet).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        </div>
        </div>
        </div>
        
        </>,
        document.getElementById('service')
    )
}
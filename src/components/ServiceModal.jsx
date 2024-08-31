import ReactDOM from "react-dom"

export default function ServiceModal({open,fn,bullet,paragraph}){
    if(!open)return null;

console.log({bullet})
    return ReactDOM.createPortal(
        <>
        <div className="backdrop-blur-sm z-50 h-screen w-screen fixed inset-0 justify-center items-center flex ">
            <div className="flex flex-col bg-slate-500 w-1/2 ">

        {paragraph}
        <button className="bg-red-400 w-fit" onClick={fn}>close </button>
        
        <div>
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
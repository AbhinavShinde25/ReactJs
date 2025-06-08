import { useState } from "react";


function App() {
  let [color,setColor] = useState("blue");

  return (
    <>
      <div className='w-full h-screen bg-slate-600'
       style={{backgroundColor:color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="button bg-red-700   outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("red")}>RED</button>
            <button className="button bg-orange-500  outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("orange")}>orange</button>
            <button className="button bg-green-700   outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("green")}>green</button>
            <button className="button bg-yellow-500  outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("yellow")}>yellow</button>
         
          </div>
        </div>

       

        
      </div>
    </>
  )
}

export default App

import { useState } from "react";


function App() {
  let [color,setColor] = useState("blue");

  return (
    <>
      <div className='w-full h-screen bg-slate-600'
       style={{backgroundColor:color}}>

        <div className="mt-6">
          <div className="bg-gray-600 rounded bottom-10">
            <button className="button bg-red-700 rounded-md m-3 p-3" onClick={()=>setColor("red")}>RED</button>
            <button className="button bg-orange-500 rounded-md m-3 p-3" onClick={()=>setColor("orange")}>orange</button>
            <button className="button bg-green-700 rounded-md m-3 p-3" onClick={()=>setColor("green")}>green</button>
            <button className="button bg-yellow-500 rounded-md m-3 p-3" onClick={()=>setColor("yellow")}>yellow</button>
         
          </div>
        </div>

       

        
      </div>
    </>
  )
}

export default App

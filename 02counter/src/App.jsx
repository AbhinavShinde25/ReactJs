import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setcounter] = useState(0);

//  let counter = 0;

 const addValue = ()=>{
  
  
  if(counter < 20){
    setcounter(counter+1);
  }else{
    alert("value could be less than 21")
  }
 
 }

 const decrVal = () =>{
 
  if(counter>0){
    setcounter(counter-1);

  }else{
    alert("value could be more than 0")
  }
  
 }

  return (
    <>
      
      
        
      <h1>React with chai aur Code </h1>
      <h2>Counter val :{counter}</h2>
      <button
        onClick={addValue}
      >Increase Value {counter}</button><br /><br />
      <button
        onClick={decrVal}
      >decrease Value {counter}</button>
      <br />
      <p>footer {counter}</p>
    </>
  )
}

export default App

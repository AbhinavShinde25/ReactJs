import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/card'

function App() {
  const myObj = {
    username:"abhinav",
    age:20,
  }

  return (
    <>
      <h1 className='bg-green-600 text-black  rounded-2xl mb-4'>TailWind</h1>
      {/* <Card username="chaiandcode" someObj = {myObj}/> */}
      <Card address="at post pimpri ,pune" price = "2334"  />
      <Card address="at post walki ,nagar" price = "4000"/>
    </>
  )
}

export default App

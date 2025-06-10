

import './App.css'
import Login from './component/login'
import Profile from './component/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {
  

  return (
    <UserContextProvider>
        Hello 
        <Login />
        <Profile />
    </UserContextProvider>
  )
}

export default App

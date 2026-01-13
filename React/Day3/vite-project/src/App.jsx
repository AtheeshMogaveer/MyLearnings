import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Profile'
import Job from './Job'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Profile name="Atheesh" profession="Student" />
   <Profile name="Sosuke" profession="Soul Reaper" />
   <ul>
    <Job name="Developer" />
    <Job name="Accountant" />
    <Job name="Manager" />
   </ul>
   </>
  )
}

export default App

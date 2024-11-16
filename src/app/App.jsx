import { useState } from 'react'
import './App.css'
import Header from "../components/Header.jsx";
import About from "../components/About.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={'w-full overflow-hidden'}>
        <Header/>
        <About/>
    </div>
  )
}

export default App

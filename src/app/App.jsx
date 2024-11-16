import { useState } from 'react'
import './App.css'
import Header from "../components/Header.jsx";
import Projects from "../components/Projects.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={'w-full overflow-hidden'}>
        <Header/>
        <Projects/>
    </div>
  )
}

export default App

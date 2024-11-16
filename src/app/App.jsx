import { useState } from 'react'
import './App.css'
import Header from "../components/Header.jsx";
import Projects from "../components/Projects.jsx";
import About from "../components/About.jsx";
import Testimonials from "../components/Testimonials.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={'w-full overflow-hidden'}>
        <Header/>
        <About/>
        <Projects/>
        <Testimonials/>
    </div>
  )
}

export default App

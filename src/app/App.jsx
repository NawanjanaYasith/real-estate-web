import { useState } from 'react'
import './App.css'
import Header from "../components/Header.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={'w-full overflow-hidden'}>
        <Header/>
    </div>
  )
}

export default App

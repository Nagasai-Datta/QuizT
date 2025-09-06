import { useState } from 'react'
import SelectionCard from './selectionCard.jsx'
import './App.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>QuizIT</h1>
    <div className="back">
      
      <SelectionCard></SelectionCard>
    </div>
    </>
  )
}

export default App

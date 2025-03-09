import Die from "./components/Die"
import { useState } from "react"

function App() {


  const [numbers, setNumbers] = useState(generateAllNewDice)


  function generateAllNewDice() {
    const new_arr = []
    for(let i = 0; i < 10; i++){
      new_arr.push(Math.floor(Math.random()*7))
    }
    return new_arr
  }

  const newDie = numbers.map((number) => <Die value={number}/>)



  return (
    <main>
      <div className="die-container">
        {newDie}
      </div>

    </main>
  )
}

export default App

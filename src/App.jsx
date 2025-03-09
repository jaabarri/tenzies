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

  function rollDice() {
    setNumbers(generateAllNewDice)
  }

  const newDie = numbers.map((number) => <Die value={number}/>)



  return (
    <main>
      <div className="die-container">
        {newDie}
      </div>

      <button class="roll-dice" onClick={rollDice}>Roll Dice</button>

    </main>
  )
}

export default App

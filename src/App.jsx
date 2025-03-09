import Die from "./components/Die"
import { useState } from "react"

function App() {


  const [numbers, setNumbers] = useState(generateAllNewDice)


  function generateAllNewDice() {
    const new_arr = []
    for(let i = 0; i < 10; i++){
      let random = Math.floor(Math.random()*7)
      new_arr.push({value: random, held: false})
    }
    return new_arr
  }

  function rollDice() {
    setNumbers(generateAllNewDice)
  }

  const newDie = numbers.map((dieObj) => <Die value={dieObj.value}/>)



  return (
    <main>
      <div className="die-container">
        {newDie}
      </div>

      <button className="roll-dice" onClick={rollDice}>Roll Dice</button>

    </main>
  )
}

export default App

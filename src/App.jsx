import Die from "./components/Die"
import { useState } from "react"
import { nanoid } from "nanoid"

function App() {


  const [numbers, setNumbers] = useState(generateAllNewDice)

  const hold = (id) => {
    console.log(id)
  }


  function generateAllNewDice() {
    const new_arr = []
    for(let i = 0; i < 10; i++){
      let random = Math.floor(Math.random()*7)
      new_arr.push(
        { value: random,
          held: false,
          id: nanoid()
        }
      )
    }
    return new_arr
  }

  function rollDice() {
    setNumbers(generateAllNewDice)
  }

  const diceElements = numbers.map((dieObj) => 
    <Die 
      key={dieObj.id} 
      id={dieObj.id} 
      value={dieObj.value} 
      held={dieObj.held}
      isHeld={hold}
    />)

  console.log(diceElements)



  return (
    <main>
      <div className="die-container">
        {diceElements}
      </div>

      <button className="roll-dice" onClick={rollDice}>Roll Dice</button>

    </main>
  )
}

export default App

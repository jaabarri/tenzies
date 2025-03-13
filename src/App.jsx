import Die from "./components/Die"
import { useState } from "react"
import { nanoid } from "nanoid"

function App() {


  const [numbers, setNumbers] = useState(generateAllNewDice)




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

  const hold = (id) => {
    setNumbers((prevNumbers) => 
      prevNumbers.map((number) => 
        number.id === id ? {...number, held: !number.held} : number
      )
    )
  }

  function rollDice() {
    console.log(generateAllNewDice)
    setNumbers(prevNumbers => 
      prevNumbers.map(number =>
        number.held ? number : {...number, value: Math.floor(Math.random()*7)}
      )
    )
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

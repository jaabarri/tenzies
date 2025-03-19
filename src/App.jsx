import Die from "./components/Die"
import { useState } from "react"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

function App() {


  const [numbers, setNumbers] = useState(generateAllNewDice)
  const gameWon = numbers.every(item => item.held) && numbers.every(item => item.value === numbers[0].value)



  if(gameWon) {
    document.getElementsByClassName("roll-dice").innerText = "New Game"
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
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="die-container">
        {diceElements}
      </div>

      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll Dice"}
      </button>

    </main>
  )
}

export default App

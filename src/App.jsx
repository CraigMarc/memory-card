import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Card'
import { Header } from './Header'
import { NewGame } from './NewGame'

function App() {

  const [clickedOn, setClickedOn] = useState([])
  const [loose, setLoose] = useState()
  const [bestGame, setBestGame] = useState()

  const handleClick = (e) => {
    let card = e.currentTarget.id
    if (clickedOn.indexOf(card) != -1 && clickedOn.length > 0) {
      setLoose("true")
    }
    
    //const newClick = [...clickedOn, e.currentTarget.id]
    //setClickedOn([...clickedOn, e.currentTarget.id])
       if (clickedOn.indexOf(card) == -1 || clickedOn.length == 0) {
      setClickedOn((clickedOn) => ([...clickedOn, card]));
    }

  }


  const handleStart = () => {

    setBestGame(clickedOn.length)
    setClickedOn([])
    setLoose()

  }





  //render

  return (
    <>
      <Header
        clickedOn={clickedOn}
        loose={loose}
        bestGame={bestGame}
      />

      <Card
        handleClick={handleClick}
        clickedOn={clickedOn}
        loose={loose}
      />

      <NewGame
        clickedOn={clickedOn}
        loose={loose}
        handleStart={handleStart}
      />

    </>
  )
}

export default App

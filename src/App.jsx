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

  const handleClick = (e) => {
    
    if (clickedOn.indexOf(e.currentTarget.id) != -1) {
      setLoose("true")
    }

    const newClick = [...clickedOn, e.currentTarget.id]
    setClickedOn(newClick)


  }


  const handleStart = () => {
    
    
    setClickedOn([])
    setLoose()

  }





  //render

  return (
    <>
      <Header
        clickedOn={clickedOn}
        loose={loose}
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

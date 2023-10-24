import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Card'
import { Header } from './Header'

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
    
  


  

//render

  return (
    <>
    <Header
    clickedOn={clickedOn}
    loose={loose}
    />

      <Card
        handleClick={handleClick}
      />

    </>
  )
}

export default App

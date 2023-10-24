import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Card'

function App() {

  const [cardArray, setcardArray] = useState([])

  const handleClick = (e) => {
    console.log(e.currentTarget.id)
  }

  return (
    <>


      <Card
        handleClick={handleClick}
      />

    </>
  )
}

export default App

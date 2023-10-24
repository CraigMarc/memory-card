import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Card'

function App() {
  
  const [cardArray, setcardArray] = useState([])

  //create random array

  function shuffle() {
    let array = [0, 1, 2, 3, 4, 5]
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    
    return array
  }

 let randomArray = shuffle()


  return (
    <>


      <Card />
   
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Card'
import { Header } from './Header'
import { NewGame } from './NewGame'

function App() {


  //states
  const [clickedOn, setClickedOn] = useState([])
  const [loose, setLoose] = useState()
  const [bestGame, setBestGame] = useState(0)
  const [data, setData] = useState({hits:[1,2,3,4,5,6,7,8,9,10,11,12,13]})

   //make api call
   //const weatherUrl = "https://api.weatherapi.com/v1/forecast.json?key=53333bca513f49888a303110233008&days=3&q=red bank nj"
   const picUrl = "https://pixabay.com/api/?key=40272701-d1f0bb34d10cfd0d1c847f1fd&q=animals&image_type=photo"

   const fetchInfo = async () => { 
     return fetch(picUrl) 
             .then((res) => res.json()) 
             .then((d) => setData(d)) 
     }
    
     
     useEffect(() => {
       fetchInfo();
     }, [])
 
    

//event handlers
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
        data={data}
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

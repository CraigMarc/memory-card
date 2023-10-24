import map from './assets/map.png';
import pizza1 from './assets/pizza1.jpeg';
import pizza from './assets/pizza.jpeg';
import pizza2 from './assets/pizza2.jpeg';
import pizza3 from './assets/pizza3.jpeg';
import pizza4 from './assets/pizza4.jpeg';

function Card(props) {

    const {
        handleClick,

    } = props;

    let picArray = [map, pizza1, pizza, pizza2, pizza3, pizza4]

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
<div className="cardContainer">
<div id={randomArray[0]} className="card" onClick={handleClick}>
    <p>{randomArray[0]}</p>
    <img className="img" src={picArray[randomArray[0]]}></img>
    </div>

    <div id={randomArray[1]} className="card" onClick={handleClick}>
    <p>{randomArray[1]}</p>
    <img className="img" src={picArray[randomArray[1]]}></img>
    </div>

    <div id={randomArray[2]} className="card" onClick={handleClick}>
    <p>{randomArray[2]}</p>
    <img className="img" src={picArray[randomArray[2]]}></img>
    
    </div>

    <div id={randomArray[3]} className="card" onClick={handleClick}>
    <p>{randomArray[3]}</p>
    <img className="img" src={picArray[randomArray[3]]}></img>
    </div>

    <div id={randomArray[4]} className="card" onClick={handleClick}>
    <p>{randomArray[4]}</p>
    <img className="img" src={picArray[randomArray[4]]}></img>
    </div>

    <div id={randomArray[5]} className="card" onClick={handleClick}>
    <p>{randomArray[5]}</p>
    <img className="img" src={picArray[randomArray[5]]}></img>
    </div>
</div>
</>

)
    
}


export { Card };
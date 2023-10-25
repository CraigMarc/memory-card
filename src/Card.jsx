import map from './assets/map.png';
import pizza1 from './assets/pizza1.jpeg';
import pizza from './assets/pizza.jpeg';
import pizza2 from './assets/pizza2.jpeg';
import pizza3 from './assets/pizza3.jpeg';
import pizza4 from './assets/pizza4.jpeg';

function Card(props) {

    const {
        handleClick,
        clickedOn,
        loose,
        data,

    } = props;

    //pic array from files if want to stop using api *******

    //let picArray = [map, pizza1, pizza, pizza2, pizza3, pizza4]

    //console.log(data.hits[0])

    //pic array from api
    /*
    let picArray = [data.hits[0].previewURL,
    data.hits[1].webformatURL,
    data.hits[2].webformatURL,
    data.hits[3].webformatURL,
    data.hits[4].webformatURL,
    data.hits[5].webformatURL,
    data.hits[6].webformatURL,
    data.hits[7].webformatURL,
    data.hits[8].webformatURL,
    data.hits[9].webformatURL, 
    data.hits[10].webformatURL, 
    data.hits[11].webformatURL,
    data.hits[12].webformatURL]*/

    let picArray = []

    for (let i=0; i<=12; i++){
        picArray.push(data.hits[i].webformatURL)
    }


    //disable click
    let disable = false
    if (clickedOn.length == 12 || loose == "true") {
        disable = true
    }
    //create random array

    function shuffle() {
        let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        let currentIndex = array.length, randomIndex;

    
        while (currentIndex > 0) {

            
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array
    }

    let randomArray = shuffle()

    return (
        <>
            <div className="cardContainer">
                <div disabled={disable} id={randomArray[0]} className="card" onClick={handleClick}>
                   
                    <img className="img" src={picArray[randomArray[0]]}></img>
                </div>

                <div disabled={disable} id={randomArray[1]} className="card" onClick={handleClick}>
                   
                    <img className="img" src={picArray[randomArray[1]]}></img>
                </div>

                <div disabled={disable} id={randomArray[2]} className="card" onClick={handleClick}>
                    
                    <img className="img" src={picArray[randomArray[2]]}></img>

                </div>

                <div disabled={disable} id={randomArray[3]} className="card" onClick={handleClick}>
                                       
                <img className="img" src={picArray[randomArray[3]]}></img>
                </div>

                <div disabled={disable} id={randomArray[4]} className="card" onClick={handleClick}>
                   
                    <img className="img" src={picArray[randomArray[4]]}></img>
                </div>

                <div disabled={disable} id={randomArray[5]} className="card" onClick={handleClick}>
                   
                    <img className="img" src={picArray[randomArray[5]]}></img>
                </div>

                <div disabled={disable} id={randomArray[5]} className="card" onClick={handleClick}>
                    
                    <img className="img" src={picArray[randomArray[6]]}></img>
                </div>

                <div disabled={disable} id={randomArray[7]} className="card" onClick={handleClick}>
                    
                    <img className="img" src={picArray[randomArray[7]]}></img>
                </div>

                <div disabled={disable} id={randomArray[8]} className="card" onClick={handleClick}>
                   
                    <img className="img" src={picArray[randomArray[8]]}></img>
                </div>

                <div disabled={disable} id={randomArray[9]} className="card" onClick={handleClick}>
                   
                    <img className="img" src={picArray[randomArray[9]]}></img>
                </div>

                <div disabled={disable} id={randomArray[10]} className="card" onClick={handleClick}>
                   
                    <img className="img" src={picArray[randomArray[10]]}></img>
                </div>

                <div disabled={disable} id={randomArray[11]} className="card" onClick={handleClick}>
                    
                    <img className="img" src={picArray[randomArray[11]]}></img>
                </div>

            </div >
           
        </>

    )

}


export { Card };
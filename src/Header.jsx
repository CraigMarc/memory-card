function Header (props) {

    const {
        clickedOn,
        loose,
        bestGame,

    } = props;

    const renderMessage = () => {
       if (clickedOn.length == 12) {
            return (
                <h1>You Win</h1>  
            )
        }

        if (loose == "true") {
            return (
                <h1>You Lose</h1> 
            )
        }

      };

   

   

    return (
        
        <div>
            <h1>Memory Game</h1>
            <p>Get points for clicking on an image but don't click on the same image more then once.</p>
        {renderMessage()}
        <p>Number of Clicks: {clickedOn.length}</p>
        <p>Best Game: {bestGame}</p>
        </div>
        


    )



}


export { Header };
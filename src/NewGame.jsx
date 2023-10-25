function NewGame(props) {

    const {
        clickedOn,
        loose,
        handleStart,

    } = props;

   if (clickedOn.length == 12 || loose == "true") {
      
        return (
            <div>
                <button onClick={handleStart}>New Game</button>
            </div>


        )
        }




}

export { NewGame };
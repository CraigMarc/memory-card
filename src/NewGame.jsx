function NewGame(props) {

    const {
        clickedOn,
        loose,

    } = props;

   if (clickedOn.length == 6 || loose == "true") {
        console.log(loose)
        return (
            <div>
                <button>New Game</button>
            </div>


        )
        }




}

export { NewGame };
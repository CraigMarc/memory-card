function Header(props) {

    const {
        clickedOn,
        loose,
        bestGame,
        error,
        searchResult,

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
            <div className="headerContainer">
            <h1>{searchResult} Memories</h1>
            <p>Get points for clicking on an image but don't click on the same image more then once.</p>
           
            </div>
            

            <div className="gameInfoContainer">
                <div>
                    <p>Number of Clicks: {clickedOn.length}</p>
                    <p>Best Game: {bestGame}</p>
                </div>
                <div className="winContainer">
                    {renderMessage()}
                </div>
            </div>
        </div>



    )



}


export { Header };
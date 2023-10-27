

function FindPics(props) {

    const {
        handlePicSubmit,
        data,
        error,

    } = props;

    
   const renderError = () => {
        if (error == "true") {
            return (
                <h2>Pictures did not load try something else</h2>
            )
        }

    }

    return (

        <div className="findPicContainer">
            
            <h1>Memory Game</h1>
            <h3>Fill in the form with the type of pictures you want to play the game</h3>
            <h3>example: mountains, cartoons animals or anything really</h3>
            <form onSubmit={handlePicSubmit}>
                <label>
                    {' '}
                    <input
                        id="pictures"
                        type="text"
                        name="pictures"
                        placeholder="search for pictures"
                        required

                    />
                </label>
                <div className="submitContainer">
                    <input className="submit" type="submit" />
                </div>
            </form>
        {renderError()}
        </div>
    )

}

export { FindPics };
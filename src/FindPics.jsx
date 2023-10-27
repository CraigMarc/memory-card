

function FindPics(props) {

    const {
        handlePicSubmit,
        data,

    } = props;

    let dataArray = data.hits
    //console.log(dataArray)
    if (dataArray.length < 12) {
        return (
            <>
            <p>no pics found try something else</p>
            </>
        )
    }

    return (

        <div className="findPicContainer">
            <h1>Memory Game</h1>
            <h3>Fill in the form with the type of pictures you want to play the game</h3>
            <h3>example: mountains, cartoons animals or anything really</h3>
            <form onSubmit={handlePicSubmit}>
                <label>
                    Pictures {' '}
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

        </div>
    )

}

export { FindPics };
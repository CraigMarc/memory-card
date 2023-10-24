function Header (props) {

    const {
        clickedOn,
        loose,

    } = props;

    if (clickedOn.length == 6) {
        return (
            <h1>You Win</h1>
        )
    }

    if (loose == "true") {
        return (
            <h1>You Loose</h1>
        )
    }

    return (
        <>
        
        <p>Number of Clicks {clickedOn.length}</p>
        
        </>


    )



}


export { Header };
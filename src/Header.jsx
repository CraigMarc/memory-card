function Header (props) {

    const {
        clickedOn,
        loose,

    } = props;

    const renderMessage = () => {
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

      };

   

   

    return (
        
        <div>
        {renderMessage()}
        <p>Number of Clicks {clickedOn.length}</p>
        </div>
        


    )



}


export { Header };
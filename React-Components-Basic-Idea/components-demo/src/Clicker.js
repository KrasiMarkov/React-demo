import { useState } from 'react';

export const Clicker = () => {

    const [clicks, setClicks] = useState(0);

    let ClickHandler = (e) => {

        setClicks(clicks => clicks + 1);
    }

    const dangerClicks = clicks > 20;

    const finishedClicks = clicks > 30;

    if(finishedClicks) {
       
        return (
           
            <h1>Finisked Clicks</h1>
        );
    }

    return(
        <div>
            <div>
                {dangerClicks && <h1>Danger Clicks</h1>}
                {clicks > 10 ? <h1>Medium Clicks</h1> : <h3>Normal Clicks</h3>}
            </div>
            <button onClick={ClickHandler}>{clicks}</button>
        </div>

    );
}
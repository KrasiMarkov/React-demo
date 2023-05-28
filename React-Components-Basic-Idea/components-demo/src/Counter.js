import { useState } from "react";

export const Counter = (props) => {

    const [clicks, setClicks] = useState(0);


    let incrementFunc = () => {

        setClicks(clicks => clicks + 1);
    };

    let decrementFunc = () => {
       
        setClicks(clicks => clicks - 1);

    };

    let clearFunc = () => {

        setClicks(0);
    };

    return (
   
       <div>
          <h1>{clicks}</h1>
          <button onClick={decrementFunc}>-</button>
          <button onClick={clearFunc}>Clear</button>
          <button onClick={incrementFunc}>+</button>
       </div>

    );

}
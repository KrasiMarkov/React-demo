import React, { useEffect, useState } from "react";

export const CharacterList = () => {

   const [characters, setCharacters] = useState([]);

    useEffect(() => {

     fetch('https://swapi.dev/api/people')
     .then(res => res.json())
     .then(result => {

         setCharacters(result.results);
      });

    }, []);

    return(
       <ul>
        {characters.map(x => 
            <li key={x.name}>{x.name}</li>
        )}
       </ul>
    );
}
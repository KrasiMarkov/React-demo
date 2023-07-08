import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Starships = () => {
    
    const {starshipId} = useParams();
    const [starship, SetStarship] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${starshipId}`)
           .then(res => res.json())
           .then(result => {
              SetStarship(result)
           });
    }, [starshipId]);

    const nextStarshipHandler = () => {

        navigate(`/starships/${Number(starshipId) + 1}`);

    }


    return(
        <>
          <h1>Starships Page</h1>
          <h1>Starship {starshipId} special</h1>

          <h2>{starship.name}</h2>
          <h2>{starship.model}</h2>
          <h2>{starship.manufacturer}</h2>


          <button onClick={nextStarshipHandler}>Next</button>
        </>
    );
}
import React from 'react';

export const Book = (props) => {


    return (
       <ul>
           <li>{props.title}</li>
           <li>{props.author}</li>
           <li>{props.country}</li>
           <li>{props.language}</li>
           <li>{props.year}</li>
           <br/>
       </ul>
    )
}
import React from 'react';
import { Book } from './Book';
export const BookList = (props) => {


    return(
       <ul>
         <Book 
           title={props.books[0].title} 
           author={props.books[0].author}
           country={props.books[0].country}
           language={props.books[0].language}
           year={props.books[0].year}
        />
        <Book 
           title={props.books[1].title} 
           author={props.books[1].author}
           country={props.books[1].country}
           language={props.books[1].language}
           year={props.books[1].year}
        />
        
        <Book 
           title={props.books[2].title} 
           author={props.books[2].author}
           country={props.books[2].country}
           language={props.books[2].language}
           year={props.books[2].year}
        />
       </ul>
    );
}
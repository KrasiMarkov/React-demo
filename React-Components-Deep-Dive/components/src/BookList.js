import React, { useEffect } from "react";
import { Book } from "./Book";

export const BookList = (props) => {


    let list = [];

    list = props.books.map(x => <Book key={x.title} {...x}/>);


    return(
       <ul>
        {list}
       </ul>
    );
}
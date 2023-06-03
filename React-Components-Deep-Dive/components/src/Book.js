import React, { useState } from "react";
import { useEffect } from "react";
import styles from './Book.module.css';

export const Book = (props) => {

    const [highlighted, setHighlighted] = useState(false);
    const [marked, setMarked] = useState(false);

    useEffect(() => {
        console.log('Mounting');
    }, []);

    useEffect(() => {
        console.log('Updating');
    }, [highlighted]);

    useEffect(() => {
        console.log('Updating');
    }, [marked]);

    let clickHandler = () => {

        setHighlighted(state => !state);
    };

    let doubleClickHandler = () => {

        setMarked(state => !state);
    }

    let style = {};

    if(highlighted) {

        style.backgroundColor = 'blue';
    }

    if(marked) {

        style.backgroundColor = 'red';
    }

    return (
    <li onClick={clickHandler} onDoubleClick={doubleClickHandler} style={style} className={styles['book-item']}>
        <div>{props.title}</div>
        <div>{props.author}</div>
        <div>{props.country}</div>
        <div>{props.language}</div>
        <div>{props.year}</div>
        <br/>
    </li>
    );
}
import React from "react";
import logo from './headphones-alt-solid.svg';
import './Phonetic.css';

export default function Phonetic(props) {
    console.log(props.phonetic);
        return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            <img src={logo} className="Speaker-logo" alt="logo" /></a> </div>
        )
   }
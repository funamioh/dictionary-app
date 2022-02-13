import React from "react";
import "../styles/Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="phonetic-button"
      >
        Listen📣
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}

import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "../styles/Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <section key={index}>
              <Phonetic phonetic={phonetic} />
            </section>
          );
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
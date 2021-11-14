import React from "react";

export default function Meaning(props) {
    console.log(props.meaning);
  return (
    <div className="Meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map(function(definition, index) {
        return (
            <section key={index}>
              <p>
                {definition.definition}
                <br />
                <em>{definition.example}</em>
              </p>
              </section>
        );
    })}
    </div>
   );
}
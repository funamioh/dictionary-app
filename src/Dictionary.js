import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventdefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
  <div className="Dictionary">
  <div className="row">
  <div className="mb-3">
    <section>
    <h1>What do you want to look up?</h1>
    <form onSubmit={handleSubmit}>
    <input type="search" onChange={handleKeywordChange} 
    defaultValue={props.defaultKeyword} className="input-window col-9" id="search-word" placeholder="Search a word"></input>
    </form>
    <div className="hint">
      suggested words: honesty, kindness, beautiful...
    </div>
    </section>
    <Results results={results} />
  </div>
</div>
    </div>
    );
} else {
  load();
}
}

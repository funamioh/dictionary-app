import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

    return (
  <div className="Dictionary">
  <div className="row">
  <div className="mb-3">
    <form onSubmit={search}>
    <input type="search" onChange={handleKeywordChange} className="input-window col-9" id="search-word" placeholder="Search a word"></input>
    </form>
    <Results results={results} />
  </div>
</div>
    </div>
    );
}


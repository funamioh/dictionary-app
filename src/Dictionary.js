import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDictResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handlePexelResponse(response) {
    
  }

  function search(event) {
  
    // documentation: https://dictionaryapi.dev/e
    let DictapiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(DictapiUrl).then(handleDictResponse);


    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const client = createClient('563492ad6f91700001000001446af9bcbc774a39a62ecf03b527f216');
    axios.get(pexelsApiUrl, { headers: { 'Authorization': + basicAuth }}).then(handlePexelResponse);


  }

  function handleSubmit(event) {
    event.preventDefault();
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
    <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} className="input-window col-9" id="search-word" placeholder="Search a word"></input>
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
    return "Loading";
  }
}
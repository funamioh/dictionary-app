import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import './Dictionary.css';

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search(event) {
  
    // documentation: https://dictionaryapi.dev/e
    let DictapiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(DictapiUrl).then(handleDictResponse);


    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let pexelApiKey = '563492ad6f91700001000001446af9bcbc774a39a62ecf03b527f216';
    let headers = {authorization: `Bearer ${pexelApiKey}`}
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
    <Photos photos={photos} />
  </div>
</div>
    </div>
    );
} else {
    load();
    return "Loading";
  }
}
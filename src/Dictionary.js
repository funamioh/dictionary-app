import React, {useState} from "react";
import axios from "axios";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
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
  </div>
  <button type="submit" className="btn btn-primary col-3">Submit</button>
</div>
    </div>
    );
}


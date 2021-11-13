import React from 'react';
import logo from './prototype-logo.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Dictionary
        </h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center App-footer">This project was coded by Miho Funayama and is <a href="https://github.com/funamioh/dictionary-project">open-sourced on GitHub</a> and <a href="https://condescending-kepler-1383cc.netlify.app/">hosted by Netlify</a>.</footer>
      </div>
  );
}

export default App;

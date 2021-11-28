import React from 'react';
import logo from './dictionary-icon.svg';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><img src={logo} className="App-logo" alt="logo" />
          Dictionary
        </h1>
      </header>
      <main>
        <Dictionary defaultKeyword="dream" />
      </main>
      <footer className="text-center App-footer">This project was coded by Miho Funayama and is <a href="https://github.com/funamioh/dictionary-app">open-sourced on GitHub</a> and <a href="https://serene-goldwasser-29304a.netlify.app">hosted by Netlify</a>.</footer>
      </div>
  );
}

export default App;

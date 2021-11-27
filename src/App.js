import React from 'react';
import logo from './spell-check-solid.svg';
import './App.css';
import Dictionary from "./Dictionary";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><img src={logo} className="App-logo" alt="logo" />
          Dictionary
        </h1>
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="text-center App-footer">This project was coded by Miho Funayama and is <a href="https://github.com/funamioh/dictionary-app">open-sourced on GitHub</a> and <a href="https://serene-goldwasser-29304a.netlify.app">hosted by Netlify</a>.</footer>
      </div>
  );
}

export default App;

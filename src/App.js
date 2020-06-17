import React from 'react';
import logo from './logo.svg';
import './App.css';
import JakisDomyslny, { zmienna2, zmienna4, testowa, testowa2 } from './App.const.js';
import HelloWorld from './components/HelloWorld';

function App() {

  const mojTekst = 'CodeMe! React lessons!';
  // testowa('Nieoczekiwany błąd');

  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          {zmienna2.a}
          {zmienna4[1]}
          {testowa2()}
          {JakisDomyslny()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

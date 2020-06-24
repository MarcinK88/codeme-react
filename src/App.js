import React from 'react';
import logo from './logo.svg';
import './App.css';
import JakisDomyslny, { zmienna2, zmienna4, testowa, testowa2 } from './App.const.js';
import HelloWorld from './components/HelloWorld';
import Clock from './components/Clock';
import Message from './components/Message';
import Clicker from './components/Clicker';
import Click from './components/Click';
import Image from './components/Image';
import Text from './components/Text';
import TwoColumns from './components/TwoColumns';
import ClickState from './components/ClickState';

function App() {

  const mojTekst = 'CodeMe! React lessons!';
  // testowa('Nieoczekiwany błąd');
  const zmiennazTytulem = "tytul ze zmiennej";
  const tytulZFunkcji = () => 'zwraca jakis tytul z funkcji';
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <Clock />
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
      <Message titleFunction={tytulZFunkcji} text="ala ma kota" />
      <Message title={zmiennazTytulem} text="ala ma kota2" />
      <Message title={tytulZFunkcji()} text="ala ma kota3" />
      <Message title="tytul komponentu" text="ala ma kota4" />
      <Message title="tytull">
        <p>Ala ma kota</p>
        <p>Ala ma kota</p>
        <p>Ala ma kota</p>
        <p>Ala ma kota</p>
      </Message>
      <Clicker />
      <Clicker />
      <Clicker />
      <Click defaultValue={5} />
      <Click />
      <Click />
      <Click />
      <TwoColumns>
        <Text title="alamakota"> asdf</Text>
        <Image src={require("./images/obrazek.jpg")} />
      </TwoColumns>
      <TwoColumns>
        <Image src={require("./images/obrazek.jpg")} />
        <Text title="alamakota"> asdf</Text>
      </TwoColumns>
      <ClickState />

    </div>
  );
}

export default App;

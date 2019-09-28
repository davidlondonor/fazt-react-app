import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation titulo="Mi Primera Navegacion" />
      <Navigation titulo="MenuDos" />
      <Navigation titulo="Inicio" />
    </div>
  );
}

export default App;

{/* 
          Editarlo <code>src/App.js</code> Hola David
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
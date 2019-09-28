import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import Navigation from './components/Navigation'
import { todos } from './todos.json'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos,
    }
  }

  render() {
    const todos = this.state.todos.map((todos, i) => {
      return (
        <div className="card">
          {todos.title}
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">Tareas</a>
        </nav>
        {todos}
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
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
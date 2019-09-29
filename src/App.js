import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import Navigation from './components/Navigation'
import { todos } from './todos.json'
import TodoForm from './componets/TodoForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index) {
    if (window.confirm('Are you sure you want to delete it?')) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      })
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todos.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">{todos.priority}</span>
            </div>
            <div className="card-body">
              <p>{todos.description}</p>
              <p> {todos.responsible}</p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">Tareas
            <span className="badge badge-pill badge-light ml-2">{this.state.todos.length}</span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <TodoForm onAddTodo={this.handleAddTodo} />
            {todos}
          </div>
          <div className="card-footer">
            <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>
            </button>
          </div>
        </div>

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
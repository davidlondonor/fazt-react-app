import React, { Component } from "react";

import "./App.css";
//import Navigation from './componets/Navigation'
import { todos } from "./todos.json";
import TodoForm from "./componets/TodoForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      todoAEditar: null
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    // this.removeTodo = this.removeTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  removeTodo(index) {
    if (window.confirm("Are you Sure You want to Delete it?")) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index;
        })
      });
    }
  }

  editTodo(todo) {
    this.setState({ todoAEditar: todo });
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4 ">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="car-body">
              <p>{todo.description}</p>
              <p>{todo.responsible}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}
              >
                Delete
              </button>
              <button
                className="btn btn-primary px-2"
                onClick={this.editTodo.bind(this, todo)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="www.google.com" className="text-white">
            Tareas
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <img src="https://via.placeholder.com/50x50" alt="Hola"></img>
        {/* {todos} */}
        <div className="container">
          <div className="row mt-4">
            {todos}
            <TodoForm onAddTodo={this.handleAddTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            resposible: '',
            description: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleInput.bind(this);
    }

    handleInput(e) {
        console.log(e.target.value, e.target.name);
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo
        console.log('Enviando Data a la lata')
    }


    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            placeholder="Responsible"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            placeholder="Description"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name='priority'
                            className='form-control'>
                            <option value="">Low</option>
                            <option value="">Medium</option>
                            <option value="">High</option>
                        </select>
                    </div>
                    <button type='submit' className="btn btn-primary" >SAVE</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;
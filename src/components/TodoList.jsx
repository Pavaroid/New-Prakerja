import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      name: "",
      description: "",
      deadline: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, description, deadline } = this.state;
    if (name.trim() === "") return; // Validasi minimal name diisi
    const newTask = { name, description, deadline };
    this.setState({
      tasks: [...this.state.tasks, newTask],
      name: "",
      description: "",
      deadline: "",
    });
  };

  render() {
    return (
      <section>
        <h2>Todo List</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="deadline">Deadline:</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              className="form-control"
              value={this.state.deadline}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </form>
        <ul className="list-group mt-3">
          {this.state.tasks.map((task, index) => (
            <li key={index} className="list-group-item">
              <strong>{task.name}</strong>
              {task.description && <p>{task.description}</p>}
              {task.deadline && <p>Deadline: {task.deadline}</p>}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;

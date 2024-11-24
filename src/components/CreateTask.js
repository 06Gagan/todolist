import React, { Component } from "react";

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({
      task: "",
    });
  }
  handleChange(e) {
    this.setState({
      task: e.target.value,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          onChange={this.handleChange}
          value={this.state.task}
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

import React, { Component } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem("tasks")) || [], // Load from localStorage
      editingTaskIndex: null, // Track which task is being edited
    };
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  componentDidUpdate() {
    // Save tasks to localStorage whenever state updates
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  }

  createTask(task) {
    if (task.trim() === "") {
      alert("Task cannot be empty");
      return;
    }
    const newTask = { taskName: task.trim(), isCompleted: false };
    const allTasks = [...this.state.tasks, newTask];
    this.setState({ tasks: allTasks });
  }

  deleteTask(index) {
    const allTasks = this.state.tasks.filter((_, i) => i !== index);
    this.setState({ tasks: allTasks });
  }

  updateTask(index, newTaskName) {
    const allTasks = [...this.state.tasks];
    allTasks[index].taskName = newTaskName.trim();
    this.setState({ tasks: allTasks, editingTaskIndex: null }); // Reset editing state
  }

  render() {
    return (
      <div>
        <h1>Task List</h1>
        <CreateTask createTask={this.createTask} />
        <br />
        <TaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          updateTask={this.updateTask}
          editingTaskIndex={this.state.editingTaskIndex}
          setEditingTaskIndex={(index) =>
            this.setState({ editingTaskIndex: index })
          }
        />
      </div>
    );
  }
}

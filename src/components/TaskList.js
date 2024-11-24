import React, { Component } from "react";
import TaskItems from "./TaskItems";

export default class TaskList extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tasks.map((task, index) => {
              return (
                <TaskItems
                  key={index}
                  task={task}
                  id={index}
                  deleteTask={this.props.deleteTask}
                  updateTask={this.props.updateTask}
                  editingTaskIndex={this.props.editingTaskIndex}
                  setEditingTaskIndex={this.props.setEditingTaskIndex}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

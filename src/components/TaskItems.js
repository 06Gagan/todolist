import React, { Component } from "react";

export default class TaskItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedTaskName: this.props.task.taskName,
    };
  }

  handleEdit() {
    this.props.setEditingTaskIndex(this.props.id);
  }

  handleSave() {
    this.props.updateTask(this.props.id, this.state.editedTaskName);
  }

  handleCancel() {
    this.props.setEditingTaskIndex(null);
    this.setState({ editedTaskName: this.props.task.taskName }); // Reset to original
  }

  render() {
    const { task, id, editingTaskIndex } = this.props;

    if (editingTaskIndex === id) {
      // Edit mode
      return (
        <tr>
          <td>
            <input
              type="text"
              value={this.state.editedTaskName}
              onChange={(e) =>
                this.setState({ editedTaskName: e.target.value })
              }
            />
          </td>
          <td>
            <button onClick={() => this.handleSave()}>Save</button>
            <button onClick={() => this.handleCancel()}>Cancel</button>
          </td>
        </tr>
      );
    } else {
      // View mode
      return (
        <tr>
          <td>
            <span>{task.taskName}</span>
          </td>
          <td>
            <button onClick={() => this.handleEdit()}>Edit</button>
            <button onClick={() => this.props.deleteTask(id)}>Delete</button>
          </td>
        </tr>
      );
    }
  }
}

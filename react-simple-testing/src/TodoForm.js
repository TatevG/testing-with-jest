import React, { Component } from "react";

class TodoForm extends Component {
  addTodo(e) {
    e.preventDefault();
    if (!this.input.value.length) return;

    this.props.addTodo(this.input.value);
    this.input.value = "";
  }

  render() {
    return (
      <form action="#" onSubmit={this.addTodo.bind(this)}>
        <input type="text" ref={ref => (this.input = ref)} />
        <button type="submit">add todo</button>
      </form>
    );
  }
}

export default TodoForm;

import React from 'react';
import './Todo.scss';

const Todo = React.createClass({

  render(){
    return(
      <li
        className="Todo"
        style={{textDecoration: this.props.todo.completed ? 'line-through' : ''}}
        onClick={this.props.handlerComplete}
      >
        {this.props.todo.text} <input type="button" value="X" />
      </li>
    );
  }
});

export default Todo;

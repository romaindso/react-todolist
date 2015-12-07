import React from 'react';
import './Todo.scss';

const Todo = React.createClass({

  render(){
    return(
      <li
        className="Todo"
        style={{textDecoration: this.props.todo.completed ? 'line-through' : ''}}
      >
        <input type="checkbox" checked={this.props.todo.completed} onClick={this.props.handlerComplete}/>
        <span onClick={this.props.handlerComplete}>{this.props.todo.text}</span>
        <input type="button" value="X" onClick={this.props.handlerDelete}/>
      </li>
    );
  }
});

export default Todo;

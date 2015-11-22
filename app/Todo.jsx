import React from 'react';

const Todo = React.createClass({

  render(){
    return(
      <li style={{textDecoration: this.props.todo.completed ? 'line-through' : ''}}>
        {this.props.todo.text} <input type="checkbox" value={this.props.todo.completed} onChange={this.props.handlerComplete} />
      </li>
    )
  }
});

export default Todo;

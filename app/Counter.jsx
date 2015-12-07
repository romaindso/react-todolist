import React from 'react';
import './Counter.scss';

const Counter = React.createClass({
  render(){
    var completed = this.props.todos.filter((todo) => {
      return todo.completed;
    });
    return(
      <span className="Counter">Counter : {completed.length} / {this.props.todos.length} </span>
    )
  }
});

export default Counter;

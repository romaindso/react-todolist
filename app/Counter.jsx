import React from 'react';

const Counter = React.createClass({
  render(){
    var completed = this.props.todos.filter((todo) => {
      return todo.completed;
    });
    return(
      <span>Counter : {completed.length} / {this.props.todos.length} </span>
    )
  }
});

export default Counter;

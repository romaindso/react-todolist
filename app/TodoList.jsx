import React from 'react';
import Todo from './Todo.jsx';
import Counter from './Counter.jsx';

const TodoList = React.createClass({

  getInitialState(){
    return {
      todos: []
    }
  },

  handleSubmit(e){
    e.preventDefault();
    var todo = {
      text: this.refs.inputTodo.value,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, todo]
    });
    this.refs.form.reset();
  },

  handleOnComplete(index){
    var todo = this.state.todos[index];
    var todos = this.state.todos;
    todos[index].completed = !todo.completed
    this.setState({
      todos
    });
  },

  handleOnDelete(index){
    var todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({
      todos
    });
  },

  render(){
    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" ref="inputTodo" />
          <input type="button" value="Add" onClick={this.handleSubmit} />
        </form>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <Todo
                todo={todo}
                key={index}
                handlerComplete={this.handleOnComplete.bind(this, index)}
                handlerDelete={this.handleOnDelete.bind(this, index)}
              />
            );
          })}
        </ul>
        <Counter todos={this.state.todos} />
      </div>
    )
  }
});

export default TodoList;

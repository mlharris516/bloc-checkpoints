import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //super is keyword that tells component to call parent's constructor function first then its own constructor
      todos: [
        { description: 'Go to the gym', isCompleted: true },
        { description: 'Go to work', isCompleted: false },
        { description: 'Finish to-do assignment', isCompleted: false }
      ],
      newTodoDescription: ''
    };
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  toggleComplete(index) {
   //toggleComplete is event handler and toggles isCompleted property back and forth between true and false
    const todos = this.state.todos.slice();
    //.slice() makes copy of array
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    //? is ternary operator and is usually shortcut for if statement
    this.setState({ todos: todos });
    //this.setState() changes component's state indirectly
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      //returns JSX
      <div className="App">
      <ul>
      { this.state.todos.map( (todo, index) => 
        <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
          //.map() used to display contents of array  - iterates through array and converts raw data into array of JSX elements 
           )}
         </ul>
         <form onSubmit={ (e) => this.handleSubmit(e) }>
           <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
           <input type="submit" />
         </form>
       </div>
       //arrow function accepts e (event) as parameter and calls this.handleSubmit and passes it e
       //arrow function preserves value of this keyword
     );
   }
 }

export default App;

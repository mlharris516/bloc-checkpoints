import React, { Component } from 'react';

class ToDo extends Component {
    render() {
        return (
            <li>
            <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
                <span>{ this.props.description }</span>
                <a href="#" onClick={(e)=>{ e.preventDefault(); this.props.deleteTodo()}}>Delete</a>
            </li>
        );
      }
}

/* Add a delete button to the ToDo component.
Define a deleteTodo method on the App component. This method should call this.setState() and pass it a new array that doesn't have the to-do item being deleted. Consider using the .filter() array method to accomplish this without mutating state – do not use .splice(), which is a mutable method, unless making a copy of the array first.
Pass the deleteTodo method to the ToDo component as a prop.
Add an onClick event listener to the delete button, and have it call deleteTodo, passing it the index of the to-do.*/
 
export default ToDo;
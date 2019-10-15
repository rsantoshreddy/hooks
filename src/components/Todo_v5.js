// Save Todo in Firebase
import React, { useState } from 'react';
import axios from 'axios';

const Todo = props => {
  const [toDoName, updateTodoName] = useState('');
  const [toDoList, updateTodoList] = useState([]);

  const handleInput = event => {
    updateTodoName(event.target.value);
  };

  const handleAddTodo = () => {
    updateTodoList(toDoList.concat(toDoName));
    axios
      .post('https://todo-8c844.firebaseio.com/todo.json', { name: toDoName })
      .then(res => {
        console.log(res);
        console.log('Added');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className='form-inline'>
        <input value={toDoName} onChange={handleInput} className='form-control mr-sm-2' />
        <button className='btn btn-primary' onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <div className='row'>
        <div className='col'>
          <ul>
            {toDoList.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Todo;

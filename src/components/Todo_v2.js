// Adding event handler and maintaine two separate state for todoName and toDoList
import React, { useState } from 'react';

const Todo = props => {
  const [toDoName, updateTodoName] = useState('');
  /* V2 */
  const [toDoList, updateTodoList] = useState([]);

  const handleInput = event => {
    updateTodoName(event.target.value);
  };

  /* V2 */
  const handleAddTodo = () => {
    console.log(toDoList);
    updateTodoList(toDoList.concat(toDoName));
  };

  return (
    <div>
      <div className='form-inline'>
        <input value={toDoName} onChange={handleInput} className='form-control mr-sm-2' />
        <button className='btn btn-primary' onClick={handleAddTodo}>
          Add
        </button>
      </div>

      {/* V2 */}
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

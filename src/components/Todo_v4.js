// Rules of Hooks
import React, { useState } from 'react';

const Todo = props => {
  // 1. The useState can only be used inside a component
  // 2. The useState can only be used on top level of the component.
  // e.g. useState cant be used inside any function or blocks (if/Switch/loops)

  const [toDoName, updateTodoName] = useState('');
  const [toDoList, updateTodoList] = useState([]);

  const handleInput = event => {
    updateTodoName(event.target.value);
    // wrong place to call useState
    // useState()  // Dont Do this
  };

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

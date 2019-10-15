// The Basic example

import React, { useState } from 'react';
const Todo = props => {
  const [toDoName, updateTodoName] = useState('');

  const handleInput = event => {
    updateTodoName(event.target.value);
  };

  return (
    <div className='form-inline'>
      <input value={toDoName} onChange={handleInput} className='form-control mr-sm-2' />
      <button className='btn btn-primary'>Add</button>
    </div>
  );
};
export default Todo;

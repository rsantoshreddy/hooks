// Merging Todo and TodoList: TodoList into single state Object
import React, { useState } from 'react';

const Todo = props => {
  // const [toDoName, updateTodoName] = useState('');
  // /* V2 */
  // const [toDoList, updateTodoList] = useState([]);

  const [toDoData, updateTodoData] = useState({ toDoName: '', toDoList: [] });
  const { toDoName, toDoList } = toDoData;

  const handleInput = event => {
    updateTodoData({ ...toDoData, toDoName: event.target.value });
  };

  const handleAddTodo = () => {
    updateTodoData({ ...toDoData, toDoList: toDoList.concat(toDoData.toDoName) });
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

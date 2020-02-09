// UseReducer
import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const Todo = props => {
  const [toDoName, updateTodoName] = useState('');
  // const [toDoList, updateTodoList] = useState([]);

  const toDoListReducer = (state, action) => {
    switch (action.type) {
      case 'SET':
        console.log('SET');
        return action.payload;
      case 'ADD':
        return state.concat(action.payload);
      default:
        return state;
    }
  };

  const [toDoList, dispatch] = useReducer(toDoListReducer, []);

  useEffect(() => {
    axios
      .get('https://todo-8c844.firebaseio.com/todo.json')
      .then(res => {
        console.log(res);
        const todoData = res.data;
        const todos = [];
        if (todoData) {
          for (const key in todoData) {
            todos.push({ id: key, name: todoData[key].name });
          }
          dispatch({ type: 'SET', payload: todos });
        }
      })
      .catch(err => {
        console.log(err);
      });

    return () => {
      console.log('Unmounted');
    };
  }, []);

  const handleInput = event => {
    updateTodoName(event.target.value);
  };

  const handleAddTodo = () => {
    axios
      .post('https://todo-8c844.firebaseio.com/todo.json', { name: toDoName })
      .then(res => {
        console.log(res);
        console.log(res);
        const todo = { id: res.name, name: toDoName };
        // updateTodoList(toDoList.concat(todo));
        dispatch({ type: 'ADD', payload: toDoList.concat(todo) });
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
            {toDoList.map(todo => (
              <li key={todo.id}>{todo.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Todo;

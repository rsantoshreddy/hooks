// Converting App.js to context ready
// Demonstrate componentWillUnmount()
// Context
import React, { useState } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import Todo from './components/Todo_v8';

function App() {
  const [page, loadPage] = useState('auth');

  const handlePageLoad = pageName => {
    loadPage(pageName);
  };

  return (
    <div className='container mt-2'>
      <Header loadTodo={handlePageLoad.bind(this, 'todo')} loadAuth={handlePageLoad.bind(this, 'auth')}></Header>
      <hr></hr>
      {page === 'auth' ? <Auth></Auth> : <Todo></Todo>}
    </div>
  );
}

export default App;

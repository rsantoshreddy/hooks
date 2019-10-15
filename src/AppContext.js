import React, { useState } from 'react';
// import Todo from './components/Todo_v1';
// import Todo from './components/Todo_v2';
// import Todo from './components/Todo_v3';
// import Todo from './components/Todo_v4';
// import Todo from './components/Todo_v5';
// import Todo from './components/Todo_v6';
// import Todo from './components/Todo_v7';

// Context
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

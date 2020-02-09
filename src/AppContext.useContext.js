// Make use of useContext
// Context
import React, { useState } from 'react';
import Header from './components/Header.WithContext';
import Auth from './components/Auth.WithContext';
// import Todo from './components/Todo_v8';
import Todo from './components/Todo_v9';
import AuthContext from './auth-context';

function App() {
  const [page, loadPage] = useState('auth');
  const [authStatus, setAuthStatus] = useState(false);

  const handlePageLoad = pageName => {
    loadPage(pageName);
  };

  const login = () => {
    setAuthStatus(true);
  };

  return (
    <div className='container mt-2'>
      <AuthContext.Provider value={{ status: authStatus, login: login }}>
        <Header loadTodo={handlePageLoad.bind(this, 'todo')} loadAuth={handlePageLoad.bind(this, 'auth')}></Header>
        <hr></hr>
        {page === 'auth' ? <Auth></Auth> : <Todo></Todo>}
      </AuthContext.Provider>
    </div>
  );
}

export default App;

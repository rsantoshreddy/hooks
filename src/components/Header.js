import React from 'react';

const Header = props => {
  return (
    <header>
      <button onClick={props.loadTodo} className='btn btn-primary'>
        Todo
      </button>{' '}
      |{' '}
      <button onClick={props.loadAuth} className='btn btn-primary'>
        Auth
      </button>
    </header>
  );
};

export default Header;

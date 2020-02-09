import React, { useContext, Fragment } from 'react';
import AuthContext from '../auth-context';

const Header = props => {
  const auth = useContext(AuthContext);
  console.log(auth.status);
  return (
    <header>
      {auth.status ? (
        <Fragment>
          <button onClick={props.loadTodo} className='btn btn-primary'>
            Todo
          </button>
          {' | '}
        </Fragment>
      ) : null}

      <button onClick={props.loadAuth} className='btn btn-primary'>
        Auth
      </button>
    </header>
  );
};

export default Header;

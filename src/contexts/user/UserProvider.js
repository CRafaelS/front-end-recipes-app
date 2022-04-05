import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import userContext from './index';
import validadeLogin from '../../helpers/validateLogin';

function UserProvider({ children }) {
  const [user, setUser] = useState({ email: '' });
  const [password, setPassword] = useState('');
  const [isLoginValid, setLoginValidate] = useState(false);
  const [isLogged, setLogin] = useState(false);

  useEffect(() => {
    setLoginValidate(
      validadeLogin(user, password),
    );
  }, [user, password]);

  const setEmail = (email) => {
    setUser({
      ...user,
      email,
    });
  };

  const login = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(user));
    setLogin(true);
  };

  const contextValue = {
    isLoginValid,
    isLogged,
    setEmail,
    setPassword,
    login,
  };

  return (
    <userContext.Provider value={ contextValue }>
      {children}
    </userContext.Provider>
  );
}

UserProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default UserProvider;

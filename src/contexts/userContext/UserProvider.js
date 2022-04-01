import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import userContext from './index';
import validadeLogin from '../../helpers/validateLogin';

function UserProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginValid, setLoginValidate] = useState(false);

  useEffect(() => {
    setLoginValidate(
      validadeLogin(email, password),
    );
  }, [email, password]);

  const contextValue = {
    isLoginValid,
    setEmail,
    setPassword,
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

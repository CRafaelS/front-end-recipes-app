import React, { useContext } from 'react';
import Input from '../Components/Input';
import userContext from '../contexts/userContext';

function Login() {
  const { setEmail, setPassword, isLoginValid } = useContext(userContext);
  return (
    <form>
      <Input
        name="email"
        type="email"
        testId="email-input"
        controller={ setEmail }
      />
      <Input
        name="senha"
        type="password"
        testId="password-input"
        controller={ setPassword }
      />
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={ !isLoginValid }
      >
        Enter
      </button>
    </form>
  );
}

export default Login;

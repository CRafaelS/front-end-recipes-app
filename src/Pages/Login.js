import React from 'react';
import Input from '../Components/Input';

function Login() {
  return (
    <form>
      <Input name="email" type="email" testId="email-input" />
      <Input name="senha" type="password" testId="password-input" />
      <button type="submit" data-testid="login-submit-btn">Enter</button>
    </form>
  );
}

export default Login;

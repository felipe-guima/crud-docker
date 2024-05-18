import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from "../../styles/global.js";
import Navbar from '../../components/Navbar/index.js';
import Rodape from '../../components/Rodape/index.js';

// Estilos do cartão
const Card = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 1120px;
  margin: 120px auto;
 
`;

// Estilos do formulário
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 5px;
`;

const Input = styled.input`
  padding: 8px;
  margin: 8px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 90px;
  align-items: center;
  justify-content: center;
  margin: auto;

  &:hover {
    background-color: #0056b3;
  }
`;

function LoginCard() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para autenticação, como enviar os dados para um servidor
    console.log('Username:', username);
    console.log('Password:', password);
    // Resetar os campos do formulário após submissão (opcional)
    setUsername('');
    setPassword('');
  };

  return (
    <>
    <Navbar/>
    <Card>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Label>
          Username:
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Label>
        <Label>
          Password:
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Label>
        <Button type="submit">Login</Button>
        <GlobalStyle/>
      </Form>
    </Card>
    <Rodape/>
    </>
  );
};

export default LoginCard;

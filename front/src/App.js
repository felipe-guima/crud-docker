import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContainerForm from './pages/ContainerForm';
import Sobre from './pages/Sobre';
import Login from './pages/Login';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Sobre/>} />
      <Route path="/consulta" element={<ContainerForm/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </>
  );
}

export default App;

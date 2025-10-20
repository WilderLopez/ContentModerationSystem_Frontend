/*
 * Formulario de autenticación básico.
 * Aquí se recogerán las credenciales del usuario para iniciar sesión.
 */
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: llamar al servicio de login del backend y guardar el token
    console.log('Iniciar sesión con', email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo electrónico"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;
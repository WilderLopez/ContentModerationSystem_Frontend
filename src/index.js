/*
 * Punto de entrada principal de React.
 * Renderiza el componente App en el elemento con id root.
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
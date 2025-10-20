/*
 * Componente raíz que define la estructura general de la aplicación.
 * Aquí se pueden implementar las rutas de React Router y el contexto de autenticación.
 */
import React from 'react';
import UploadForm from './components/UploadForm.jsx';

const App = () => {
  return (
    <div>
      <h1>Moderación Automática</h1>
      <UploadForm />
      {/* Aquí se añadirán rutas y componentes adicionales */}
    </div>
  );
};

export default App;
/*
 * Lista de casos analizados para revisión.
 * Este componente mostrará una tabla con información básica de cada caso.
 */
import React from 'react';

const CaseList = ({ cases = [] }) => {
  return (
    <div>
      <h2>Casos pendientes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Etiqueta</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.type}</td>
              <td>{c.label}</td>
              <td>
                {/* Enlaces o botones para ver detalles o cambiar el estado */}
                <button>Ver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CaseList;
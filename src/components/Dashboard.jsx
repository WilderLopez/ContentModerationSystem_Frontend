/*
 * Panel de métricas y estadísticas del sistema.
 * Muestra gráficos simples; para un MVP se puede usar librerías como Chart.js.
 */
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2>Estadísticas de Moderación</h2>
      {/* Aquí se insertarán gráficos y KPI */}
      <p>Casos totales: --</p>
      <p>Porcentaje de "OK": --%</p>
      <p>Porcentaje de "Revisar": --%</p>
      <p>Porcentaje de "Bloquear": --%</p>
    </div>
  );
};

export default Dashboard;
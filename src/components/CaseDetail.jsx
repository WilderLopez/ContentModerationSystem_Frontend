/*
 * Vista detallada de un caso concreto.
 * Permite al revisor ver el contenido y tomar una acción.
 */
import React from 'react';

const CaseDetail = ({ caseData }) => {
  if (!caseData) return null;
  return (
    <div>
      <h2>Detalle del caso {caseData.id}</h2>
      {/* Mostrar texto, imagen o vídeo según corresponda */}
      <p>Etiqueta actual: {caseData.label}</p>
      <p>Confianza: {caseData.confidence}</p>
      <p>Detalles: {JSON.stringify(caseData.details)}</p>
      <button>Aprobar</button>
      <button>Bloquear</button>
    </div>
  );
};

export default CaseDetail;
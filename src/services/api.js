/*
 * Módulo de servicios para comunicarse con la API del backend.
 */
const API_BASE = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

export async function analyzeText(text) {
  const res = await fetch(`${API_BASE}/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) {
    throw new Error('Error en la solicitud de análisis');
  }
  return await res.json();
}

export async function analyzeImage(file) {
  const formData = new FormData();
  formData.append('file', file);
  const res = await fetch(`${API_BASE}/analyze/image`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) {
    throw new Error('Error en el análisis de imagen');
  }
  return await res.json();
}

// TODO: añadir funciones para vídeo, autenticación, etc.
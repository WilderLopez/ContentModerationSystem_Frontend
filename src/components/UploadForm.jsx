/*
 * Componente para enviar texto o imágenes a la API y mostrar el resultado.
 */
import React, { useState } from 'react';
import { analyzeText, analyzeImage } from '../services/api.js';

const UploadForm = () => {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await analyzeText(text);
      setResult(res);
    } catch (err) {
      console.error(err);
    }
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    try {
      const res = await analyzeImage(file);
      setResult(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleTextSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Pega tu texto aquí"
        ></textarea>
        <button type="submit">Analizar texto</button>
      </form>
      <form onSubmit={handleImageSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Analizar imagen</button>
      </form>
      {result && (
        <div>
          <h3>Resultado</h3>
          <p>Etiqueta: {result.label}</p>
          <p>Confianza: {result.confidence}</p>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
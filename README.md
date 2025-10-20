# Frontend del panel de moderación

Este directorio contiene un cascarón básico de una aplicación React para interactuar con el backend de moderación automática.

Consulta el [roadmap del frontend](./roadmap.md) para conocer las etapas completas del desarrollo del panel.

## Inicio rápido

1. Instalar dependencias con npm o yarn:
   ```bash
   npm install
   ```
2. Definir la variable de entorno `REACT_APP_API_BASE_URL` en un archivo `.env` para apuntar al backend.
3. Ejecutar el servidor de desarrollo:
   ```bash
   npm run start
   ```
4. Visitar `http://localhost:5173` (o el puerto que indique Vite) para ver la aplicación.

Los componentes y servicios provistos son plantillas que deben completarse con la lógica real de comunicación con la API, autenticación y manejo de estado.

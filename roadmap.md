# Roadmap Frontend para Panel de Moderación

Este documento detalla los pasos para desarrollar la interfaz de usuario de un panel web que consuma la API de moderación de contenido. El objetivo es brindar a los clientes una experiencia sencilla para subir contenido (texto, imágenes y vídeos), visualizar los resultados, gestionar casos pendientes y revisar métricas. El stack recomendado incluye React para construir la interfaz dinámica, integrándose con la API construida con FastAPI.

## Etapa 1: Definición de requisitos y diseño UX/UI

- **Mapa de navegación:** determinar las vistas principales del panel: página de inicio, formulario de carga de contenido, lista de casos pendientes, detalle de cada caso y dashboard de estadísticas. Incluir una página de autenticación.
- **Wireframes:** crear bocetos de cada página para definir la disposición de botones, formularios y tablas. Asegurarse de que el flujo de trabajo sea claro, especialmente para revisar contenido marcado como Revisar o Bloquear.
- **Elección de biblioteca de componentes:** decidir si se usará un framework de estilos como Material-UI, Tailwind CSS o Bootstrap para acelerar el diseño. Elegir gráficos (Chart.js, Recharts) para el dashboard.
- **Diseño responsivo:** planificar una experiencia que funcione en diferentes tamaños de pantalla, dado que algunos clientes pueden revisar contenido desde dispositivos móviles.

## Etapa 2: Configuración del entorno y estructura inicial

- **Inicializar el proyecto:** crear una nueva aplicación con Vite o Create React App. Configurar `package.json` con las dependencias esenciales de React, un cliente HTTP (fetch nativo o axios) y las librerías de UI elegidas.
- **Estructurar carpetas:** organizar el código en directorios como `components/`, `pages/`, `services/` y `context/` para mantener el orden. Crear un `AuthContext` para gestionar el token de acceso y los métodos de login/logout.
- **Configurar variables de entorno:** definir la URL de la API en un archivo `.env` (`REACT_APP_API_BASE_URL`) para facilitar cambios entre entornos de desarrollo y producción.

## Etapa 3: Desarrollo de componentes principales

- **Autenticación:** implementar un formulario de inicio de sesión (`LoginForm`) que solicite correo y contraseña, enviando los datos a la API `/auth/login` y almacenando el token recibido. Añadir lógica para redirigir al usuario no autenticado a la página de login.
- **Carga de contenido:** crear un componente (`UploadForm`) que permita al usuario pegar texto o seleccionar un archivo de imagen/vídeo. Validar que sólo se envíe un tipo de contenido a la vez. Mostrar mensajes de carga y el resultado de la API cuando esté disponible.
- **Lista de casos:** desarrollar un componente (`CaseList`) que recupere de la API los análisis realizados, ordenados por estado (OK, Revisar, Bloquear). Mostrar identificador, tipo de contenido y etiqueta de riesgo, permitiendo al usuario abrir cada caso para ver más detalles.
- **Detalle de caso:** construir una vista (`CaseDetail`) que muestre el texto transcrito, la imagen o un vídeo incrustado junto con los valores de confianza. Proporcionar botones para que un revisor humano pueda marcar el contenido como aceptado o bloqueado, enviando su decisión al backend para auditoría.
- **Panel de métricas:** crear un dashboard (`Dashboard`) que consuma estadísticas de la API: número total de análisis, porcentajes por etiqueta de riesgo, tasa de falsos positivos y evolución a lo largo del tiempo. Utilizar gráficos para una visualización amigable.

## Etapa 4: Integración y manejo de estado

- **Servicios de API:** centralizar las llamadas HTTP en un módulo `services/api.js`. Incluir funciones como `analyzeText`, `analyzeImage`, `analyzeVideo`, `login`, `register`, `getCases` y `updateCase`. Manejar errores y estados de carga a nivel global.
- **Gestión de autenticación:** crear un `AuthProvider` con React Context para almacenar el token JWT. Proteger rutas privadas mediante componentes que comprueben si el usuario está autenticado antes de renderizar el contenido.
- **Manejo de formularios y validación:** utilizar bibliotecas como `react-hook-form` o Formik para gestionar formularios de manera declarativa, aplicando validaciones de tamaño y tipo de archivo antes de enviar a la API.
- **Navegación:** integrar un enrutador (React Router) para gestionar las diferentes páginas del panel. Configurar rutas protegidas y redirecciones adecuadas.

## Etapa 5: Pruebas, optimización y despliegue

- **Pruebas de componentes:** escribir tests con React Testing Library y Jest para verificar que los componentes se renderizan correctamente y llaman a los servicios de API como se espera. Asegurar que los flujos de usuario (login, carga de contenido, revisión) funcionan sin errores.
- **Optimización de rendimiento:** aplicar técnicas de código dividido (`lazy()` y `Suspense`), memoización y uso adecuado de estados para minimizar renders innecesarios. Comprimir y servir los assets estáticos para acelerar el tiempo de carga inicial.
- **Accesibilidad y usabilidad:** verificar que la interfaz cumpla con estándares de accesibilidad (WCAG), incluyendo contraste de colores, navegación por teclado y textos alternativos.
- **Construcción y despliegue:** generar un build de producción (`npm run build`) y desplegarlo en un servicio de hosting estático (Netlify, Vercel, S3 + CloudFront). Configurar variables de entorno y dominios personalizados según sea necesario.
- **Retroalimentación y mejoras:** una vez en producción, recopilar opiniones de los usuarios sobre la experiencia de uso y priorizar mejoras en la interfaz y flujos de trabajo. Añadir funcionalidades avanzadas como notificaciones en tiempo real (WebSockets) cuando el análisis de un vídeo esté completado.

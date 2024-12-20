# CRUD-Alumnos-RE

Gestión de Alumnos 

Descripción:
Este proyecto es una aplicación para gestionar alumnos y sus calificaciones en una escuela. Utiliza Node.js y Express para el backend, MySQL para la base de datos, y React con Bootstrap para el frontend.

Instalación:

1. Clonar el repositorio:
   git clone 
   cd CRUD-Alumnos-RE

2. Instalar dependencias del backend:
   cd backend
   npm install

3. Instalar dependencias del frontend:
   cd ../frontend
   npm install

Configuración:

Backend:
- Configurar la Base de Datos:
  1. Asegúrate de tener MySQL instalado y corriendo.
  2. Ejecuta el script SQL en backend/db/schema.sql para crear las tablas necesarias.

- Variables de entorno:
  - Crea un archivo .env en el directorio backend con:
    DB_HOST=localhost
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_DATABASE=escuela

Frontend:
- No requiere configuración adicional aparte de tener npm instalado.

Uso:

Backend:
- Inicia el servidor:
  cd backend
  npm start

Frontend:
- Inicia la aplicación frontend:
  cd frontend
  npm start

Esto debería abrir tu aplicación en localhost:3000 (frontend) y tu servidor en localhost:3000 (backend).

Estructura del Proyecto:
CRUD-alumnos-RE/
├── backend/
│   ├── node_modules/
│   ├── routes/
│   │   ├── alumnos.js
│   │   ├── calificaciones.js
│   │   └── materias.js
│   ├── db/
│   │   └── schema.sql
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AlumnoForm.js
│   │   │   ├── AlumnoList.js
│   │   │   ├── CalificacionesForm.js
│   │   │   ├── CalificacionesList.js
│   │   │   ├── MateriasForm.js
│   │   │   └── MateriasList.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── README.md

API:
- Endpoints disponibles:
  - /api/alumnos: CRUD de alumnos
  - /api/calificaciones: Gestión de calificaciones
  - /api/materias: CRUD de materias

Frontend:
El frontend es una aplicación React que usa Bootstrap para el diseño. Incluye componentes para:
- Listar y gestionar alumnos.
- Registro y consulta de calificaciones.
- Añadir y listar materias.

Contribución:
Las contribuciones son bienvenidas! Por favor, abre un issue para discutir lo que te gustaría cambiar. Luego, crea una pull request.

Licencia:
[Especifica aquí la licencia de tu proyecto, por ejemplo, MIT]

Contacto:
- Brayan Alejandre
- balejandre@redefectiva.com

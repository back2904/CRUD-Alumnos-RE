const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const alumnosRoutes = require('./routes/alumnos');
const calificacionesRoutes = require('./routes/calificaciones');
const materiasRoutes = require('./routes/materias');
const cors = require('cors');  
const app = express();
app.use(bodyParser.json());

// Configuración de conexión a la base de datos
const pool = mysql.createPool({
  host: '127.0.0.1',
  port: '3307',
  user: 'root',
  password: '0123',
  database: 'alumnos',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.use(cors()); 
app.use('/api/alumnos', alumnosRoutes(pool));
app.use('/api/calificaciones', calificacionesRoutes(pool));
app.use('/api/materias', materiasRoutes(pool));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = (pool) => {
    const router = require('express').Router();
  
    // GET todas las calificaciones
    router.get('/', async (req, res) => {
      try {
        const [rows] = await pool.execute('CALL GetAllCalificaciones()');
        console.log(rows);
        res.json(rows);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
  
    // POST crear una nueva calificación
    router.post('/', async (req, res) => {
        try {
          const { id_alumno, id_materia, calificacion, fecha_calificacion } = req.body;
          const [result] = await pool.execute('CALL InsertCalificacion(?, ?, ?, ?)', 
            [id_alumno, id_materia, calificacion, fecha_calificacion]);
          res.status(201).json({ message: 'Calificación registrada', insertId: result[0].insertId });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      });
  
    return router;
  };
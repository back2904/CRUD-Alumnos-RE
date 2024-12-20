module.exports = (pool) => {
    const router = require('express').Router();

  
    // GET todos los alumnos
    router.get('/', async (req, res) => {
      try {
        const [rows] = await pool.execute('SELECT * FROM dat_alumnos');
        console.log(rows);
        res.json(rows);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
  
    // GET alumno por ID
    router.get('/:id', async (req, res) => {
        try {
          const [rows] = await pool.execute('CALL GetAlumnoById(?)', [req.params.id]);
          if (rows[0].length === 0) return res.status(404).json({ message: 'Alumno no encontrado' });
          console.log(rows[0][0]);
          res.json(rows[0][0]);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      });
  
    // POST crear un nuevo alumno
    router.post('/', async (req, res) => {
        try {
          const { sNombre, sApellido_paterno, sApellido_materno, dFechaNacimiento, nGenero, nIdEstatus } = req.body;
          const [result] = await pool.execute('CALL InsertAlumno(?, ?, ?, ?, ?, ?)', 
            [sNombre, sApellido_paterno, sApellido_materno, dFechaNacimiento, nGenero, nIdEstatus]);
            console.log(result);
          res.status(201).json({ message: 'Alumno creado', insertId: result[0].insertId });
        } catch (error) {
            console.log(error);
          res.status(500).json({ message: error.message });
        }
      });
  
    // PUT actualizar un alumno
    router.put('/:id', async (req, res) => {
        try {
          const { sNombre, sApellido_paterno, sApellido_materno, dFechaNacimiento, nGenero, nIdEstatus  } = req.body;
          const [result] = await pool.execute('CALL UpdateAlumno(?, ?, ?, ?, ?, ?, ?)', 
            [req.params.id, sNombre, sApellido_paterno, sApellido_materno, dFechaNacimiento, nGenero, nIdEstatus ]);
          if (result[0].affectedRows === 0) return res.status(404).json({ message: 'Alumno no encontrado' });
          res.json({ message: 'Alumno actualizado' });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      });
    
      router.delete('/:id', async (req, res) => {
        try {
          const [result] = await pool.execute('CALL DeleteAlumno(?)', [req.params.id]);
          if (result[0].affectedRows === 0) return res.status(404).json({ message: 'Alumno no encontrado' });
          res.json({ message: 'Alumno eliminado' });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      });
    
  
    return router;
  };
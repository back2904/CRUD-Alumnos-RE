module.exports = (pool) => {
    const router = require('express').Router();

  
    router.get('/', async (req, res) => {
      try {
        const [rows] = await pool.execute('SELECT * FROM dat_materias');
        console.log(rows);
        res.json(rows);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
    
    router.post('/', async (req, res) => {
        try {
          const { sNombreMateria  } = req.body;
          console.log(sNombreMateria);
          const [result] = await pool.execute('CALL InsertMateria(?)', 
            [sNombreMateria]);
          res.status(201).json({ message: 'Materia creado', insertId: result[0].insertId });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      });
    
  
    return router;
  };
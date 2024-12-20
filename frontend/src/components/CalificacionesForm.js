import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CalificacionesForm = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [calificacion, setCalificacion] = useState({
    nIdAlumno: '',
    nIdMateria: '',
    nCalificacion: '',
    dFechaCalificacion: new Date().toISOString().split('T')[0]
  });
  const [alumnos, setAlumnos] = useState([]);
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(`${apiUrl}/alumnos`),
      axios.get(`${apiUrl}/materias`)
    ]).then(([alumnosRes, materiasRes]) => {
      setAlumnos(alumnosRes.data);
      setMaterias(materiasRes.data);
    }).catch(error => {
      console.error('Error fetching data:', error);
      // Aquí podrías manejar el error de alguna manera, como mostrar un mensaje al usuario.
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCalificacion(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/calificaciones', calificacion)
      .then(response => {
        console.log('Calificación registrada:', response);
        navigate('/calificaciones'); // Redirige a la lista de calificaciones después de agregar una nueva.
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container">
      <h2>Agregar Nueva Calificación</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Alumno</label>
          <select 
            name="nIdAlumno" 
            onChange={handleChange} 
            className="form-control" 
            required
          >
            <option value="">Selecciona un Alumno</option>
            {alumnos.map(alumno => (
              <option key={alumno.nIdAlumno} value={alumno.nIdAlumno}>{alumno.sNombre} {alumno.sApellido_paterno}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Materia</label>
          <select 
            name="id_materia" 
            onChange={handleChange} 
            className="form-control" 
            required
          >
            <option value="">Selecciona una Materia</option>
            {materias.map(materia => (
              <option key={materia.nIdMateria} value={materia.nIdMateria}>{materia.sNombreMateria}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Calificación</label>
          <input 
            type="number" 
            name="calificacion" 
            onChange={handleChange} 
            className="form-control" 
            required
            min="0" 
            max="10"
            step="0.1" 
          />
        </div>
        <div className="form-group">
          <label>Fecha de Calificación</label>
          <input 
            type="date" 
            name="fecha_calificacion" 
            onChange={handleChange} 
            value={calificacion.fecha_calificacion} 
            className="form-control" 
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Guardar Calificación</button>
      </form>
    </div>
  );
};

export default CalificacionesForm;
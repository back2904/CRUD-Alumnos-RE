import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CalificacionesList = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
  const [calificaciones, setCalificaciones] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/calificaciones`)
      .then(response => setCalificaciones(response.data[0]))
      .catch(error => console.error('Error fetching calificaciones:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">Listado de Calificaciones</h1>

      <Link to="/calificacion/nueva" className="btn btn-primary mb-3">Agregar Calificación</Link>

      <table className="table">
        <thead>
          <tr>
            <th>Alumno</th>
            <th>Materia</th>
            <th>Calificación</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {calificaciones.map(calificacion => (
            <tr key={calificacion.nIdCalificacion}>
              <td>{calificacion.sNombre}</td>
              <td>{calificacion.sNombreMateria}</td>
              <td>{calificacion.nCalificacion}</td>
              <td>{calificacion.dFechaCalificacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalificacionesList;
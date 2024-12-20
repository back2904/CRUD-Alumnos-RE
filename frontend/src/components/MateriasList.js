import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MateriasList = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/materias`)
      .then(response => setMaterias(response.data))
      .catch(error => console.error('Error fetching materias:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">Listado de Materias</h1>
      <Link to="/materia/nueva" className="btn btn-primary mb-3">Agregar Materia</Link>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre de la Materia</th>
          </tr>
        </thead>
        <tbody>
          {materias.map(materia => (
            <tr key={materia.nIdMateria}>
              <td>{materia.sNombreMateria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MateriasList;
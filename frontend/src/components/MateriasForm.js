import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MateriasForm = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [materia, setMateria] = useState({ sNombreMateria: '' });

  const handleChange = (e) => setMateria({ ...materia, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${apiUrl}/materias`, materia)
      .then(() => navigate('/materias'))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container">
      <h2>Agregar Nueva Materia</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de la Materia</label>
          <input type="text" name="sNombreMateria" value={materia.sNombreMateria} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Guardar Materia</button>
      </form>
    </div>
  );
};

export default MateriasForm;
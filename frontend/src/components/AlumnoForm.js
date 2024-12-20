import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AlumnoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [alumno, setAlumno] = useState({
    sNombre: '', 
    sApellido_paterno: '', 
    sApellido_materno: '', 
    dFechaNacimiento: '',
    nGenero: 0,
    nIdEstatus: 0
  });
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    if (id) { // Si estamos editando, cargamos los datos del alumno
      axios.get(`${apiUrl}/alumnos/${id}`)
        .then(response => setAlumno(response.data))
        .catch(error => console.error('Error fetching alumno:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumno(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`${apiUrl}/alumnos/${id}`, alumno)
        .then(() => navigate('/alumnos'))
        .catch(error => console.error('Error updating alumno:', error));
    } else {
      axios.post(`${apiUrl}/alumnos`, alumno)
        .then(() => navigate('/alumnos'))
        .catch(error => console.error('Error creating alumno:', error));
    }
  };

  return (
    <div className="container">
      <h2>{id ? 'Editar Alumno' : 'Agregar Alumno'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input 
            type="text" 
            name="sNombre" 
            value={alumno.sNombre} 
            onChange={handleChange} 
            className="form-control" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Apellido Paterno</label>
          <input 
            type="text" 
            name="sApellido_paterno" 
            value={alumno.sApellido_paterno} 
            onChange={handleChange} 
            className="form-control" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Apellido Materno</label>
          <input 
            type="text" 
            name="sApellido_materno" 
            value={alumno.sApellido_materno} 
            onChange={handleChange} 
            className="form-control" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Fecha de dFechaNacimiento</label>
          <input 
            type="date" 
            name="dFechaNacimiento" 
            value={alumno.dFechaNacimiento} 
            onChange={handleChange} 
            className="form-control" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Género</label>
          <select 
            name="nGenero" 
            value={alumno.nGenero} 
            onChange={handleChange} 
            className="form-control" 
            required
          >
            <option value="">Selecciona un género</option>
            <option value="1">Masculino</option>
            <option value="2">Femenino</option>
            <option value="3">Binario</option>
          </select>
        </div>
        <div className="form-group">
          <label>Estatus</label>
          <select 
            name="nIdEstatus" 
            value={alumno.nIdEstatus} 
            onChange={handleChange} 
            className="form-control"
          >
            <option value="">Selecciona un estatus</option>
            <option value="0">Inactivo</option>
            <option value="1">Activo</option>
            <option value="2">Suspendido</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">{id ? 'Actualizar' : 'Guardar'} Alumno</button>
      </form>
    </div>
  );
};

export default AlumnoForm;
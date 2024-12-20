import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AlumnoList = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [alumnos, setAlumnos] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get(`${apiUrl}/alumnos`);
        setAlumnos(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Aquí podrías setear un estado de error, por ejemplo:
        // setError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">Listado de Alumnos</h1>

      <div className="mb-3">
        <Link to="/alumno/nuevo" className="btn btn-primary">Agregar Alumno</Link>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map(alumno => (
            <tr key={alumno.nIdAlumno}>
              <td>{alumno.sNombre}</td>
              <td>{alumno.sApellido_paterno}</td>
              <td>{alumno.sApellido_materno}</td>
              <td>
                <Link to={`/alumno/${alumno.nIdAlumno}`} className="btn btn-sm btn-primary mr-2">Editar</Link>
                <button className="btn btn-sm btn-danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlumnoList;
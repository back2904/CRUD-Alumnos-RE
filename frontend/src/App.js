import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import AlumnoList from './components/AlumnoList';
import AlumnoForm from './components/AlumnoForm';
import MateriasList from './components/MateriasList';
import MateriasForm from './components/MateriasForm';
import CalificacionesList from './components/CalificacionesList';
import CalificacionesForm from './components/CalificacionesForm';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Gestión de Alumnos</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/alumnos" className="nav-link">Alumnos</Link>
              </li>
              <li className="nav-item">
                <Link to="/calificaciones" className="nav-link">Calificaciones</Link>
              </li>
              <li className="nav-item">
                <Link to="/materias" className="nav-link">Materias</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<h1>Bienvenido a la Gestión de Alumnos</h1>} />
          <Route path="/alumnos" element={<AlumnoList />} />
          <Route path="/alumno/nuevo" element={<AlumnoForm />} />
          <Route path="/alumno/:id" element={<AlumnoForm />} />
          <Route path="/calificaciones" element={<CalificacionesList />} />
          <Route path="/calificacion/nueva" element={<CalificacionesForm />} />
          <Route path="/materias" element={<MateriasList />} />
          <Route path="/materia/nueva" element={<MateriasForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
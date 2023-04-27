import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './inicio';
import Contacto from './contacto';
import Servicios from './servicios';

const Rutas = () => {
  return (
    <>
      <h1>Rutas</h1>

      <Routes>
        <Route path="/" element={<Inicio />} exact />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </>
  );
};

export default Rutas;

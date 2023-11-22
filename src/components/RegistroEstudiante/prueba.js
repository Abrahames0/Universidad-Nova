import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const RegistroUniversidad = () => {
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [matricula, setMatricula] = useState('');

  const generarMatricula = () => {
    const mes = new Date().getMonth() + 1; // Obtiene el mes actual
    const año = new Date().getFullYear().toString().slice(-2); // Obtiene los últimos dos dígitos del año actual
    const matriculaGenerada = (
      apellidoPaterno.substring(0, 2).toUpperCase() +
      apellidoMaterno.substring(0, 2).toUpperCase() +
      nombre.charAt(0).toUpperCase() +
      "-" +
      mes.toString().padStart(2, '0') +
      año
    );
    setMatricula(matriculaGenerada);
  };

  return (
    <div>
      <TextField
        label="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <br />
      <TextField
        label="Apellido Paterno"
        value={apellidoPaterno}
        onChange={(e) => setApellidoPaterno(e.target.value)}
      />
      <br />
      <TextField
        label="Apellido Materno"
        value={apellidoMaterno}
        onChange={(e) => setApellidoMaterno(e.target.value)}
      />
      <br />
      <Button variant="contained" color="primary" onClick={generarMatricula}>
        Generar Matrícula
      </Button>
      <br />
      {matricula && <div>Matrícula: {matricula}</div>}
    </div>
  );
};

export default RegistroUniversidad;

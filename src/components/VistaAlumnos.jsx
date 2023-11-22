import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import AppBar from './AppBar';
import { Table, TableRow, TableBody, TableHead, TableContainer, TableCell, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';
import { DataStore } from 'aws-amplify';
import { Estudiante } from '../models';

function VistaAlumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlumnos = async () => {
      const models = await DataStore.query(Estudiante);
      setAlumnos(models);
      console.log("Alumnos cargados:", models);
    };

    fetchAlumnos();
  }, []);

  const handleProfileClick = (id) => {
    navigate(`/vista-alumno-unico?id=${id}`);
  };

  const handleDeleteClick = async (id) => {
    try {
      const modelToDelete = await DataStore.query(Estudiante, id);
      await DataStore.delete(modelToDelete);
      setAlumnos(alumnos.filter(alumno => alumno.id !== id));
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
    }
  };

  return (
    <>
      <AppBar />
      <div style={{ height: '100vh', width: '100vw' }}>
        <div className='container'>
          <div className='d-flex justify-content-center'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Matrícula</TableCell>
                    <TableCell align="right">Nombre</TableCell>
                    <TableCell align="right">Apellido Paterno</TableCell>
                    <TableCell align="right">Apellido Materno</TableCell>
                    <TableCell align="right">Teléfono</TableCell>
                    <TableCell align="right">Correo</TableCell>
                    <TableCell align="right">Promedio Bachillerato</TableCell>
                    <TableCell align="right">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {alumnos.map((alumno) => (
                    <TableRow key={alumno.id}>
                      <TableCell component="th" scope="row">
                        {alumno.id}
                      </TableCell>
                      <TableCell align="right">{alumno.matricula}</TableCell>
                      <TableCell align="right">{alumno.nombre}</TableCell>
                      <TableCell align="right">{alumno.apellidoPaterno}</TableCell>
                      <TableCell align="right">{alumno.apellidoMaterno}</TableCell>
                      <TableCell align="right">{alumno.telefonoJoven}</TableCell>
                      <TableCell align="right">{alumno.correo}</TableCell>
                      <TableCell align="right">{alumno.promedioBachillerato}</TableCell>
                      <TableCell align="right">
                        <DeleteIcon onClick={() => handleDeleteClick(alumno.id)} />
                        &nbsp;&nbsp;
                        <RemoveRedEyeIcon onClick={() => handleProfileClick(alumno.id)} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default VistaAlumnos;
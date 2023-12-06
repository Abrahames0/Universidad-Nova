import AppBar from './AppBar';
import { Table, TableRow, TableBody, TableHead, TableContainer, TableCell, Paper, Tooltip, IconButton, TablePagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

// VistaAlumnos.js
import React, { useState } from 'react';
import useEstudiantes from './hooks/useEstudiantes';
import { useNavigate } from 'react-router-dom';

function VistaAlumnos() {
  const navigate = useNavigate();
  const [alumnos, eliminarEstudiante] = useEstudiantes();

  const handleProfileClick = (id) => {
    navigate(`/vista-alumno-unico?id=${id}`);
  };

  const handleDeleteClick = (id) => {
    eliminarEstudiante(id);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
  <AppBar />
  <br />
  <div style={{ maxWidth: '100vw', overflowX: 'auto' }}>
    <div className='container'>
      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 650 }} aria-label="Tabla de Alumnos">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Matrícula</TableCell>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Apellido Paterno</TableCell>
              <TableCell align="right">Apellido Materno</TableCell>
              <TableCell align="right">Teléfono</TableCell>
              <TableCell align="right">Correo</TableCell>
              <TableCell align="right">Que Desea Estudiar</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? alumnos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : alumnos
            ).map((alumno) => (
              <TableRow key={alumno.id}>
                <TableCell component="th" scope="row">{alumno.id}</TableCell>
                <TableCell align="right">{alumno.matricula}</TableCell>
                <TableCell align="right">{alumno.nombre}</TableCell>
                <TableCell align="right">{alumno.apellidoPaterno}</TableCell>
                <TableCell align="right">{alumno.apellidoMaterno}</TableCell>
                <TableCell align="right">{alumno.telefonoJoven}</TableCell>
                <TableCell align="right">{alumno.correo}</TableCell>
                <TableCell align="right">{alumno.queDeseasEstudiar}</TableCell> 
                <TableCell align="right">
                  <Tooltip title="Eliminar">
                    <IconButton onClick={() => handleDeleteClick(alumno.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                  &nbsp;
                  <Tooltip title="Ver Detalles">
                    <IconButton onClick={() => handleProfileClick(alumno.id)}>
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'Todos', value: -1 }]}
          component="div"
          count={alumnos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  </div>
</>
  );
}

export default VistaAlumnos;

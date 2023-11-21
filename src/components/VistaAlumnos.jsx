import React,{useState, useEffect} from 'react'
import Footer from './Footer'
import AppBar from './AppBar'
import { Table, TableRow, TableBody, TableHead, TableContainer, TableCell, Paper } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';

import { DataStore } from 'aws-amplify';
import { Estudiante } from '../models';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

function VistaAlumnos() {
const [alumnos, setAlumnos] = useState({});
const navigate=useNavigate();

useEffect(() => {
  const fetchAlumnos= async () =>{
    const models = await DataStore.query(Estudiante);
    setAlumnos(models)
    }

    fetchAlumnos();
    console.log(alumnos);
}, [])

const handleProfileClick = (row) => {
  navigate(`/vista-alumno-unico?name=${row.name}`);
};
const handleDeleteClick = async (row) => {
  // Aquí puedes escribir la lógica para eliminar el registro correspondiente a 'row'
  try {
    const modelToDelete = await DataStore.query(Estudiante,row.id);
    DataStore.delete(modelToDelete);
    console.log(`Eliminar registro: ${row.name}`);
  } catch (error) {
    console.log(error);
  }
};


  return (
    <>
    <AppBar />
    <div style={{backgroundColor:"gray", height: "100vh", width: "100vw"}} >
        <div className='container' >
            <div className='d-flex justity-content-center'>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Apellido Paterno&nbsp;</TableCell>
            <TableCell align="right">Apellido Materno&nbsp;</TableCell>
            <TableCell align="right">Matrícula&nbsp;</TableCell>
            <TableCell align="right">Correo&nbsp;</TableCell>
            <TableCell align="right">Teléfono&nbsp;</TableCell>
            <TableCell align="right">Acciones&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">
                <DeleteIcon onClick= {()=> handleDeleteClick(row)}/>
                &nbsp;
                &nbsp;
                <RemoveRedEyeIcon onClick={() => handleProfileClick(row)}/>
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
  )
}

export default VistaAlumnos
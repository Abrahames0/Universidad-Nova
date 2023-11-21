import React,{useEffect} from 'react';
import { Card, CardContent, Typography, Grid, Avatar, Button } from '@mui/material';
import Footer from './Footer';
import AppBar from './AppBar'
import { useLocation } from 'react-router-dom';

function VistaAlumnoUnico({ student }) {
  const location = useLocation();
  const alumno = new URLSearchParams(location.search);
  const name = alumno.get('name');

  useEffect(() => {  
    console.log(name)
  }, [])
  
  return (
    
    <>
    <div>
    <AppBar/>
    </div>
    &nbsp;
    &nbsp;
    <div className='container' >
    <Grid container spacing={4} className='d-flex justify-content-center' >
      <Grid item xs={8}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Foto de Perfil
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar alt="user" src={""} sx={{ width: 150, height: 150 }} />
            </div>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent >
            <Typography variant="h5" gutterBottom>
              Información del Estudiante
            </Typography>
            <Typography variant="body1">
              Nombre: {name}
            </Typography>
            <Typography variant="body1">
              Matrícula:
            </Typography>
            {/* Otras propiedades del estudiante */}
            <Typography variant="body1">
              Correo:
            </Typography>
            <Typography variant="body1">
              Teléfono de casa:
            </Typography>
            <Typography variant="body1">
              Teléfono propio:
            </Typography>
            <Typography variant="body1">
              Bachillerato de procedencia
            </Typography>
            <Typography variant="body1">
              Promedio del Bachillerato:
            </Typography>
            <Typography variant="body1">
              Especialdiad del Bachiller:
            </Typography>
            <Typography variant="body1">
              Carrera: 
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
      </Grid>
    </Grid>
    </div>

    </>
  );
}

export default VistaAlumnoUnico;

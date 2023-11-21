import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar, Button } from '@mui/material';
import Footer from './Footer';
import AppBar from './AppBar'

function VistaAlumnoUnico({ alumno }) {
  return (
    <>
    <div>
    <AppBar/>
    </div>
    <div className='container' >
    <Grid container spacing={4} className='d-flex justify-content-center' >
      <Grid item xs={8}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Foto de Perfil
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar alt="user" src={""} sx={{ width: 150, height: 150 }} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Información del Estudiante
            </Typography>
            <Typography variant="body1">
              Nombre: Fernando
            </Typography>
            <Typography variant="body1">
              Edad: 12
            </Typography>
            {/* Otras propiedades del estudiante */}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
      </Grid>
    </Grid>
    </div>
    <Footer/>
    </>
  );
}

export default VistaAlumnoUnico;

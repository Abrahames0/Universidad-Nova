import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Avatar, Button } from '@mui/material';
import Footer from './Footer';
import AppBar from './AppBar';
import { useLocation } from 'react-router-dom';
import { DataStore } from 'aws-amplify';
import { Estudiante } from '../models';

function VistaAlumnoUnico() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const studentId = queryParams.get('id');

  const [estudiante, setEstudiante] = useState(null);

  useEffect(() => {
    const obtenerEstudiante = async () => {
      try {
        if (studentId) {
          const estudianteData = await DataStore.query(Estudiante, studentId);
          setEstudiante(estudianteData);
        }
      } catch (error) {
        console.error('Error al cargar la información del estudiante:', error);
      }
    };

    obtenerEstudiante();
  }, [studentId]);

  if (!estudiante) {
    return (
      <>
        <AppBar />
        <div className='container' style={{ paddingTop: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Cargando información del estudiante...
          </Typography>
        </div>
        <Footer />
      </>
    );
  }

  const abrirCertificado = () => {
    if (estudiante && estudiante.certificadoBachillerato) {
      window.open(estudiante.certificadoBachillerato, '_blank');
    }
  };

  return (
    <>
      <AppBar />
      <div className='container' style={{ paddingTop: '20px' }}>
        <Grid container spacing={4} className='d-flex justify-content-center'>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Foto de Perfil
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Avatar alt={estudiante.nombre} src={estudiante.fotoEstudiante} sx={{ width: 150, height: 150 }} />
                </div>
              </CardContent>
            </Card>
            <Card style={{ marginTop: '20px' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Información del Estudiante
                </Typography>
                <Typography variant="body1">
                  Nombre: {estudiante.nombre} {estudiante.apellidoPaterno} {estudiante.apellidoMaterno}
                </Typography>
                <Typography variant="body1">
                  Matrícula: {estudiante.matricula}
                </Typography>
                <Typography variant="body1">
                  Correo: {estudiante.correo}
                </Typography>
                <Typography variant="body1">
                  Teléfono propio: {estudiante.telefonoJoven}
                </Typography>
                <Typography variant="body1">
                  Bachillerato de procedencia: {estudiante.bachilleratoProcedencia}
                </Typography>
                <Typography variant="body1">
                  Promedio del Bachillerato: {estudiante.promedioBachillerato}
                </Typography>
                <Typography variant="body1">
                  Especialidad del Bachillerato: {estudiante.especialidadProveniente}
                </Typography>
                <Typography variant="body1">
                  Carrera: {estudiante.carreraDeseada}
                </Typography>
                {/* Botón para abrir el PDF */}
                <Button variant="contained" color="primary" onClick={abrirCertificado} style={{ marginTop: '20px' }}>
                  Ver PDF del Certificado de Bachillerato
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default VistaAlumnoUnico;
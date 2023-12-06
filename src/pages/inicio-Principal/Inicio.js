import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import Logo from '../../assets/img/Universidad Nova.png'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../components/ThemeContext';


const Inicio = () => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
      try {
        navigate('/registro-estudiante');
      } catch (error) {
        console.log('error signing in: ', error);
      }
    }

    const { theme } = useContext(ThemeContext);

const styles = {
  backgroundColor: theme === 'light' ? 'white' : 'black',
  color: theme === 'light' ? 'black' : 'white',
  textAlign: 'center',
};

    return (
        <div style={styles}>
             <img src={Logo} alt="logo-nova" className="img-fluid logo-nova" />
            <h1>Bienvenido a la Universidad Nova</h1>
            <Button 
                variant="contained" 
                color="primary" 
                style={{ margin: '10px' }}
                onClick={handleSignOut}
            >
                Iniciar Registro
            </Button>
            <Button 
                variant="contained" 
                color="secondary" 
                style={{ margin: '10px' }}
                onClick={()=>{
                  navigate('/vista-alumnos')
                }}
            >
                Estudiantes
            </Button>
            <div className='container'>
          <Grid container spacing={3} justifyContent="center" style={{ marginTop: '2rem' }}>
          {/* Misión */}
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" className='typography' align="center">
                  Misión
                </Typography>
                <Typography variant="body1" align="justify">
                Somos una institución de Educación Superior Tecnológica comprometida en la formación integral de profesionistas líderes en los niveles de Técnico Superior Universitario y Licenciatura con programas educativos de excelencia, contribuyendo así, al desarrollo económico y social del estado y la región.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Visión */}
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" className='typography' align="center">
                  Visión
                </Typography>
                <Typography variant="body1" align="justify">
                En el 2028 la Universidad Nova será una institución de educación superior reconocida nacional e internacionalmente por formar egresados competitivos que se integran exitosamente al ámbito laboral, en los que resaltará su formación humana e integral; se contará con programas educativos de excelencia, pertinentes e incluyentes: en los que se promueve la investigación aplicada e innovación tecnológica a través de sus cuerpos académicos; se tendrá una fuerte vinculación con todos los sectores y se impulsará el emprendimiento y la competitividad, contribuyendo así a la transformación de la educación en Guanajuato. Se consolidará el enfoque hacía la igualdad y no discriminación.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Valores */}
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" className='typography' align="center">
                  Valores
                </Typography>
                <Typography variant="body1" align="justify">
                Para la UTNG los valores son el marco del comportamiento que deben tener sus integrantes, estos se determinaron en base a la razón de ser; al propósito de creación; y a la proyección en el futuro (visión) de la institución quedando redactados y descritos de la manera siguiente:
                <p align="center" >Rendición de Cuentas:</p>
                <p align="center" >Transparencia:</p>
                <p align="center" >Honestidad:</p>
                <p align="center" >Responsabilidad:</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
        </div>

        
    );
};

export default Inicio;

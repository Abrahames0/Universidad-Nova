
import './App.css';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import NavBar from './components/AppBar';
import Footer from './components/Footer';
import { useNavigate } from 'react-router-dom';
import { Button, CardContent, Grid, Typography, CardActions } from '@mui/material';


function App() {
  const navigate=useNavigate();

  const handleSignOut = async () => { // Agrega la palabra clave async aquí
    try {
      navigate('/login-estudiante');
    } catch (error) {
      console.log('error signing in: ', error);
    }
  }
  return (
    <>
    <NavBar/>
    <div >
      <header className='d-flex justify-content-center' style={{marginTop:"2rem", margin:"2rem"}}>
        <h1 style={{color: "black"}}>
          BIENVENIDO A NUESTRA PÁGINA 
        </h1>
      </header>
        <div className='container' >
        < div className='d-flex justify-content-center'>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4} className='d-flex align-items-center'>
            {/* Texto a la izquierda */}
            <Typography variant="h6">
              Si deseas ser parte de nuestra comunidad estudiantil, regístrate en menos de 10 minutos
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className='d-flex justify-content-center'>
            {/* Tarjeta en el centro */}
            <Card>
              <div className='d-flex justify-content-center'>
                {/* Imagen */}
                <Avatar sx={{ width: 250, height: 250}} style={{background:"white"}}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_ezpPQMCRB8TYGjxjE90bZHWDdyAwCXL_g&usqp=CAU" alt="Logo" />
                </Avatar>
              </div>
              <div className='d-flex justify-content-center'>
                <CardActions>
                  <Button onClick={handleSignOut}>Registrarme</Button>
                </CardActions>
              </div>
            </Card>
          </Grid>
        </Grid>
        </div>
      </div>

      <div className='container'>
          <Grid container spacing={3} justifyContent="center" style={{ marginTop: '2rem' }}>
          {/* Misión */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" className='typography' align="center">
                  Misión
                </Typography>
                <Typography variant="body1" align="center">
                Somos una institución de Educación Superior Tecnológica comprometida en la formación integral de profesionistas líderes en los niveles de Técnico Superior Universitario y Licenciatura con programas educativos de excelencia, contribuyendo así, al desarrollo económico y social del estado y la región.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Visión */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" className='typography' align="center">
                  Visión
                </Typography>
                <Typography variant="body1" align="center">
                En el 2026 la Universidad Tecnológica del Norte de Guanajuato será una institución de educación superior reconocida nacional e internacionalmente por formar egresados competitivos que se integran exitosamente al ámbito laboral, en los que resaltará su formación humana e integral; se contará con programas educativos de excelencia, pertinentes e incluyentes: en los que se promueve la investigación aplicada e innovación tecnológica a través de sus cuerpos académicos; se tendrá una fuerte vinculación con todos los sectores y se impulsará el emprendimiento y la competitividad, contribuyendo así a la transformación de la educación en Guanajuato. Se consolidará el enfoque hacía la igualdad y no discriminación.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Valores */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" className='typography' align="center">
                  Valores
                </Typography>
                <Typography variant="body1" align="center">
                Para la UTNG los valores son el marco del comportamiento que deben tener sus integrantes, estos se determinaron en base a la razón de ser; al propósito de creación; y a la proyección en el futuro (visión) de la institución quedando redactados y descritos de la manera siguiente:

                Rendición de Cuentas:

                Transparencia:

                Honestidad:


                Responsabilidad:

                Respeto:

                Trabajo en equipo:.

                Comunicación:

                Paz:

                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;

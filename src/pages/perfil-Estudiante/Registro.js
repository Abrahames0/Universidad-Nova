import { useState } from "react";
import { Typography,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {StepperRegistro} from "../../components/RegistroEstudiante/StepperRegistroEstudiante";

import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

function Registro() {

  const [bde] = useState([]);

  return (
    <div>
=      {bde ? (
          <StepperRegistro />
      ) : (
          <SinRegistro />
      )}
    </div>
  );
}

const SinRegistro = () => {
  const navigate = useNavigate()
  
  return (
    <div className="container pt-5 pb-5 min-vh-100">
      <div className="pb-2">
        <h1>Mi perfil</h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
        <Typography variant="h5" color="text.secondary" align="center" gutterBottom>
          Aún no has completado tu registro
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" align="center" gutterBottom className='pb-2'>
          Añade más información a tu perfil dentro de este registro para poder conectarte con empresas acordes a tu perfil
        </Typography>
        <Button onClick={() => navigate('/registro-bde')} variant="contained">
          Completar registro
        </Button>
      </div>
    </div>
  )
}

export default withAuthenticator(Registro);

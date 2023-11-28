import { useContext } from "react";

import {StepperRegistro} from "../../components/RegistroEstudiante/StepperRegistroEstudiante";

import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { ThemeContext } from "../../components/ThemeContext";
import { Box } from "@mui/material";

function Registro() {
  const { theme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  };
  
  return (
    <Box style={style}>
      <StepperRegistro />
    </Box>
  );
}

export default withAuthenticator(Registro);

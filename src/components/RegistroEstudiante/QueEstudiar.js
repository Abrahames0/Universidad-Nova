import Form from "react-bootstrap/Form";

import { TextField, Card, Autocomplete, Grid, Box } from "@mui/material";

const QueEstudiar = ({ empQueEstudiar, setEmpQueEstudiar }) => {
  const opciones = ["Ingeniería", "Maestría"];

  const handleChange = (event, value) => {
    setEmpQueEstudiar({ ...empQueEstudiar, queEstudiar: value });
  };

  return (
    <Box 
      sx={{ display: 'flex',  flexDirection: 'column', justifyContent: 'center',  alignItems: 'center', minHeight: '70vh'}}>
      <div className="responsive-card-container" style={{ padding: '1rem', width: '100%', maxWidth: '800px' }} >
        <Card 
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", m: 1, padding: '1rem', width: '100%'}} variant="outlined">
          <Form noValidate>
            <h6>Información Académica</h6>
            <br/>
            <Grid container spacing={1} justifyContent="center" alignItems="center">
              <Autocomplete fullWidth options={opciones} value={empQueEstudiar.queEstudiar} onChange={handleChange}
                renderInput={(params) => (
                  <TextField {...params} label="¿Qué deseas estudiar?" fullWidth />
                )}
              />
            </Grid>
          </Form>
        </Card>
      </div>
    </Box>
  );    
};

export default QueEstudiar;
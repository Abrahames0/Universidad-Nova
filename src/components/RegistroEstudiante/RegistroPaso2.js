import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { DataStore, Storage } from "aws-amplify";
import { SeleccionBachillerato, SeleccioCarrera } from "../../models";
import { TextField, Card, Autocomplete, Button, Grid, InputAdornment, Snackbar, Alert, Box } from "@mui/material";
import { TbCloudUpload } from "react-icons/tb";

function RegistroPaso2({certificadoPDF, setCertificadoPDF, empAcademica, setEmpAcademica, setStep2Valid}) {

  console.log(empAcademica);
  const [optionsBachi, setOptionsBachi] = useState([]);
  const [optionsEspe, setOptionsEspe] = useState([]);
  const [validFields, setValidFields] = useState({
    nombresBachillerato: false,
    especialidadCursada: false,
    promedio: false
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const itemsBachi = await DataStore.query(SeleccionBachillerato);
        const itemsEspe = await DataStore.query(SeleccioCarrera);
        setOptionsBachi(itemsBachi.map(item => item.nombreBachillerato));
        setOptionsEspe(itemsEspe.map(item => item.carrera));
      } catch (error) {
        console.error('Error al obtener datos', error);
      }
    };

    fetchOptions();
    
  }, []);

  const handleChangePromedio = (event) => {
    let value = event.target.value;
  
    // Validar que el valor sea numérico y esté en el rango permitido
    if (value === '' || (!isNaN(value) && value >= 0 && value <= 10)) {
      // Permitir hasta dos lugares decimales
      const regex = /^\d*\.?\d{0,2}$/;
      if (regex.test(value)) {
        setEmpAcademica((prev) => ({
          ...prev,
          promedio: value
        }));
        setValidFields((prev) => ({
          ...prev,
          promedio: true,
          especialidadCursada: true,
          nombresBachillerato:true
        }));
      }else {
        setValidFields((prev) => ({
          ...prev,
          promedio: false,
        }))
    }
  } else {
    setValidFields((prev) => ({
      ...prev,
      promedio: false,
    }));
  }
};  

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
  
    if (file) {
      try {
        const fileType = file.type;
        let folder = "";
  
        if (fileType === "application/pdf") {
          folder = "pdf/";
        } else if (fileType === "image/png") {
          folder = "images/";
        } else {
          setSnackbarMessage('Formato de archivo no soportado');
          setSnackbarSeverity('error');
          setOpenSnackbar(true);
          return;
        }
  
        const fileName = `${folder}${Date.now()}-${file.name}`;
        await Storage.put(fileName, file, {
          level: 'public',
          contentType: file.type
        });
  
        const uploadedUrl = `https://universidad-nova-storage05757-prod.s3.amazonaws.com/public/${fileName}`;
        // Aquí establece la URL donde corresponda, dependiendo de si es un PDF o un PNG
        setCertificadoPDF(uploadedUrl);
  
        setSnackbarMessage(`Archivo ${fileType === "application/pdf" ? 'PDF' : 'PNG'} cargado exitosamente`);
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
      } catch (error) {
        console.error('Error al cargar el archivo:', error);
  
        setSnackbarMessage('Error al guardar el archivo');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      }
    } else {
      setSnackbarMessage('No se seleccionó ningún archivo');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  useEffect(() => {
    const isFormValid =
      validFields.nombresBachillerato &&
      validFields.especialidadCursada &&
      validFields.promedio;
    
    setStep2Valid(isFormValid);
  }, [validFields, setStep2Valid]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',
      }}
    >
      <div className="col-xs-12 col-sm-8 col-md-7 col-lg-6" style={{ padding: '1rem' }}>
        <Card sx={{ justifyContent: "center", alignItems: "center", m: 1, padding: '1rem' }} variant="outlined">
          <Form noValidate >
            <h6>Información Académica</h6>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Autocomplete
                  options={optionsBachi}
                  onChange={(event, newValue) => {
                    setEmpAcademica(prev => ({ ...prev, nombresBachillerato: newValue }));
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Nombre de tu bachillerato" variant="outlined" />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                label="Promedio Bachillerato"
                variant="outlined"
                value={empAcademica.promedio} 
                onChange={handleChangePromedio}
                type="text"
                InputProps={{
                  endAdornment: <InputAdornment position="end">/10</InputAdornment>,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Autocomplete
                  options={optionsEspe}
                  onChange={(event, newValue) => {
                    setEmpAcademica(prev => ({ ...prev, especialidadCursada: newValue }));
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Especialidad cursada" variant="outlined" />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Certificado de bachillerato"
                  size="normal"
                  margin="normal"
                  placeholder="Carga certificado de bachillerato"
                  value={certificadoPDF || ""}
                  InputProps={{
                    endAdornment: (
                      <label htmlFor="icon-button-file">
                        <Button
                          component="span"
                          variant="contained"
                          startIcon={<TbCloudUpload />}
                          sx={{ backgroundColor: '#deeceb', '&:hover': { backgroundColor: '#deeceb' } }}
                        >
                          Cargar
                        </Button>
                        <input
                          accept=".pdf"
                          id="icon-button-file"
                          type="file"
                          onChange={handleFileUpload}
                          style={{ display: 'none' }}
                        />
                      </label>
                    ),
                  }}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  disabled={!!certificadoPDF}
                />
              </Grid>
            </Grid>
          </Form>
        </Card>
        <Snackbar
          open={openSnackbar} autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          sx={{ '& .MuiSnackbarContent-root': { fontSize: '1.25rem' } }}>
          <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}
          sx={{ width: '100%', fontSize: '1rem' }} 
          >
          {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    </Box>
  );
}

export default RegistroPaso2;

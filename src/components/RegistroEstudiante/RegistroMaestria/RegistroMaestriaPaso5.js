import React, { useState, useEffect } from 'react';
import { TextField, Card, Grid, Typography, Button, Snackbar, Alert, Box } from '@mui/material';
import { TbCloudUpload } from 'react-icons/tb';
import { Storage } from 'aws-amplify';
function RegistroMaestriaPaso5({cartaPDF, setCartaPDF, empAcademica, setEmpAcademica, setStep3Valid}) {

console.log(empAcademica);
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const requiredFields = [
    'razonDePrograma'
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (isValidInput(name, value)) {
      setEmpAcademica(prev => ({ ...prev, [name]: value }));
      setErrors(prev => ({ ...prev, [name]: '' }));
    } else {
      setErrors(prev => ({ ...prev, [name]: 'Entrada inválida' }));
    }
  };

  const isValidInput = (name, input) => {
    if (name.includes('telefono')) {
      return input.length <= 10 && /^[0-9]*$/.test(input);
    }
    return /^[a-zA-Z\s.]*$/.test(input);
  };

  useEffect(() => {
    const isFormValid = requiredFields.every((field) => empAcademica[field]?.trim() !== '');
    setStep3Valid(isFormValid);
  }, [empAcademica, requiredFields, setStep3Valid]);

  const fieldsMadre = [
    { name: 'razonDePrograma', label: 'Razon de por que este programa' },
    
  ];

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
        setCartaPDF(uploadedUrl);
  
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
    <Card sx={{ maxWidth: 800, mx: 'auto', padding: 4 }}>
      <Typography variant="h5" component="h2" sx={{ textAlign: 'center', mb: 3 }}>
        Información adicional
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {fieldsMadre.map(({ name, label, type }) => (
            <TextField
              key={name}
              fullWidth
              required
              name={name}
              label={label}
              margin="normal"
              variant="outlined"
              type={type || 'text'}
              value={empAcademica[name]}
              onChange={handleChange}
              error={!!errors[name]}
              helperText={errors[name]}
            />
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
                <TextField
                  label="Declaración de Propósito o Carta de Intención"
                  size="normal"
                  margin="normal"
                  placeholder="Carga Declaración de Propósito o Carta de Intención"
                  value={cartaPDF || ""}
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
                  disabled={!!cartaPDF}
                />
              </Grid>
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
      </Grid>
    </Card>
    </Box>
  );
}

export default RegistroMaestriaPaso5;
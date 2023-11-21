import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Auth, Storage } from "aws-amplify";

import { TbCloudUpload } from "react-icons/tb";

import { Button, TextField, Card, Grid, Snackbar, Alert } from "@mui/material";
import Direcciones from "./Direccion";
import { VisuallyHiddenInput } from "@chakra-ui/visually-hidden";

function RegistroUsuarioInformacion({ imagenURL, setImagenURL, empContacto, setEmpContacto, empUbicacion, setEmpUbicacion}) {

  console.log(empContacto);
  console.log(empUbicacion);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    let error = false;
    let help = null;

    const validaciones = {
      nombreComercial: {
        regex: /[^0-9()a-zA-ZñÑáéíóúÜüÁÉÍÓÚ@&':,%#¡.&+\s-]+/g,
        regex2: /^[0-9()a-zA-ZñÑáéíóúÜüÁÉÍÓÚ@&':,%#¡.&+\s-]{0,250}$/,
        error: true,
        help: "Ingresa un Nombre comercial de máximo 250 caracteres válido (No son validos caracteres númericos y especiales).",
      },
      telefono: {
        regex: /[^0-9]/g,
        regex2: /^[0-9]{10}$/,
        error: true,
        help: "Ingrese un número de teléfono válido (10 dígitos).",
      },
    };

    if (validaciones[name]) {
      event.target.value = event.target.value
        .replace(validaciones[name].regex, "")
        .replace(/\s{1,}/g, " ");
      if (!validaciones[name].regex2.test(value)) {
        help = validaciones[name].help;
        error = validaciones[name].error;
      }
    }

    setEmpContacto((past) => ({
      ...past,
      [name]: event.target.value,
      error: { ...past.error, [name]: error },
      help: { ...past.help, [name]: help },
    }));
  };

  const inputs = [
    {
      id: 1,
      label: "Nombres",
      name: "nombres",
      validations: { maxLength: 250 },
      error: empContacto?.error?.nombres,
      helperText: empContacto.help?.nombres,
      value: empContacto.nombres,
    },
    
    {
      id: 2,
      label: "Apelledo Paterno",
      name: "apellidopaterno",
      validations: { maxLength: 250 },
      error: empContacto?.error?.apellidopaterno,
      helperText: empContacto.help?.apellidopaterno,
      value: empContacto.apellidopaterno,
    },
    {
        id: 3,
        label: "Apelledo Materno",
        name: "apellidomaterno",
        validations: { maxLength: 250 },
        error: empContacto?.error?.apellidomaterno,
        helperText: empContacto.help?.apellidomaterno,
        value: empContacto.apellidomaterno,
      },
    
    {
      id: 5,
      label: "Número de teléfono",
      name: "telefono",
      validations: { maxLength: 10 },
      error: empContacto.error?.telefono,
      helperText: empContacto.help?.telefono,
      value: empContacto.telefono,
    },
    {
     id: 4,
     label: "Correo electrónico",
     name: "email",
     value: empContacto.email,
    }
  ];

  useEffect(() => {
    async function getCurrentUserEmail() {
      const userInfo = await Auth.currentUserInfo();
      const userEmail = userInfo.attributes.email;
      setEmpContacto((prevState) => ({ ...prevState, email: userEmail }));
    }
    getCurrentUserEmail();
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
  
    try {
      const fileName = 'img/' + file.name; 
      await Storage.put(fileName, file, { level: 'public', type: file.type });
      console.log(file)
      const imageUrl = `https://universidad-nova-storage05757-prod.s3.amazonaws.com/public/img/${fileName}`;
      setImagenURL(imageUrl);
  
      // La carga del archivo se realizó con éxito
      console.log('Archivo cargado exitosamente:', imageUrl);
  
      // Muestra una alerta de éxito
      setSnackbarMessage('Imagen guardada exitosamente');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error al cargar la imagen:', error);
  
      // Muestra una alerta de error
      setSnackbarMessage('Error al guardar la imagen');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  return (

<div style={{ padding: '1rem' }}>
<Card sx={{ justifyContent: "center", alignItems: "center", m: 1, padding: '1rem' }} variant="outlined">
  <Form noValidate autoComplete="off">
    <Grid container justifyContent="center">
      <Grid item xs={12} md={7} lg={6}>
        <h6>Datos personales</h6>
        <Grid container spacing={2}>
          {inputs.map((input) => (
            <Grid item xs={12} md={6} key={input.id}>
              <TextField
                key={input.id}
                style={{ width: "100%" }}
                required
                size="normal"
                margin="normal"
                name={input.name}
                label={input.label}
                inputProps={input.validations}
                value={input.value}
                multiline={false}
                onPaste={(e) => e.preventDefault()}
                onChange={handleChange}
                helperText={input.helperText}
                error={input.error}
                disabled={input.name === "email"} 
               />
            </Grid>
          ))}
          <Grid item xs={12}>
          <TextField
                label="Imagen del Estudiante"
                size="normal"
                margin="normal"
                placeholder="Carga imágen del Estudiante"
                value={imagenURL ? imagenURL : ""}
                InputProps={{
                  endAdornment: (
                    <label htmlFor="icon-button-file">
                      <Button component="span" variant="contained" startIcon={<TbCloudUpload />}
                        sx={{ backgroundColor: '#5c6bc0','&:hover': {backgroundColor: '#3949ab'}}}>
                        Cargar
                      </Button>
                      <VisuallyHiddenInput
                        accept="image/*" id="icon-button-file" type="file" onChange={handleImageUpload} />
                    </label>
                  ),
                }}
                fullWidth
                InputLabelProps={{ shrink: true }}
                disabled
              />
          </Grid>
        </Grid>
      </Grid>
      <Direcciones empUbicacion={empUbicacion} setEmpUbicacion={setEmpUbicacion}/>
    </Grid>
  </Form>
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
</Card>
</div>
  );
}
export default RegistroUsuarioInformacion;
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import { Auth, DataStore } from "aws-amplify";

import Swal from "sweetalert2";

import { TbCloudUpload } from "react-icons/tb";


import { Button, TextField, Card, CardHeader, Grid } from "@mui/material";
import Direcciones from "./Direccion";


function RegistroUsuarioInformacion() {

  const [imagenURL, setImagenURL] = useState(null);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); 
  const navigate = useNavigate()

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

  const [userEmail] = useState("");

  const [empContacto, setEmpContacto] = useState({
    nombreUsuario: '',
    apellidoUsuario: '',
    email: userEmail,
    telefono: '',
    error: {},
    help: {}
  });

  const [empUbicacion, setEmpUbicacion] = useState({
    calle: "", numero: "", colonia: "", codigoPostal: "", municipio: "", estado: "", pais:"",
  })

  const inputs = [
    {
      id: 1,
      label: "Nombres",
      name: "Nombres",
      validations: { maxLength: 250 },
      error: empContacto?.error?.nombreUsuario,
      helperText: empContacto.help?.nombreUsuario,
      value: empContacto.nombreUsuario,
    },
    
    {
      id: 2,
      label: "Apelledo Paterno",
      name: "apellidopaterno",
      validations: { maxLength: 250 },
      error: empContacto?.error?.apellidoUsuario,
      helperText: empContacto.help?.apellidoUsuario,
      value: empContacto.apellidoUsuario,
    },
    {
        id: 3,
        label: "Apelledo Materno",
        name: "apellidomaterno",
        validations: { maxLength: 250 },
        error: empContacto?.error?.apellidoUsuario,
        helperText: empContacto.help?.apellidoUsuario,
        value: empContacto.apellidoUsuario,
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

  /* const validateField = (field, message) => {
    if (!field || typeof field !== 'string' || field.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: message,
        confirmButtonText: 'Aceptar',
      })
      return false
    }
    return true
  } */

  /* const validateFieldsForStepZero = () => {
    const { nombreUsuario, apellidoUsuario, telefono, error } = empContacto;
  
    if (!validateField(nombreUsuario, 'El campo Nombre es requerido')) return false;
    if (!validateField(apellidoUsuario, 'El campo Apellido es requerido')) return false;
    if (!validateField(telefono, 'El campo Número de télefono es requerido')) return false;
    if (error.nombreUsuario) {
      Swal.fire({
        icon: 'error',
        title: '¡Ups! Hubo un problema',
        html: '<p>Parece que hay un error en el campo <strong>nombre</strong></p>',
        confirmButtonText: 'Aceptar',
      });
      return false;
    }
    if (error.apellidoUsuario) {
      Swal.fire({
        icon: 'error',
        title: '¡Ups! Hubo un problema',
        html: '<p>Parece que hay un error en el campo <strong>apellido</strong></p>',
        confirmButtonText: 'Aceptar',
      });
      return false;
    }
    if (error.telefono) {
      Swal.fire({
        icon: 'error',
        title: '¡Ups! Hubo un problema',
        html: '<p>Parece que hay un error en el campo <strong>número de teléfono</strong></p>',
        confirmButtonText: 'Aceptar',
      });
      return false;
    }
    return true;
  }; */
  
  /* const validateFieldsForStepTwo = () => {
    const fields = ['municipio', 'codigoPostal', 'colonia', 'calle', 'numero', 'estado', 'pais'];
    for (let field of fields) {
      if (!validateField(empUbicacion[field], `El campo ${field} es requerido`)) return false;
    }
    return true;
  }; */
  

  /* useEffect(() => {
    async function getCurrentUserEmail() {
      const userInfo = await Auth.currentUserInfo();
      const userEmail = userInfo.attributes.email;
      setEmpContacto((prevState) => ({ ...prevState, email: userEmail }));
    }
    getCurrentUserEmail();
  }, []); */

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
  
    try {
      const fileName = 'img/' + file.name; 
      await Storage.put(fileName, file, { level: 'public', type: file.type });
  
      const imageUrl = `https://worklinkerd500aa700a28476bb7438a0dbef726b3222139-prod.s3.amazonaws.com/public/${fileName}`;
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
              label="Imagen estudiante"
              margin="normal"
              placeholder="Carga imagen del estudiante"
              value={imagenURL || ""}
              InputProps={{
                endAdornment: (
                  <label htmlFor="icon-button-file">
                    <Button component="span" variant="contained" startIcon={<TbCloudUpload />}
                      sx={{ backgroundColor: '#deeceb', '&:hover': { backgroundColor: '#deeceb' } }}>
                      Cargar
                    </Button>
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
</Card>
</div>
  );
}
export default RegistroUsuarioInformacion;
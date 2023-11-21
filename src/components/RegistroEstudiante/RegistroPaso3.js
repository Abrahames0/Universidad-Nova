import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import { Auth, DataStore } from "aws-amplify";

import Swal from "sweetalert2";

import { TbCloudUpload } from "react-icons/tb";


import { Button, TextField, Card, CardHeader, Grid } from "@mui/material";
import Direcciones from "./Direccion";


function RegistroPaso3() {

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
      label: "Nombres de la Madre",
      name: "nombresdemadre",
      validations: { maxLength: 250 },
      error: empContacto?.error?.nombreUsuario,
      helperText: empContacto.help?.nombreUsuario,
      value: empContacto.nombreUsuario,
    },
    {
      id: 2,
      label: "Apellido Paterno de la madre",
      name: "apellidopaterno",
      validations: { maxLength: 250 },
      error: empContacto?.error?.apellidoUsuario,
      helperText: empContacto.help?.apellidoUsuario,
      value: empContacto.apellidoUsuario,
    },
    {
        id: 3,
        label: "Apellido Materno de la madre",
        name: "apellidomaterno",
        validations: { maxLength: 250 },
        error: empContacto?.error?.apellidoUsuario,
        helperText: empContacto.help?.apellidoUsuario,
        value: empContacto.apellidoUsuario,
      },
    
    {
      id: 5,
      label: "Número de teléfono de la madre",
      name: "telefono",
      validations: { maxLength: 10 },
      error: empContacto.error?.telefono,
      helperText: empContacto.help?.telefono,
      value: empContacto.telefono,
    },
  ];

  const input = [
    {
      id: 1,
      label: "Nombres del padre",
      name: "nombresdemadre",
      validations: { maxLength: 250 },
      error: empContacto?.error?.nombreUsuario,
      helperText: empContacto.help?.nombreUsuario,
      value: empContacto.nombreUsuario,
    },
    {
      id: 2,
      label: "Apellido Paterno del padre",
      name: "apellidopaterno",
      validations: { maxLength: 250 },
      error: empContacto?.error?.apellidoUsuario,
      helperText: empContacto.help?.apellidoUsuario,
      value: empContacto.apellidoUsuario,
    },
    {
        id: 3,
        label: "Apellido Materno del padre",
        name: "apellidomaterno",
        validations: { maxLength: 250 },
        error: empContacto?.error?.apellidoUsuario,
        helperText: empContacto.help?.apellidoUsuario,
        value: empContacto.apellidoUsuario,
      },
    
    {
      id: 5,
      label: "Número de teléfono del padre",
      name: "telefono",
      validations: { maxLength: 10 },
      error: empContacto.error?.telefono,
      helperText: empContacto.help?.telefono,
      value: empContacto.telefono,
    },
  ];

  return (
    <div style={{ padding: '1rem' }}>
        <Card sx={{ justifyContent: "center", alignItems: "center", m: 1, padding: '1rem' }} variant="outlined">
            <Form noValidate autoComplete="off">
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={7} lg={6}>
                        <h6>Contacto Familiar Madre</h6>
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
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={7} lg={6}>
                        <h6>Contacto Familiar Padre</h6>
                        <Grid container spacing={2}>
                        {input.map((input) => (
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
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Form>
        </Card>
    </div>
  );
}
export default RegistroPaso3;
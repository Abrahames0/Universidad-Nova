import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

import { DataStore } from "aws-amplify";
import { SeleccionBachillerato, SeleccioCarrera } from "../../models";

import { TextField, Card, Autocomplete, Button, Grid } from "@mui/material";
import { TbCloudUpload } from "react-icons/tb";

function RegistroPaso4() {
  const [imagenURL, setImagenURL] = useState(null);
  const [promedio, setPromedio] = useState('');

  const [optionsBachi, setOptionsBachi] = useState([]);
  const [optionsEspe, setOptionsEspe ] = useState({});

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const items = await DataStore.query(SeleccionBachillerato);
        setOptionsBachi(items.map(item => item.nombreBachillerato));
      } catch (error) {
        console.error('Error al obtener datos', error);
      }
    };

    fetchOptions();
  }, []);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const items = await DataStore.query(SeleccioCarrera);
        setOptionsEspe(items.map(item => item.carrera));
      } catch (error) {
        console.error('Error al obtener datos', error);
      }
    };

    fetchOptions();
  }, []);

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
      promedioBachillerato: {
        regex: /[^0-9.]/g,
        regex2: /^(10(\.0{1,2})?|[0-9]{1}(\.[0-9]{1,2})?)$/,
        error: true,
        help: "Ingrese un promedio válido (0-10, hasta dos decimales).",
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

  
  const [empContacto, setEmpContacto] = useState({
    nombreUsuario: '',
    apellidoUsuario: '',
    email: '',
    telefono: '',
    error: {},
    help: {}
  });  

  return (
    <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-8 col-md-7 col-lg-6" style={{ padding: '1rem' }}>
        <Card sx={{ justifyContent: "center", alignItems: "center", m: 1, padding: '1rem' }} variant="outlined">
            <Form noValidate >
            <h6>Información Académica</h6>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                <Autocomplete
                    options={optionsBachi}
                    renderInput={(params) => (
                        <TextField {...params} label="Carrera que deseas cursar" variant="outlined" />
                    )}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                
                </Grid>
            </Grid>
            </Form>
        </Card>
        </div>
    </div>
  );

}
export default RegistroPaso4;
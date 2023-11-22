import { Alert, Autocomplete, Button, Grid, Snackbar, TextField } from "@mui/material";
import { DataStore, Storage } from "aws-amplify";
import { useEffect, useState } from "react";
import {SeleccionableCiudad} from '../../models';
import { TbCloudUpload } from "react-icons/tb";

const validaciones = {
  codigoPostal: {
    regex: /[^0-9]/g,
    regex2: /^(?:[0-9]{5}|[0-9]{0})$/,
    regexToBlock:
      /[()?*¨´_"$/\\?¿[\]{}:=^;<>+~°¬|.,a-zA-ZÑñ@'%#¡,.&+\sáéíóúÁÉÍÓÚ-\s]+/g,
    error: "Ingresa un código postal válido de 5 dígitos númericos",
    help: "Ingresa un código postal válido de 5 dígitos númericos",
  },
  colonia: {
    regex: /[^a-zA-ZñÑáéíóúÁÉÍÓÚ0-9()&\s]/g,
    regex2: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9()&.,-\s]{0,100}$/,
    regexToBlock: /[?*¨´_"$/\\?¿[\]{}:=^;<>+~,@'%#¡!°¬|+]+/g,
    error: "",
    help: "El campo colonia tiene un máximo 100 caracteres y no son válidos caracteres especiales",
  },
  calle: {
    regex: /[^a-zA-ZñÑáéíóúÁÉÍÓÚ0-9.,&\s-]/g,
    regex2: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9.,&\s-]{0,50}$/,
    regexToBlock: /[()?*¨´_"$/\\?¿[\]{}:=^;<>+~@%#¡!°¬|+]+/g,
    error: "",
    help: "El campo Calle tiene un máximo 50 caracteres y no son válidos caracteres especiales",
  },
  numero: {
    regex: /[^a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ.&\s-]+/g,
    regex2: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ.&\s-]{0,10}$/,
    regexToBlock: /[()?*¨´_"$/\\?¿[\]{}:=^;<>+~,@'%#¡!°¬|+]+/g,
    error: "a",
    help: "El campo Número exterior o interior de máximo 10 dígitos y no son válidos caracteres especiales",
  },
  municipio: {
    regex: /[^a-zA-ZñÑáéíóúÁÉÍÓÚ0-9()&\s]/g,
    regex2: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9()&.,-\s]{0,100}$/,
    regexToBlock: /[?*¨´_"$/\\?¿[\]{}:=^;<>+~,@'%#¡!°¬|+]+/g,
    error: "",
    help: "El campo colonia tiene un máximo 100 caracteres y no son válidos caracteres especiales",
  },
  estado: {
    regex: /[^a-zA-ZñÑáéíóúÁÉÍÓÚ0-9()&\s]/g,
    regex2: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9()&.,-\s]{0,150}$/,
    regexToBlock: /[?*¨´_"$/\\?¿[\]{}:=^;<>+~,@'%#¡!°¬|+]+/g,
    error: "",
    help: "El campo estado tiene un máximo 150 caracteres",
  },
};

const Direcciones = ({ comprobateDomicilioPDF, setComprobateDomicilioPDF, empUbicacion, setEmpUbicacion }) => {
  const [optionsDire, setOptionsDire] = useState([]);
  const [openSnack, setOpenSnack] = useState(false);
  const [snackbarMessag, setsnackbarMessag] = useState('');
  const [snackbarSeverit, setSnackbarSeverit] = useState('success');

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const items = await DataStore.query(SeleccionableCiudad);
        setOptionsDire(items.map(item => item.ciudad));
      } catch (error) {
        console.error('Error al obtener datos', error);
      }
    };

    fetchOptions();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newValue = value
      .replace(validaciones[name]?.regexToBlock || /()/g, "")
      .replace(/\s{1,}/g, " ");

    const error = !validaciones[name]?.regex2.test(value)
      ? validaciones[name]?.error
      : null;
    const help = error ? validaciones[name]?.help : null;

    setEmpUbicacion((past) => ({
      ...past,
      [name]: newValue,
      error: { ...past.error, [name]: error },
      help: { ...past.help, [name]: help },
    }));
  };

  const handleBlur = (e) => {
    const { value, name } = e.target;
    if (validaciones[name] && value === '') {
      const error = validaciones[name].error;
      setEmpUbicacion(past => ({
        ...past, 
        error: {
          ...past.error, 
          [name]: error
        }
      }));
    }
  };

  const inputs = [
    {
      id: 1,
      label: "Calle",
      name: "calle",
      validations: { maxLength: 50 },
      error: empUbicacion.error?.calle,
      helperText: empUbicacion.help?.calle,
      value: empUbicacion.calle,
    },
    {
      id: 2,
      label: "Número",
      name: "numero",
      validations: { maxLength: 10 },
      error: empUbicacion.error?.numero,
      helperText: empUbicacion.help?.numero,
      value: empUbicacion.numero,
    },
    {
      id: 3,
      label: "Colonia / Localidad",
      name: "colonia",
      validations: { maxLength: 100 },
      error: empUbicacion.error?.colonia,
      helperText: empUbicacion.help?.colonia,
      value: empUbicacion.colonia,
    },
    {
      id: 4,
      label: "Codigo Postal",
      name: "codigoPostal",
      validations: { maxLength: 5 },
      error: empUbicacion.error?.codigoPostal,
      helperText: empUbicacion.help?.codigoPostal,
      value: empUbicacion.codigoPostal,
    },
    {
      id: 5,
      label:"Estado",
      name: "estado",
      validations: {maxLength: 150 },
      error: empUbicacion.error?.estado,
      helperText: empUbicacion.help?.estado,
      value: empUbicacion.estado,
    }
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
          setsnackbarMessag('Formato de archivo no soportado');
          setSnackbarSeverit('error');
          setOpenSnack(true);
          return;
        }
  
        const fileName = `${folder}${Date.now()}-${file.name}`;
        await Storage.put(fileName, file, {
          level: 'public',
          contentType: file.type
        });
  
        const uploadedUrl = `https://universidad-nova-storage05757-prod.s3.amazonaws.com/public/${fileName}`;
        // Aquí establece la URL donde corresponda, dependiendo de si es un PDF o un PNG
        setComprobateDomicilioPDF(uploadedUrl);
  
        setsnackbarMessag(`Archivo ${fileType === "application/pdf" ? 'PDF' : 'PNG'} cargado exitosamente`);
        setSnackbarSeverit('success');
        setOpenSnack(true);
      } catch (error) {
        console.error('Error al cargar el archivo:', error);
  
        setsnackbarMessag('Error al guardar el archivo');
        setSnackbarSeverit('error');
        setOpenSnack(true);
      }
    } else {
      setsnackbarMessag('No se seleccionó ningún archivo');
      setSnackbarSeverit('error');
      setOpenSnack(true);
    }
  };   
  
  return (
    <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-8 col-md-7 col-lg-6">
      <h6>Direccion</h6>
      <div className="row p-2">
        {inputs.map((input) => (
          <div className="col-sm-12 col-md-6 p-2" key={input.id}>
            <TextField
                  value={empUbicacion[input.name] || ""}
                  label={input.label}
                  multiline={false}
                  size="normal"
                  margin="normal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name={input.name}
                  fullWidth
                  required
                  inputProps={input.validations}
                  error={!!input.error}
                  helperText={input.helperText}
                  onPaste={(e) => e.preventDefault()}
                />
          </div>
        ))}
        <Autocomplete
          options={optionsDire}
          onChange={(event, newValue) => {
            setEmpUbicacion(prevState => ({
              ...prevState,
              ciudad: newValue
            }));
          }}
          renderInput={(params) => (
            <TextField {...params} label="Ciudad de origen" variant="outlined" />
          )}
        />
        <Grid item xs={12} sm={6}>
                <TextField
                  label="Comprobante de domicilio"
                  size="normal"
                  margin="normal"
                  placeholder="Carga comprobante de domicilio"
                  value={comprobateDomicilioPDF || ""}
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
                          accept="application/pdf"
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
                  disabled={!!comprobateDomicilioPDF}
                />
              </Grid>
      </div>
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={() => setOpenSnack(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setOpenSnack(false)}
          severity={snackbarSeverit}
          sx={{ width: '100%' }}
        >
          {snackbarMessag}
        </Alert>
      </Snackbar>
      </div>
    </div>
  );
};

export default Direcciones;
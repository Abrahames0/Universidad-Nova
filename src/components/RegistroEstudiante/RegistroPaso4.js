import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { DataStore } from "aws-amplify";
import { CarreraAcursar } from "../../models";
import { TextField, Card, Autocomplete, Button, Grid } from "@mui/material";

function RegistroPaso4({ empContacto, infAcademica, setInfAcademica , setStep4Valid}) {
  const [optionsBachi, setOptionsBachi] = useState([]);


  console.log(infAcademica);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const items = await DataStore.query(CarreraAcursar);
        setOptionsBachi(items.map(item => item.carreraAcursar));
      } catch (error) {
        console.error('Error al obtener datos', error);
      }
    };

    fetchOptions();
  }, []);

  useEffect(() => {
    generarMatricula();
  }, [empContacto]); // Se ejecuta cada vez que cambia empContacto

  const generarMatricula = () => {
    const apellidoPaterno = empContacto?.apellidopaterno?.substring(0, 2).toUpperCase() ?? "";
    const apellidoMaterno = empContacto?.apellidomaterno?.substring(0, 2).toUpperCase() ?? "";
    const nombre = empContacto?.nombres?.charAt(0).toUpperCase() ?? "";
    const mes = new Date().getMonth() + 1;
    const año = new Date().getFullYear().toString().slice(-2);
    const matriculaGenerada = `${apellidoPaterno}${apellidoMaterno}${nombre}-${mes.toString().padStart(2, '0')}${año}`;

    setInfAcademica(prevState => ({
      ...prevState,
      matricula: matriculaGenerada,
    }));
    setStep4Valid(true)
  };

  return (
    <div className="row justify-content-center">
      <div className="col-xs-12 col-sm-8 col-md-7 col-lg-6" style={{ padding: '1rem' }}>
        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", m: 1, padding: '1rem' }} variant="outlined">
          <Form noValidate>
            <h6>Información Académica</h6>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <Autocomplete
                  fullWidth
                  options={optionsBachi}
                  onChange={(event, newValue) => {
                    setInfAcademica(prevState => ({
                      ...prevState,
                      carreraAcursar: newValue
                    }));
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Carrera que deseas cursar" variant="outlined" />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  disabled
                  label="Matrícula"
                  variant="outlined"
                  value={infAcademica.matricula}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
            </Grid>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default RegistroPaso4;
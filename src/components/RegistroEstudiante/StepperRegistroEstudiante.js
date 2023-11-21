import React, { useState } from 'react';
import { Box, CardHeader, Stepper, Step, StepLabel, Button, Snackbar, Alert } from '@mui/material';
import RegistroPaso1 from './RegistroPaso1';
import RegistroPaso2 from './RegistroPaso2';
import RegistroPaso3 from './RegistroPaso3';
import RegistroPaso4 from './RegistroPaso4';
import { Estudiante } from '../../models';
import { DataStore } from 'aws-amplify';


export const StepperRegistro = () => {
    const [activeStep, setActiveStep] = useState(0);
    //Estados de Validacion de Pasos
    const [step1Valid, setStep1Valid] = useState(false);
    const [step2Valid, setStep2Valid] = useState(false);
    const [step3Valid, setStep3Valid] = useState(false);
    const [step4Valid, setStep4Valid] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const [userEmail] = useState("");

    const [imagenURL, setImagenURL] = useState(null);

    const [empContacto, setEmpContacto] = useState({
      nombres: '',
      apellidopaterno: '',
      apellidomaterno: '',
      telefono: '',
      imagenURL: imagenURL,
      email: userEmail,
      error: {},
      help: {}
    });

    const [empAcademica, setEmpAcademica ] = useState({
    nombresBachillerato: '',
    promedio: '',
    especialidadCursada: '',
    error: {},
    help: {}
    });

    const [infAcademica, setInfAcademica] = useState({
        matricula: '',
        carreraAcursar:'',
      });

    const [empPadres, setEmpPadres] = useState({
        nombreMadre: '',
        apellidoPaternoMadre: '',
        apellidoMaternoMadre: '',
        telefonoMadre: '',
        nombrePadre: '',
        apellidoPaternoPadre: '',
        apellidoMaternoPadre: '',
        telefonoPadre: '',
      });
  
    const [empUbicacion, setEmpUbicacion] = useState({
      calle: "", numero: "", colonia: "", codigoPostal: "", estado: "", ciudad: "",
    });


    const guardarProducto = async () => {
        console.log(empContacto.imagenURL,);
        try {
          const estudiante = new Estudiante({
            nombre: empContacto.nombres,
            apellidoPaterno: empContacto.apellidopaterno,
            apellidoMaterno: empContacto.apellidomaterno,
            telefonoJoven: empContacto.telefono,
            correo: empContacto.email,
            imagenURL: imagenURL,    
          })
          await DataStore.save(estudiante);
          return true
        } catch (error) {
          console.error(error);
          throw error;
        }
      }

    const steps = ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4'];

    const handleNext = () => {
        if (activeStep === 0 && !step1Valid) {
            console.log("Complete el fomrulario del paso 1");
            return;
        }
        if (activeStep === 1 && !step2Valid) {
            // Mostrar mensaje de validación para el paso 2
            console.log("Complete el fomrulario del paso 2");
            return;
        }
        if (activeStep === 2 && !step3Valid) {
            // Mostrar mensaje de validación para el paso 3
            console.log("Complete el fomrulario del paso 3");
            return;
        }
        if (activeStep === 3 && !step4Valid) {
            // Mostrar mensaje de validación para el paso 3
            console.log("Complete el fomrulario del paso 4");
            return;
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <RegistroPaso1 imagenURL={imagenURL} setImagenURL={setImagenURL} snackbarMessage={snackbarMessage} setSnackbarMessage={setSnackbarMessage} openSnackbar={openSnackbar} setOpenSnackbar={setOpenSnackbar} snackbarSeverity={snackbarSeverity} setSnackbarSeverity={setSnackbarSeverity} empUbicacion={empUbicacion} setEmpUbicacion={setEmpUbicacion} empContacto={empContacto} setEmpContacto={setEmpContacto} setStep1Valid={setStep1Valid}/>;
            case 1:
                return <RegistroPaso2 empAcademica={empAcademica} setEmpAcademica={setEmpAcademica} setStep2Valid={setStep2Valid}/>;
            case 2:
                return <RegistroPaso3 empPadres={empPadres} setEmpPadres={setEmpPadres} setStep3Valid={setStep3Valid}/>;
            case 3:
                return <RegistroPaso4 empContacto={empContacto} infAcademica={infAcademica} setInfAcademica={setInfAcademica} setStep4Valid={setStep4Valid}/>;
            default:
                return 'Paso desconocido';
        }
    };

    return (
        <Box className='pb-5'>
            <CardHeader className="text-center" title="Registro de Usuario" />
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className="text-center">
                {getStepContent(activeStep)}
                <div>
                    <Button disabled={activeStep === 0} onClick={handleBack}>
                        Atrás
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                    </Button>
                </div>
            </div>
        </Box>
    );
};

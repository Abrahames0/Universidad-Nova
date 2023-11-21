import React, { useState } from 'react';
import { Box, CardHeader, Stepper, Step, StepLabel, Button } from '@mui/material';
import RegistroPaso1 from './RegistroPaso1';
import RegistroPaso2 from './RegistroPaso2';
import RegistroPaso3 from './RegistroPaso3';
import RegistroPaso4 from './RegistroPaso4';
import { Estudiante, Padres, Domicilio } from '../../models';
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
    const [certificadoPDF, setCertificadoPDF] = useState(null);
    const [comprobateDomicilioPDF, setComprobateDomicilioPDF] = useState(null);


    const [empContacto, setEmpContacto] = useState({
      nombres: '',
      apellidopaterno: '',
      apellidomaterno: '',
      telefono: '',
      imagenURL: imagenURL,
      email: userEmail,
      comprobateDomicilioPDF: comprobateDomicilioPDF,
      certificadoPDF: certificadoPDF,
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


    const guardarDireccion = async () => {
        try {
          const direccion = new Domicilio({
            calle: empUbicacion.calle,
            numero: empUbicacion.numero,
            colonia: empUbicacion.colonia,
            ciudad: empUbicacion.ciudad,
            codigoPostal: empUbicacion.codigoPostal,
            estado: empUbicacion.estado    
          })
          const direccionGuardada = await DataStore.save(direccion);
          return direccionGuardada.id; // Retorna el ID de la dirección guardada
        } catch (error) {
          console.error(error);
          throw error;
        }
      }

      const handleFinalizar = async () => {
        try {
            const domicilioID = await guardarDireccion();
            if (domicilioID) {
                await guardarProducto(domicilioID);  // Aquí pasas el domicilioID
                // ... Resto del código
            } else {
                console.error("Error al guardar la dirección");
            }
        } catch (error) {
            console.error("Error al completar el registro", error);
        }
    };    
    
    
    const guardarProducto = async (domicilioID) => {
        console.log(empContacto.imagenURL);
        try {
          const estudiante = new Estudiante({
            domicilioID: domicilioID,
            matricula: infAcademica.matricula,
            nombre: empContacto.nombres,
            apellidoPaterno: empContacto.apellidopaterno,
            apellidoMaterno: empContacto.apellidomaterno,
            telefonoJoven: empContacto.telefono,
            correo: empContacto.email,
            promedioBachillerato: parseInt(empAcademica.promedio),
            bachilleratoProcedencia: empAcademica.nombresBachillerato,
            especialidadProveniente: empAcademica.especialidadCursada,
            carreraDeseada: infAcademica.carreraAcursar,
            fotoEstudiante: imagenURL,
            certificadoBachillerato: certificadoPDF,
            comprobateDomicilio: comprobateDomicilioPDF,
          })
          await DataStore.save(estudiante);
          return true
        } catch (error) {
          console.error(error);
          throw error;
        }
      }

      const guardarPadres = async () => {
        try {
            const padres = new Padres({
            nombreMa: empPadres.nombreMadre,
            apellidoPaternoMa: empPadres.apellidoPaternoMadre,
            apellidoMaternoMa: empPadres.apellidoMaternoMadre,
            telefonoMa: empPadres.telefonoMadre,
            nombrePa: empPadres.apellidoPaternoPadre,
            apellidoPaternoPa: empPadres.apellidoPaternoPadre,
            apellidoMaternoPa: empPadres.apellidoMaternoPadre,
            telefonoPa: empPadres.telefonoPadre 
            });
            await DataStore.save(padres);
            return true;
        } catch (error) {
            console.error("Error al guardar padres:", error);
            throw error;
        }
    };

    const steps = ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4'];

    const handleNext = async () => {
        if (activeStep === steps.length - 1) {
            // Es el último paso, ejecuta las funciones de guardado
            try {
                const estudianteGuardado = await guardarProducto();
                const padresGuardados = await guardarPadres();
                const direccionGuardada = await guardarDireccion();
    
                if (estudianteGuardado && padresGuardados && direccionGuardada) {
                    // Todo se guardó correctamente
                    console.log("Datos guardados correctamente");
                    // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
                } else {
                    // Hubo un error en alguna de las operaciones de guardado
                    console.error("Error al guardar los datos");
                    // Aquí puedes manejar el error, mostrar un mensaje, etc.
                }
            } catch (error) {
                console.error("Error al guardar los datos", error);
                // Manejo del error
            }
        } else {
            // No es el último paso, simplemente pasa al siguiente paso
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
        }
    };    

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <RegistroPaso1 comprobateDomicilioPDF={comprobateDomicilioPDF} setComprobateDomicilioPDF={setComprobateDomicilioPDF} imagenURL={imagenURL} setImagenURL={setImagenURL} empUbicacion={empUbicacion} setEmpUbicacion={setEmpUbicacion} empContacto={empContacto} setEmpContacto={setEmpContacto} setStep1Valid={setStep1Valid}/>;
            case 1:
                return <RegistroPaso2 certificadoPDF={certificadoPDF} setCertificadoPDF={setCertificadoPDF} empAcademica={empAcademica} setEmpAcademica={setEmpAcademica} setStep2Valid={setStep2Valid} />;
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
                    <Button variant="contained" color="primary" onClick={activeStep === steps.length - 1 ? handleFinalizar : handleNext}>
                        {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                    </Button>
                </div>
            </div>
        </Box>
    );
};

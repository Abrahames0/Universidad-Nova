import React, { useState, useEffect } from 'react';
import { Box, CardHeader, Stepper, Step, StepLabel, Button } from '@mui/material';
import RegistroPaso1 from './RegistroPaso1';

import { Estudiante, Padres, Domicilio } from '../../models';
import { DataStore } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import EnviarCorreoHook from '../EnviarCorreoHook.jsx'
import Direcciones from './RegistroPasoDomicilio.js';
import { withValidation } from '../hooks/DecorativeValidatios.js';
import Swal from 'sweetalert2';
import QueEstudiar from './QueEstudiar.js';
import FormularioFactory from './FormularioFactory.js';

export const StepperRegistro = () => {
 
    const [userEmail] = useState("");
    const navigate= useNavigate();
    
    const steps = ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4', 'Paso 5', 'Paso 6'];
    //Estados de Validacion de Pasos
    const [step2Valid, setStep2Valid] = useState(false);
    const [step3Valid, setStep3Valid] = useState(false);
    const [step4Valid, setStep4Valid] = useState(false);
    
    const [activeStep, setActiveStep] = useState(0);
    const [subStep, setSubStep] = useState('');

    const [imagenURL, setImagenURL] = useState(null);
    const [certificadoPDF, setCertificadoPDF] = useState(null);
    const [cartaPDF, setCartaPDF] = useState(null);
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
      especialidadCursada: '', //ing

      nombresUniversidad: '', //maes
      promedioUniversidad: '', 
      tituloGrado: '',
      fechaGraduacion: '',
      areaEspecialicacion: '',
      razonPrograma: '',
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

    const [empQueEstudiar, setEmpQueEstudiar] = useState({
      queEstudiar: "",
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
      
      useEffect(() => {
        console.log(activeStep)
      }, [activeStep]);

      const validarDatosPadres = (datos) => {
        // Lista de campos requeridos para el registro de padres
        const camposRequeridos = [
          'nombreMadre', 'apellidoPaternoMadre', 'apellidoMaternoMadre', 'telefonoMadre',
          'nombrePadre', 'apellidoPaternoPadre', 'apellidoMaternoPadre', 'telefonoPadre'
        ];
        
        // Verifica que cada campo requerido exista y no esté vacío
        for (let campo of camposRequeridos) {
          if (!datos[campo] || datos[campo].trim() === '') {
            return { valido: false, mensaje: `El campo "${campo}" está incompleto.` };
          }
        }
        
        // Verifica que los números de teléfono sean válidos (podrías ajustar la regex según tus necesidades)
        const regexTelefono = /^[0-9]{10}$/;
        if (!regexTelefono.test(datos.telefonoMadre) || !regexTelefono.test(datos.telefonoPadre)) {
          return false; // Retorna false si algún teléfono no es válido
        }
            
        // Si todas las validaciones pasan, retorna true
        return { valido: true };
      };

      const validarDatos = () => {
        let tipoValidacion;
          if (activeStep === 4) {
            tipoValidacion = subStep;
          }
        switch (activeStep) {
          case 0:
            // Validaciones para el paso 1
            if (!empContacto.nombres) {
              return { valido: false, mensaje: "El campo 'Nombres' está incompleto." };
            }
            if (!empContacto.apellidopaterno) {
              return { valido: false, mensaje: "El campo 'Apellido Paterno' está incompleto." };
            }
            if (!empContacto.apellidomaterno) {
              return { valido: false, mensaje: "El campo 'Apellido Materno' está incompleto." };
            }
            if (!empContacto.telefono) {
              return { valido: false, mensaje: "El campo 'Telefono' está incompleto." };
            }
            break;
          case 1:
            /* Direcciones */
            if (!empUbicacion.calle) {
              return { valido: false, mensaje: "El campo 'Calle' está incompleto." };
            }
            if (!empUbicacion.numero) {
              return { valido: false, mensaje: "El campo 'Numero' está incompleto." };
            }
            if (!empUbicacion.colonia) {
              return { valido: false, mensaje: "El campo 'Colonia' está incompleto." };
            }
            if (!empUbicacion.codigoPostal) {
              return { valido: false, mensaje: "El campo 'Codigo postal' está incompleto." };
            }
            if (!empUbicacion.estado) {
              return { valido: false, mensaje: "El campo 'Estado' está incompleto." };
            }
            if (!empUbicacion.ciudad) {
              return { valido: false, mensaje: "El campo 'Ciudad' está incompleto." };
            }
            break;          
          case 3:
            /* Componete de informacion academica */
          if (!empAcademica.nombresBachillerato) {
            return { valido: false, mensaje: "El campo 'Nombre de tu bachillerato' está incompleto." };
          }
          if (!empAcademica.promedio) {
            return { valido: false, mensaje: "El campo 'Promedio' está incompleto." };
          }
          if (!empAcademica.especialidadCursada) {
            return { valido: false, mensaje: "El campo 'Especialidad' está incompleto." };
          }
            break;
            case 4:
              if (empQueEstudiar.queEstudiar === 'ingenieria') {
                if (!empPadres.nombreMadre) {
                  return { valido: false, mensaje: "El campo 'Nombre de la madre' está incompleto." };
                }
                if (!empPadres.apellidoPaternoMadre) {
                  return { valido: false, mensaje: "El campo 'Apellido paterno de la madre' está incompleto." };
                }
                if (!empPadres.apellidoMaternoMadre) {
                  return { valido: false, mensaje: "El campo 'Apellido materno de la madre' está incompleto." };
                }
                if (!empPadres.telefonoMadre) {
                  return { valido: false, mensaje: "El campo 'Telefono de la madre' está incompleto." };
                }
                /* Componete de los padres -- padre */
                if (!empPadres.nombrePadre) {
                  return { valido: false, mensaje: "El campo 'Nombre de la padre' está incompleto." };
                }
                if (!empPadres.apellidoPaternoPadre) {
                  return { valido: false, mensaje: "El campo 'Apellido paterno del padre' está incompleto." };
                }
                if (!empPadres.apellidoMaternoPadre) {
                  return { valido: false, mensaje: "El campo 'Apellido materno del padre' está incompleto." };
                }
                if (!empPadres.telefonoPadre) {
                  return { valido: false, mensaje: "El campo 'Telefono del padre' está incompleto." };
                }
              } else if (empQueEstudiar.queEstudiar === 'maestria') {
                // Validaciones para los datos adicionales
                if (!empAcademica.razonPrograma) {
                  return { valido: false, mensaje: "El campo 'Razón del Programa' está incompleto." };
                }
              }
              break;
          case 5:
          if (!infAcademica.carreraAcursar) {
            return { valido: false, mensaje: "El campo 'Carrera que desea cursar' está incompleto." };
          } 
        break;
        }
        return { valido: true };
      };

    const handleNext = async () => {
        if (activeStep === steps.length - 1) {
            // Es el último paso, ejecuta las funciones de guardado
            try {
                navigate('/vista-alumnos')
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
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };   
    
    const handleFinalizar = async () => {
      try {
        const domicilioID = await guardarDireccion();
        if (domicilioID) {
          const estudianteGuardado = await guardarProducto(domicilioID);
          const padresGuardados = await guardarPadres();
          if (estudianteGuardado && padresGuardados) {
            // Si todo se guardó correctamente, muestra un mensaje de éxito
            await Swal.fire(
              '¡Registro completo!',
              'Los datos se han guardado correctamente.',
              'success'
            );
            // Redirige al usuario a la vista de alumnos
            navigate('/vista-alumnos');
          } else {
            // Si algo no se guardó correctamente, muestra un mensaje de error
            Swal.fire(
              'Error',
              'Hubo un problema al guardar la información. Por favor, intenta de nuevo.',
              'error'
            );
          }
        } else {
          console.error("Error al guardar la dirección");
          throw new Error("Error al guardar la dirección");
        }
      } catch (error) {
        console.error("Error al completar el registro", error);
        // Muestra un mensaje de error con Swal
        Swal.fire(
          'Error',
          'Hubo un problema al guardar la información. Por favor, intenta de nuevo.',
          'error'
        );
      }
    };

    const handleNextWithValidation = withValidation(handleNext, validarDatos);
    const handleFinalizarWithValidation = withValidation(handleFinalizar, validarDatos);

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getStepContent = (stepIndex) => {
      switch (stepIndex) {
        case 0:
          return (
            <RegistroPaso1
              comprobateDomicilioPDF={comprobateDomicilioPDF}
              setComprobateDomicilioPDF={setComprobateDomicilioPDF}
              imagenURL={imagenURL}
              setImagenURL={setImagenURL}
              empContacto={empContacto}
              setEmpContacto={setEmpContacto}
            />
          );
        case 1:
          return (
            <Direcciones
              comprobateDomicilioPDF={comprobateDomicilioPDF}
              setComprobateDomicilioPDF={setComprobateDomicilioPDF}
              empUbicacion={empUbicacion}
              setEmpUbicacion={setEmpUbicacion}
            />
          );
        case 2:
          return (
            <QueEstudiar
              empQueEstudiar={empQueEstudiar}
              setEmpQueEstudiar={setEmpQueEstudiar}
            />
          );
        case 3:
          const Formulario = FormularioFactory.crearFormulario( empQueEstudiar.queEstudiar, activeStep );
          if (Formulario) {
            return (
              <Formulario certificadoPDF={certificadoPDF} setCertificadoPDF={setCertificadoPDF} empAcademica={empAcademica} setEmpAcademica={setEmpAcademica} setStep2Valid={setStep2Valid}/>
            );
          } else
            return <div>Por favor, selecciona un programa para continuar.</div>;
        case 4:
          const Formulario1 = FormularioFactory.crearFormulario(empQueEstudiar.queEstudiar, stepIndex);
          if (Formulario1) {
            return (
              <Formulario1 cartaPDF={cartaPDF} setCartaPDF={setCartaPDF} empPadres={empPadres} setEmpPadres={setEmpPadres} setStep3Valid={setStep3Valid} empAcademica={empAcademica} setEmpAcademica={setEmpAcademica}/>
            );
          } else
            return <div>Por favor, selecciona un programa para continuar.</div>;
        case 5:
          const InAcadémica = FormularioFactory.crearFormulario(empQueEstudiar.queEstudiar, stepIndex);
          if (InAcadémica) {
            return (
              <InAcadémica empContacto={empContacto} infAcademica={infAcademica} setInfAcademica={setInfAcademica} setStep4Valid={setStep4Valid}/>
            );
          } else
            return <div>Por favor, selecciona un programa para continuar.</div>;
        default:
          return "Paso desconocido";
      }
    }; 

    const guardarProducto = async (domicilioID) => {
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
          queDeseasEstudiar: empQueEstudiar.queEstudiar,
          cartaIntencion: cartaPDF,
          comprobateDomicilio: comprobateDomicilioPDF,
        })
        await DataStore.save(estudiante);
        await EnviarCorreoHook(estudiante.correo, estudiante.matricula)
        return true
      } catch (error) {
        console.error(error);
        throw error;
      }
    }

  const guardarPadres = async () => {
    try {
        if (!validarDatosPadres(empPadres)) {
            throw new Error("Datos de padres incompletos o inválidos");
        }
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
        throw error; // Re-lanza el error si es necesario
    }
};

  return (
    <Box className="pb-5">
      <CardHeader className="text-center" title="Registro de Usuario" />
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box className="text-center">
        {getStepContent(activeStep)}
        <Box className="pb-5">
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Atrás
          </Button>
          <Button variant="contained" color="primary"
            onClick={ activeStep === steps.length - 1 ? handleFinalizarWithValidation : handleNextWithValidation } >
            {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
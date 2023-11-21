import React, { useState } from 'react';
import { Box, CardHeader, Stepper, Step, StepLabel, Button } from '@mui/material';
import RegistroPaso1 from './RegistroPaso1';
import RegistroPaso2 from './RegistroPaso2';
import RegistroPaso3 from './RegistroPaso3';
import RegistroPaso4 from './RegistroPaso4';

export const StepperRegistro = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4'];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <RegistroPaso1 />;
            case 1:
                return <RegistroPaso2 />;
            case 2:
                return <RegistroPaso3 />;
            case 3:
                return <RegistroPaso4 />;
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

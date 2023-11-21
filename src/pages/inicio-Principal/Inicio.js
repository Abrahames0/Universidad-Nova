import { Button } from '@mui/material';
import React from 'react';
import Logo from '../../assets/img/Universidad Nova.png'


const Inicio = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20%' }}>
             <img src={Logo} alt="logo-nova" className="img-fluid logo-nova" />
            <h1>Bienvenido a la Universidad Nova</h1>
            <Button 
                variant="contained" 
                color="primary" 
                style={{ margin: '10px' }}
                href='/registro-estudiante'
            >
                Iniciar Registro
            </Button>
            <Button 
                variant="contained" 
                color="secondary" 
                style={{ margin: '10px' }}
            >
                Iniciar Sesión
            </Button>
        </div>
    );
};

export default Inicio;

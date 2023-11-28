//Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Importaciones AWS
import awsconfig from './aws-exports';
import { Amplify, Auth, AuthModeStrategyType, I18n} from 'aws-amplify';
//Importaciones Estilo
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//Importaciones de paginas
import LoginEstudiantes from './pages/perfil-Estudiante/LoginEstudiantes';
import VistaAlumnos from './components/VistaAlumnos';
import VistaAlumnoUnico from './components/VistaAlumnoUnico';
import Inicio from './pages/inicio-Principal/Inicio';
import { translations } from '@aws-amplify/ui-react';

import ThemeToggle from './components/ThemeToggle';

//Importaciones del Contexto de Tema
import { ThemeProvider } from './components/ThemeContext';

import Registro from './pages/perfil-Estudiante/Registro';

I18n.putVocabularies(translations);
I18n.setLanguage('es');

I18n.putVocabularies({
  es: {
    'Enter your Email': 'Ingresa tu correo electrónico',
    'Enter your Password': 'Ingresa tu contraseña',
    'Please confirm your Password': 'Confirma tu contraseña',
    'Password must have at least 8 characters': 'La contraseña debe tener al menos 8 caracteres',
    'Password must have numbers': 'La contraseña debe tener números',
    'Password must have lower case letters': 'La contraseña debe tener letras minúsculas',
    'Password must have special characters': 'La contraseña debe tener caracteres especiales',
    'Password must have upper case letters': 'La contraseña debe tener letras mayúsculas',
    'User does not exist.': 'El usuario no existe',
    'Network error': 'Error de red'
  }
});

Amplify.configure({ ...awsconfig, DataStore: { authModeStrategyType: AuthModeStrategyType.MULTI_AUTH } });
Auth.configure(awsconfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/login-estudiante",
    element: <LoginEstudiantes/>,
  },
  {
    path: "/vista-alumnos",
    element: <VistaAlumnos/>,
  },
  {
    path: "/vista-alumno-unico",
    element: <VistaAlumnoUnico/>,
  },
  {
    path: "/registro-estudiante",
    element: <Registro/>
  },
]);


// Componente principal App
function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
     <ThemeToggle /> 

    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
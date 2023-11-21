//Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Importaciones AWS
import awsconfig from './aws-exports';
import { Amplify, Auth, AuthModeStrategyType} from 'aws-amplify';
//Importaciones Estilo
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//Importaciones de paginas
import Apps from './App';
import LoginEstudiantes from './pages/perfil-Estudiante/LoginEstudiantes';
import VistaAlumnos from './components/VistaAlumnos';
import VistaAlumnoUnico from './components/VistaAlumnoUnico';


Amplify.configure({ ...awsconfig, DataStore: { authModeStrategyType: AuthModeStrategyType.MULTI_AUTH } });
Auth.configure(awsconfig);



const router = createBrowserRouter([
  {
    path: "/",
    element: <Apps />,
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
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
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
import LoginEstudiantes from './pages/perfil-Estudiante/LoginEstudiantes';
import Inicio from './pages/inicio-Principal/Inicio';
import { StepperRegistro } from './components/RegistroEstudiante/StepperRegistroEstudiante';


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
    path: "/registro-estudiante",
    element: <StepperRegistro/>
  }
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
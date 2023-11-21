  import * as React from 'react';
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import Toolbar from '@mui/material/Toolbar';
  import Typography from '@mui/material/Typography';
  import Button from '@mui/material/Button';

  import { useNavigate } from 'react-router-dom';
  import { Auth, DataStore } from 'aws-amplify';
import { Link } from '@mui/material';


  export default function NavBar({userGroups}) {
    const navigate= useNavigate();
    const isAdmin = userGroups && userGroups.includes('administrador');
    const isLeader = userGroups && userGroups.includes('supervisor');
  
    
   
    const handleButtonClick = (route) => {
      navigate(route);
    }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
              <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img src="https://www.utng.edu.mx/assets/principal/logoutng.webp" alt="Logo" />
                </Typography>
               </>
                  <Link style={{color: "white"}} sx={{ flexGrow: 0.2 }} onClick={() => {
                    console.info("Vamos a las Becas");}
                    }>
                    Becas
                  </Link>
                  <Link style={{color: "white"}} sx={{ flexGrow: 0.2 }} onClick={() => {
                    console.info("Vamos a las Carreras");}} >
                    Carreras
                  </Link>
                  <Link style={{color: "white"}} sx={{ flexGrow: 0.2 }} onClick={() => {
                    console.info("Vamos a la Biblioteca!");}}>
                    Biblioteca
                  </Link >
          </Toolbar>
        </AppBar>
      </Box>
    );
    
  }

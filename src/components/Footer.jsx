  import * as React from 'react';
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import Toolbar from '@mui/material/Toolbar';
  import Typography from '@mui/material/Typography';
  import Button from '@mui/material/Button';
  

  import { useNavigate } from 'react-router-dom';
  import { Auth, DataStore } from 'aws-amplify';
import { Link } from '@mui/material';


  export default function Footer({userGroups}) {
    const navigate= useNavigate();
    const isAdmin = userGroups && userGroups.includes('administrador');
    const isLeader = userGroups && userGroups.includes('supervisor');

    
   
    const handleButtonClick = (route) => {
      navigate(route);
    }

    return (
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="static"  >
          <Toolbar>
              <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img src="https://www.seg.guanajuato.gob.mx/_catalogs/masterpage/SEG_2023/img/logoseg23.png" alt="Logo" />
                </Typography>
               </>
          </Toolbar>
        </AppBar>
      </Box>
    );  
    
  }

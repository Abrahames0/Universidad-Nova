import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../assets/img/Universidad Nova.png";

import { useNavigate } from "react-router-dom";

export default function NavBar({ userGroups }) {
  const navigate = useNavigate();

  export default function NavBar({userGroups}) {
    const navigate= useNavigate();
    const isAdmin = userGroups && userGroups.includes('administrador');
    const isLeader = userGroups && userGroups.includes('supervisor');
  
    
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
              <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img style={{width: "7%"}}src={Logo} alt="logo-nova" className="img-fluid logo-nova" />
                </Typography>
               </>
                  {/* <Link style={{color: "white"}} sx={{ flexGrow: 0.2 }} onClick={() => {
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
                  </Link > */}
          </Toolbar>
        </AppBar>
      </Box>
    );
    
  }

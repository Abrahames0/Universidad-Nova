 import { withAuthenticator } from "@aws-amplify/ui-react";
 import { Auth } from "aws-amplify";
 import { Button } from "@mui/material";
 import React,{useLayoutEffect,useState} from "react";
 import '@aws-amplify/ui-react/styles.css';
 import { useNavigate } from "react-router-dom";

function LoginEstudiante() {
    const [userData, setuserData] = useState("")
    const navigate= useNavigate();

    useLayoutEffect(() => {
        const fetchData =async () =>{
            const data= await Auth.currentAuthenticatedUser();
            setuserData(data)
        }
    
        fetchData();
    }, [])

    useLayoutEffect(() => {
        console.log(userData);
      
    }, [userData])
    const handleSingOut = async () =>{
        await Auth.signOut();
        navigate('/')
    }
    

    return(
        <>
        <Button onClick={handleSingOut}>Cerrar Sesion</Button>
        Hola 
        </>
    )
}


export default withAuthenticator(LoginEstudiante,  {
    initialState: 'signUp',
  });
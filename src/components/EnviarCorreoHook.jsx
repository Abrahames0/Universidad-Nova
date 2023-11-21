import { Auth } from 'aws-amplify';

async function EnviarCorreoHook(usuario) {
    try {
      const user = await Auth.currentSession();
      var token = user.idToken.jwtToken;
      const url = process.env.REACT_APP_API + "/correoExitoso";
      const requestOptions = {
        method: 'POST',
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: usuario.correo}),
      };
      const response = await fetch(url, requestOptions
      );
      const data = await response.json();
      // Si necesitas hacer algo con los datos devueltos, puedes hacerlo aquí
        
    } catch (error) {        
    }
}
export default EnviarCorreoHook
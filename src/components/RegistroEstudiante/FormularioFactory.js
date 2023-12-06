import RegistroMaestriaPaso4 from "./RegistroMaestria/RegistroMaestriaPaso4";
import RegistroMaestriaPaso5 from "./RegistroMaestria/RegistroMaestriaPaso5";
import RegistroMaestriaPaso6 from "./RegistroMaestria/RegistroMaestriaPaso6";
import RegistroPaso2 from "./RegistroPaso2";
import RegistroPaso3 from "./RegistroPaso3";
import RegistroPaso4 from "./RegistroPaso4";
  
  // FormularioFactory.js
  const FormularioFactory = {
    crearFormulario: (tipo, paso) => {
      console.log("FormularioFactory - Tipo:", tipo, "Paso:", paso);
  
      if (tipo === 'Ingeniería') {
        switch (paso) {
          case 3:
            return RegistroPaso2;
          case 4:
            return RegistroPaso3;
          case 5:
            return RegistroPaso4;
          default:
            return null;
        }
      } else if (tipo === 'Maestría') {
        switch (paso) {
          case 3:
            return RegistroMaestriaPaso4;
          case 4:
            return RegistroMaestriaPaso5;
          case 5:
            return RegistroMaestriaPaso6;
          default:
            return null;
        }
      }
    }
  };
  
  
  export default FormularioFactory;
  
import Swal from "sweetalert2";

export const withValidation = (originalFunction, validationFunction) => {
    return async (...args) => {
      const resultadoValidacion = validationFunction(...args);
  
      if (!resultadoValidacion.valido) {
        await Swal.fire({
          title: 'Error!',
          text: resultadoValidacion.mensaje,
          icon: 'error',
          confirmButtonText: 'Entendido'
        });
        return;
      }
  
      return originalFunction(...args); 
    };
  };
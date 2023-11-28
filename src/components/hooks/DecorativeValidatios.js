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

  const guardarInformacion = async (datos) => {
    try {
      // Lógica para guardar la información en la base de datos
      // ...
  
      // Si todo sale bien, muestra un Swal de éxito
      await Swal.fire({
        title: '¡Éxito!',
        text: 'La información se guardó correctamente.',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
  
      return true; // Retornar true para indicar que todo fue exitoso
    } catch (error) {
      console.error('Error al guardar la información:', error);
  
      await Swal.fire({
        title: 'Error!',
        text: 'No se pudo guardar la información.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
  
      return false;
    }
  }
  
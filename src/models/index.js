// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SeleccioCarrera, SeleccionableCiudad, SeleccionBachillerato, Persona, Carrera, Especialidad, Bachillerato, Domicilio, Estudiante } = initSchema(schema);

export {
  SeleccioCarrera,
  SeleccionableCiudad,
  SeleccionBachillerato,
  Persona,
  Carrera,
  Especialidad,
  Bachillerato,
  Domicilio,
  Estudiante
};
// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Persona, Carrera, Especialidad, Bachillerato, Domicilio, Estudiante } = initSchema(schema);

export {
  Persona,
  Carrera,
  Especialidad,
  Bachillerato,
  Domicilio,
  Estudiante
};
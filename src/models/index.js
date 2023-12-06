// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ProgramaElegir, UniversidadProveniente, CarreraAcursar, SeleccioCarrera, SeleccionableCiudad, SeleccionBachillerato, Padres, Domicilio, Estudiante } = initSchema(schema);

export {
  ProgramaElegir,
  UniversidadProveniente,
  CarreraAcursar,
  SeleccioCarrera,
  SeleccionableCiudad,
  SeleccionBachillerato,
  Padres,
  Domicilio,
  Estudiante
};
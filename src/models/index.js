// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CarreraAcursar, SeleccioCarrera, SeleccionableCiudad, SeleccionBachillerato, Padres, Domicilio, Estudiante } = initSchema(schema);

export {
  CarreraAcursar,
  SeleccioCarrera,
  SeleccionableCiudad,
  SeleccionBachillerato,
  Padres,
  Domicilio,
  Estudiante
};
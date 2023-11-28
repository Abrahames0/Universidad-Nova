// hooks/useEstudiantes.js
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Estudiante } from '../../models';

const useEstudiantes = () => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const fetchAlumnos = async () => {
      const models = await DataStore.query(Estudiante);
      setAlumnos(models);
    };

    fetchAlumnos();
  }, []);

  const eliminarEstudiante = async (id) => {
    const modelToDelete = await DataStore.query(Estudiante, id);
    await DataStore.delete(modelToDelete);
    setAlumnos(alumnos.filter(alumno => alumno.id !== id));
  };

  return [alumnos, eliminarEstudiante];
};

export default useEstudiantes;

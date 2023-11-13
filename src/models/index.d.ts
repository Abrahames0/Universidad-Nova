import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerPersona = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Persona, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly parentesco?: string | null;
  readonly Estudiante?: Estudiante | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly personaEstudianteId?: string | null;
}

type LazyPersona = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Persona, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly parentesco?: string | null;
  readonly Estudiante: AsyncItem<Estudiante | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly personaEstudianteId?: string | null;
}

export declare type Persona = LazyLoading extends LazyLoadingDisabled ? EagerPersona : LazyPersona

export declare const Persona: (new (init: ModelInit<Persona>) => Persona) & {
  copyOf(source: Persona, mutator: (draft: MutableModel<Persona>) => MutableModel<Persona> | void): Persona;
}

type EagerCarrera = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Carrera, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly Estudiante?: (Estudiante | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCarrera = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Carrera, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly Estudiante: AsyncCollection<Estudiante>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Carrera = LazyLoading extends LazyLoadingDisabled ? EagerCarrera : LazyCarrera

export declare const Carrera: (new (init: ModelInit<Carrera>) => Carrera) & {
  copyOf(source: Carrera, mutator: (draft: MutableModel<Carrera>) => MutableModel<Carrera> | void): Carrera;
}

type EagerEspecialidad = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Especialidad, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly Estudiante?: (Estudiante | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEspecialidad = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Especialidad, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly Estudiante: AsyncCollection<Estudiante>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Especialidad = LazyLoading extends LazyLoadingDisabled ? EagerEspecialidad : LazyEspecialidad

export declare const Especialidad: (new (init: ModelInit<Especialidad>) => Especialidad) & {
  copyOf(source: Especialidad, mutator: (draft: MutableModel<Especialidad>) => MutableModel<Especialidad> | void): Especialidad;
}

type EagerBachillerato = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bachillerato, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly Estudiantes?: (Estudiante | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBachillerato = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bachillerato, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly Estudiantes: AsyncCollection<Estudiante>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bachillerato = LazyLoading extends LazyLoadingDisabled ? EagerBachillerato : LazyBachillerato

export declare const Bachillerato: (new (init: ModelInit<Bachillerato>) => Bachillerato) & {
  copyOf(source: Bachillerato, mutator: (draft: MutableModel<Bachillerato>) => MutableModel<Bachillerato> | void): Bachillerato;
}

type EagerDomicilio = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Domicilio, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly calle?: string | null;
  readonly numero?: string | null;
  readonly colonia?: string | null;
  readonly ciudad?: string | null;
  readonly codigoPostal?: string | null;
  readonly Estudiante?: (Estudiante | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDomicilio = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Domicilio, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly calle?: string | null;
  readonly numero?: string | null;
  readonly colonia?: string | null;
  readonly ciudad?: string | null;
  readonly codigoPostal?: string | null;
  readonly Estudiante: AsyncCollection<Estudiante>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Domicilio = LazyLoading extends LazyLoadingDisabled ? EagerDomicilio : LazyDomicilio

export declare const Domicilio: (new (init: ModelInit<Domicilio>) => Domicilio) & {
  copyOf(source: Domicilio, mutator: (draft: MutableModel<Domicilio>) => MutableModel<Domicilio> | void): Domicilio;
}

type EagerEstudiante = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Estudiante, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly matricula?: string | null;
  readonly nombre?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly telefonoCasa?: string | null;
  readonly telefonoJoven?: string | null;
  readonly telefonoTutor?: string | null;
  readonly correo?: string | null;
  readonly promedioBachillerato?: number | null;
  readonly fechaRegistro?: string | null;
  readonly fotoEstudiante?: string | null;
  readonly certificadoBachillerato?: string | null;
  readonly comprobateDomicilio?: string | null;
  readonly claveMatricula?: string | null;
  readonly carreraID: string;
  readonly especialidadID: string;
  readonly bachilleratoID: string;
  readonly domicilioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEstudiante = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Estudiante, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly matricula?: string | null;
  readonly nombre?: string | null;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly telefonoCasa?: string | null;
  readonly telefonoJoven?: string | null;
  readonly telefonoTutor?: string | null;
  readonly correo?: string | null;
  readonly promedioBachillerato?: number | null;
  readonly fechaRegistro?: string | null;
  readonly fotoEstudiante?: string | null;
  readonly certificadoBachillerato?: string | null;
  readonly comprobateDomicilio?: string | null;
  readonly claveMatricula?: string | null;
  readonly carreraID: string;
  readonly especialidadID: string;
  readonly bachilleratoID: string;
  readonly domicilioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Estudiante = LazyLoading extends LazyLoadingDisabled ? EagerEstudiante : LazyEstudiante

export declare const Estudiante: (new (init: ModelInit<Estudiante>) => Estudiante) & {
  copyOf(source: Estudiante, mutator: (draft: MutableModel<Estudiante>) => MutableModel<Estudiante> | void): Estudiante;
}
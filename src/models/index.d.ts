import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerProgramaElegir = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgramaElegir, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programasMaestria?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProgramaElegir = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProgramaElegir, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly programasMaestria?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProgramaElegir = LazyLoading extends LazyLoadingDisabled ? EagerProgramaElegir : LazyProgramaElegir

export declare const ProgramaElegir: (new (init: ModelInit<ProgramaElegir>) => ProgramaElegir) & {
  copyOf(source: ProgramaElegir, mutator: (draft: MutableModel<ProgramaElegir>) => MutableModel<ProgramaElegir> | void): ProgramaElegir;
}

type EagerUniversidadProveniente = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UniversidadProveniente, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly universidadProveniente?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUniversidadProveniente = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UniversidadProveniente, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly universidadProveniente?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UniversidadProveniente = LazyLoading extends LazyLoadingDisabled ? EagerUniversidadProveniente : LazyUniversidadProveniente

export declare const UniversidadProveniente: (new (init: ModelInit<UniversidadProveniente>) => UniversidadProveniente) & {
  copyOf(source: UniversidadProveniente, mutator: (draft: MutableModel<UniversidadProveniente>) => MutableModel<UniversidadProveniente> | void): UniversidadProveniente;
}

type EagerCarreraAcursar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CarreraAcursar, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly carreraAcursar?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCarreraAcursar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CarreraAcursar, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly carreraAcursar?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CarreraAcursar = LazyLoading extends LazyLoadingDisabled ? EagerCarreraAcursar : LazyCarreraAcursar

export declare const CarreraAcursar: (new (init: ModelInit<CarreraAcursar>) => CarreraAcursar) & {
  copyOf(source: CarreraAcursar, mutator: (draft: MutableModel<CarreraAcursar>) => MutableModel<CarreraAcursar> | void): CarreraAcursar;
}

type EagerSeleccioCarrera = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SeleccioCarrera, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly carrera?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySeleccioCarrera = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SeleccioCarrera, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly carrera?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SeleccioCarrera = LazyLoading extends LazyLoadingDisabled ? EagerSeleccioCarrera : LazySeleccioCarrera

export declare const SeleccioCarrera: (new (init: ModelInit<SeleccioCarrera>) => SeleccioCarrera) & {
  copyOf(source: SeleccioCarrera, mutator: (draft: MutableModel<SeleccioCarrera>) => MutableModel<SeleccioCarrera> | void): SeleccioCarrera;
}

type EagerSeleccionableCiudad = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SeleccionableCiudad, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ciudad?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySeleccionableCiudad = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SeleccionableCiudad, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ciudad?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SeleccionableCiudad = LazyLoading extends LazyLoadingDisabled ? EagerSeleccionableCiudad : LazySeleccionableCiudad

export declare const SeleccionableCiudad: (new (init: ModelInit<SeleccionableCiudad>) => SeleccionableCiudad) & {
  copyOf(source: SeleccionableCiudad, mutator: (draft: MutableModel<SeleccionableCiudad>) => MutableModel<SeleccionableCiudad> | void): SeleccionableCiudad;
}

type EagerSeleccionBachillerato = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SeleccionBachillerato, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreBachillerato?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySeleccionBachillerato = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SeleccionBachillerato, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreBachillerato?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SeleccionBachillerato = LazyLoading extends LazyLoadingDisabled ? EagerSeleccionBachillerato : LazySeleccionBachillerato

export declare const SeleccionBachillerato: (new (init: ModelInit<SeleccionBachillerato>) => SeleccionBachillerato) & {
  copyOf(source: SeleccionBachillerato, mutator: (draft: MutableModel<SeleccionBachillerato>) => MutableModel<SeleccionBachillerato> | void): SeleccionBachillerato;
}

type EagerPadres = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Padres, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreMa?: string | null;
  readonly apellidoPaternoMa?: string | null;
  readonly apellidoMaternoMa?: string | null;
  readonly telefonoMa?: string | null;
  readonly nombrePa?: string | null;
  readonly apellidoPaternoPa?: string | null;
  readonly apellidoMaternoPa?: string | null;
  readonly telefonoPa?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPadres = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Padres, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreMa?: string | null;
  readonly apellidoPaternoMa?: string | null;
  readonly apellidoMaternoMa?: string | null;
  readonly telefonoMa?: string | null;
  readonly nombrePa?: string | null;
  readonly apellidoPaternoPa?: string | null;
  readonly apellidoMaternoPa?: string | null;
  readonly telefonoPa?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Padres = LazyLoading extends LazyLoadingDisabled ? EagerPadres : LazyPadres

export declare const Padres: (new (init: ModelInit<Padres>) => Padres) & {
  copyOf(source: Padres, mutator: (draft: MutableModel<Padres>) => MutableModel<Padres> | void): Padres;
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
  readonly estado?: string | null;
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
  readonly estado?: string | null;
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
  readonly telefonoJoven?: string | null;
  readonly correo?: string | null;
  readonly promedioBachillerato?: number | null;
  readonly fotoEstudiante?: string | null;
  readonly certificadoBachillerato?: string | null;
  readonly comprobateDomicilio?: string | null;
  readonly domicilioID: string;
  readonly bachilleratoProcedencia?: string | null;
  readonly especialidadProveniente?: string | null;
  readonly carreraDeseada?: string | null;
  readonly queDeseasEstudiar?: string | null;
  readonly cartaIntencion?: string | null;
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
  readonly telefonoJoven?: string | null;
  readonly correo?: string | null;
  readonly promedioBachillerato?: number | null;
  readonly fotoEstudiante?: string | null;
  readonly certificadoBachillerato?: string | null;
  readonly comprobateDomicilio?: string | null;
  readonly domicilioID: string;
  readonly bachilleratoProcedencia?: string | null;
  readonly especialidadProveniente?: string | null;
  readonly carreraDeseada?: string | null;
  readonly queDeseasEstudiar?: string | null;
  readonly cartaIntencion?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Estudiante = LazyLoading extends LazyLoadingDisabled ? EagerEstudiante : LazyEstudiante

export declare const Estudiante: (new (init: ModelInit<Estudiante>) => Estudiante) & {
  copyOf(source: Estudiante, mutator: (draft: MutableModel<Estudiante>) => MutableModel<Estudiante> | void): Estudiante;
}
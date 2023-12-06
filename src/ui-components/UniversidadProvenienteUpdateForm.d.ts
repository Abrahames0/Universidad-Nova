/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UniversidadProveniente } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UniversidadProvenienteUpdateFormInputValues = {
    universidadProveniente?: string;
};
export declare type UniversidadProvenienteUpdateFormValidationValues = {
    universidadProveniente?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UniversidadProvenienteUpdateFormOverridesProps = {
    UniversidadProvenienteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    universidadProveniente?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UniversidadProvenienteUpdateFormProps = React.PropsWithChildren<{
    overrides?: UniversidadProvenienteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    universidadProveniente?: UniversidadProveniente;
    onSubmit?: (fields: UniversidadProvenienteUpdateFormInputValues) => UniversidadProvenienteUpdateFormInputValues;
    onSuccess?: (fields: UniversidadProvenienteUpdateFormInputValues) => void;
    onError?: (fields: UniversidadProvenienteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UniversidadProvenienteUpdateFormInputValues) => UniversidadProvenienteUpdateFormInputValues;
    onValidate?: UniversidadProvenienteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UniversidadProvenienteUpdateForm(props: UniversidadProvenienteUpdateFormProps): React.ReactElement;

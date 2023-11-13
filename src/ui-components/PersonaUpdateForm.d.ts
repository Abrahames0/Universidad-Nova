/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Persona } from "../models";
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
export declare type PersonaUpdateFormInputValues = {
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    parentesco?: string;
};
export declare type PersonaUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    apellidoPaterno?: ValidationFunction<string>;
    apellidoMaterno?: ValidationFunction<string>;
    parentesco?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonaUpdateFormOverridesProps = {
    PersonaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoPaterno?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoMaterno?: PrimitiveOverrideProps<TextFieldProps>;
    parentesco?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PersonaUpdateFormProps = React.PropsWithChildren<{
    overrides?: PersonaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    persona?: Persona;
    onSubmit?: (fields: PersonaUpdateFormInputValues) => PersonaUpdateFormInputValues;
    onSuccess?: (fields: PersonaUpdateFormInputValues) => void;
    onError?: (fields: PersonaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PersonaUpdateFormInputValues) => PersonaUpdateFormInputValues;
    onValidate?: PersonaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PersonaUpdateForm(props: PersonaUpdateFormProps): React.ReactElement;

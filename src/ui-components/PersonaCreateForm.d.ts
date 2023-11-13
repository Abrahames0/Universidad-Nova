/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PersonaCreateFormInputValues = {
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    parentesco?: string;
};
export declare type PersonaCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    apellidoPaterno?: ValidationFunction<string>;
    apellidoMaterno?: ValidationFunction<string>;
    parentesco?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonaCreateFormOverridesProps = {
    PersonaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoPaterno?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoMaterno?: PrimitiveOverrideProps<TextFieldProps>;
    parentesco?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PersonaCreateFormProps = React.PropsWithChildren<{
    overrides?: PersonaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PersonaCreateFormInputValues) => PersonaCreateFormInputValues;
    onSuccess?: (fields: PersonaCreateFormInputValues) => void;
    onError?: (fields: PersonaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PersonaCreateFormInputValues) => PersonaCreateFormInputValues;
    onValidate?: PersonaCreateFormValidationValues;
} & React.CSSProperties>;
export default function PersonaCreateForm(props: PersonaCreateFormProps): React.ReactElement;

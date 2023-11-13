/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Especialidad } from "../models";
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
export declare type EspecialidadUpdateFormInputValues = {
    nombre?: string;
};
export declare type EspecialidadUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EspecialidadUpdateFormOverridesProps = {
    EspecialidadUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EspecialidadUpdateFormProps = React.PropsWithChildren<{
    overrides?: EspecialidadUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    especialidad?: Especialidad;
    onSubmit?: (fields: EspecialidadUpdateFormInputValues) => EspecialidadUpdateFormInputValues;
    onSuccess?: (fields: EspecialidadUpdateFormInputValues) => void;
    onError?: (fields: EspecialidadUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EspecialidadUpdateFormInputValues) => EspecialidadUpdateFormInputValues;
    onValidate?: EspecialidadUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EspecialidadUpdateForm(props: EspecialidadUpdateFormProps): React.ReactElement;

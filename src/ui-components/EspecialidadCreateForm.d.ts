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
export declare type EspecialidadCreateFormInputValues = {
    nombre?: string;
};
export declare type EspecialidadCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EspecialidadCreateFormOverridesProps = {
    EspecialidadCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EspecialidadCreateFormProps = React.PropsWithChildren<{
    overrides?: EspecialidadCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EspecialidadCreateFormInputValues) => EspecialidadCreateFormInputValues;
    onSuccess?: (fields: EspecialidadCreateFormInputValues) => void;
    onError?: (fields: EspecialidadCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EspecialidadCreateFormInputValues) => EspecialidadCreateFormInputValues;
    onValidate?: EspecialidadCreateFormValidationValues;
} & React.CSSProperties>;
export default function EspecialidadCreateForm(props: EspecialidadCreateFormProps): React.ReactElement;

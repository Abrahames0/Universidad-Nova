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
export declare type SeleccionableCreateFormInputValues = {
    nombreBachillerato?: string;
    ciudad?: string;
    especialidad?: string;
    carrera?: string;
};
export declare type SeleccionableCreateFormValidationValues = {
    nombreBachillerato?: ValidationFunction<string>;
    ciudad?: ValidationFunction<string>;
    especialidad?: ValidationFunction<string>;
    carrera?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeleccionableCreateFormOverridesProps = {
    SeleccionableCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombreBachillerato?: PrimitiveOverrideProps<TextFieldProps>;
    ciudad?: PrimitiveOverrideProps<TextFieldProps>;
    especialidad?: PrimitiveOverrideProps<TextFieldProps>;
    carrera?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeleccionableCreateFormProps = React.PropsWithChildren<{
    overrides?: SeleccionableCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SeleccionableCreateFormInputValues) => SeleccionableCreateFormInputValues;
    onSuccess?: (fields: SeleccionableCreateFormInputValues) => void;
    onError?: (fields: SeleccionableCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeleccionableCreateFormInputValues) => SeleccionableCreateFormInputValues;
    onValidate?: SeleccionableCreateFormValidationValues;
} & React.CSSProperties>;
export default function SeleccionableCreateForm(props: SeleccionableCreateFormProps): React.ReactElement;

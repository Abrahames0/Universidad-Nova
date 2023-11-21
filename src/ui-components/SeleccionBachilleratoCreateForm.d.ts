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
export declare type SeleccionBachilleratoCreateFormInputValues = {
    nombreBachillerato?: string;
};
export declare type SeleccionBachilleratoCreateFormValidationValues = {
    nombreBachillerato?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeleccionBachilleratoCreateFormOverridesProps = {
    SeleccionBachilleratoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombreBachillerato?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeleccionBachilleratoCreateFormProps = React.PropsWithChildren<{
    overrides?: SeleccionBachilleratoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SeleccionBachilleratoCreateFormInputValues) => SeleccionBachilleratoCreateFormInputValues;
    onSuccess?: (fields: SeleccionBachilleratoCreateFormInputValues) => void;
    onError?: (fields: SeleccionBachilleratoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeleccionBachilleratoCreateFormInputValues) => SeleccionBachilleratoCreateFormInputValues;
    onValidate?: SeleccionBachilleratoCreateFormValidationValues;
} & React.CSSProperties>;
export default function SeleccionBachilleratoCreateForm(props: SeleccionBachilleratoCreateFormProps): React.ReactElement;

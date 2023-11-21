/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SeleccionBachillerato } from "../models";
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
export declare type SeleccionBachilleratoUpdateFormInputValues = {
    nombreBachillerato?: string;
};
export declare type SeleccionBachilleratoUpdateFormValidationValues = {
    nombreBachillerato?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeleccionBachilleratoUpdateFormOverridesProps = {
    SeleccionBachilleratoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombreBachillerato?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeleccionBachilleratoUpdateFormProps = React.PropsWithChildren<{
    overrides?: SeleccionBachilleratoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    seleccionBachillerato?: SeleccionBachillerato;
    onSubmit?: (fields: SeleccionBachilleratoUpdateFormInputValues) => SeleccionBachilleratoUpdateFormInputValues;
    onSuccess?: (fields: SeleccionBachilleratoUpdateFormInputValues) => void;
    onError?: (fields: SeleccionBachilleratoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeleccionBachilleratoUpdateFormInputValues) => SeleccionBachilleratoUpdateFormInputValues;
    onValidate?: SeleccionBachilleratoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SeleccionBachilleratoUpdateForm(props: SeleccionBachilleratoUpdateFormProps): React.ReactElement;

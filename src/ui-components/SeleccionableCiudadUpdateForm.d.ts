/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SeleccionableCiudad } from "../models";
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
export declare type SeleccionableCiudadUpdateFormInputValues = {
    ciudad?: string;
};
export declare type SeleccionableCiudadUpdateFormValidationValues = {
    ciudad?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeleccionableCiudadUpdateFormOverridesProps = {
    SeleccionableCiudadUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ciudad?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeleccionableCiudadUpdateFormProps = React.PropsWithChildren<{
    overrides?: SeleccionableCiudadUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    seleccionableCiudad?: SeleccionableCiudad;
    onSubmit?: (fields: SeleccionableCiudadUpdateFormInputValues) => SeleccionableCiudadUpdateFormInputValues;
    onSuccess?: (fields: SeleccionableCiudadUpdateFormInputValues) => void;
    onError?: (fields: SeleccionableCiudadUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeleccionableCiudadUpdateFormInputValues) => SeleccionableCiudadUpdateFormInputValues;
    onValidate?: SeleccionableCiudadUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SeleccionableCiudadUpdateForm(props: SeleccionableCiudadUpdateFormProps): React.ReactElement;

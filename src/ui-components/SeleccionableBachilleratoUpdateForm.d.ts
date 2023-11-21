/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SeleccionableBachillerato } from "../models";
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
export declare type SeleccionableBachilleratoUpdateFormInputValues = {
    nombreBachillerato?: string;
};
export declare type SeleccionableBachilleratoUpdateFormValidationValues = {
    nombreBachillerato?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeleccionableBachilleratoUpdateFormOverridesProps = {
    SeleccionableBachilleratoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombreBachillerato?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeleccionableBachilleratoUpdateFormProps = React.PropsWithChildren<{
    overrides?: SeleccionableBachilleratoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    seleccionableBachillerato?: SeleccionableBachillerato;
    onSubmit?: (fields: SeleccionableBachilleratoUpdateFormInputValues) => SeleccionableBachilleratoUpdateFormInputValues;
    onSuccess?: (fields: SeleccionableBachilleratoUpdateFormInputValues) => void;
    onError?: (fields: SeleccionableBachilleratoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeleccionableBachilleratoUpdateFormInputValues) => SeleccionableBachilleratoUpdateFormInputValues;
    onValidate?: SeleccionableBachilleratoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SeleccionableBachilleratoUpdateForm(props: SeleccionableBachilleratoUpdateFormProps): React.ReactElement;

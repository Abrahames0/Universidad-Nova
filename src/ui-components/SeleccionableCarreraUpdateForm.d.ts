/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SeleccionableCarrera } from "../models";
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
export declare type SeleccionableCarreraUpdateFormInputValues = {
    carrera?: string;
};
export declare type SeleccionableCarreraUpdateFormValidationValues = {
    carrera?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeleccionableCarreraUpdateFormOverridesProps = {
    SeleccionableCarreraUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    carrera?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeleccionableCarreraUpdateFormProps = React.PropsWithChildren<{
    overrides?: SeleccionableCarreraUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    seleccionableCarrera?: SeleccionableCarrera;
    onSubmit?: (fields: SeleccionableCarreraUpdateFormInputValues) => SeleccionableCarreraUpdateFormInputValues;
    onSuccess?: (fields: SeleccionableCarreraUpdateFormInputValues) => void;
    onError?: (fields: SeleccionableCarreraUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeleccionableCarreraUpdateFormInputValues) => SeleccionableCarreraUpdateFormInputValues;
    onValidate?: SeleccionableCarreraUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SeleccionableCarreraUpdateForm(props: SeleccionableCarreraUpdateFormProps): React.ReactElement;

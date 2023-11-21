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
export declare type SeleccionableCarreraCreateFormInputValues = {
    carrera?: string;
};
export declare type SeleccionableCarreraCreateFormValidationValues = {
    carrera?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeleccionableCarreraCreateFormOverridesProps = {
    SeleccionableCarreraCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    carrera?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeleccionableCarreraCreateFormProps = React.PropsWithChildren<{
    overrides?: SeleccionableCarreraCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SeleccionableCarreraCreateFormInputValues) => SeleccionableCarreraCreateFormInputValues;
    onSuccess?: (fields: SeleccionableCarreraCreateFormInputValues) => void;
    onError?: (fields: SeleccionableCarreraCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeleccionableCarreraCreateFormInputValues) => SeleccionableCarreraCreateFormInputValues;
    onValidate?: SeleccionableCarreraCreateFormValidationValues;
} & React.CSSProperties>;
export default function SeleccionableCarreraCreateForm(props: SeleccionableCarreraCreateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SeleccionableCarreras } from "../models";
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
export declare type SeleccionableCarrerasUpdateFormInputValues = {
    carreras?: string;
};
export declare type SeleccionableCarrerasUpdateFormValidationValues = {
    carreras?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeleccionableCarrerasUpdateFormOverridesProps = {
    SeleccionableCarrerasUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    carreras?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeleccionableCarrerasUpdateFormProps = React.PropsWithChildren<{
    overrides?: SeleccionableCarrerasUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    seleccionableCarreras?: SeleccionableCarreras;
    onSubmit?: (fields: SeleccionableCarrerasUpdateFormInputValues) => SeleccionableCarrerasUpdateFormInputValues;
    onSuccess?: (fields: SeleccionableCarrerasUpdateFormInputValues) => void;
    onError?: (fields: SeleccionableCarrerasUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeleccionableCarrerasUpdateFormInputValues) => SeleccionableCarrerasUpdateFormInputValues;
    onValidate?: SeleccionableCarrerasUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SeleccionableCarrerasUpdateForm(props: SeleccionableCarrerasUpdateFormProps): React.ReactElement;

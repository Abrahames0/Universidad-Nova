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
export declare type SeleccionableCarrerasCreateFormInputValues = {
    carreras?: string;
};
export declare type SeleccionableCarrerasCreateFormValidationValues = {
    carreras?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeleccionableCarrerasCreateFormOverridesProps = {
    SeleccionableCarrerasCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    carreras?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeleccionableCarrerasCreateFormProps = React.PropsWithChildren<{
    overrides?: SeleccionableCarrerasCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SeleccionableCarrerasCreateFormInputValues) => SeleccionableCarrerasCreateFormInputValues;
    onSuccess?: (fields: SeleccionableCarrerasCreateFormInputValues) => void;
    onError?: (fields: SeleccionableCarrerasCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeleccionableCarrerasCreateFormInputValues) => SeleccionableCarrerasCreateFormInputValues;
    onValidate?: SeleccionableCarrerasCreateFormValidationValues;
} & React.CSSProperties>;
export default function SeleccionableCarrerasCreateForm(props: SeleccionableCarrerasCreateFormProps): React.ReactElement;

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
export declare type CarreraCreateFormInputValues = {
    nombre?: string;
};
export declare type CarreraCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarreraCreateFormOverridesProps = {
    CarreraCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarreraCreateFormProps = React.PropsWithChildren<{
    overrides?: CarreraCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CarreraCreateFormInputValues) => CarreraCreateFormInputValues;
    onSuccess?: (fields: CarreraCreateFormInputValues) => void;
    onError?: (fields: CarreraCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarreraCreateFormInputValues) => CarreraCreateFormInputValues;
    onValidate?: CarreraCreateFormValidationValues;
} & React.CSSProperties>;
export default function CarreraCreateForm(props: CarreraCreateFormProps): React.ReactElement;

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
export declare type BachilleratoCreateFormInputValues = {
    nombre?: string;
};
export declare type BachilleratoCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BachilleratoCreateFormOverridesProps = {
    BachilleratoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BachilleratoCreateFormProps = React.PropsWithChildren<{
    overrides?: BachilleratoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BachilleratoCreateFormInputValues) => BachilleratoCreateFormInputValues;
    onSuccess?: (fields: BachilleratoCreateFormInputValues) => void;
    onError?: (fields: BachilleratoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BachilleratoCreateFormInputValues) => BachilleratoCreateFormInputValues;
    onValidate?: BachilleratoCreateFormValidationValues;
} & React.CSSProperties>;
export default function BachilleratoCreateForm(props: BachilleratoCreateFormProps): React.ReactElement;

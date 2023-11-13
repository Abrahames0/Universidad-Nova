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
export declare type DomicilioCreateFormInputValues = {
    calle?: string;
    numero?: string;
    colonia?: string;
    ciudad?: string;
    codigoPostal?: string;
};
export declare type DomicilioCreateFormValidationValues = {
    calle?: ValidationFunction<string>;
    numero?: ValidationFunction<string>;
    colonia?: ValidationFunction<string>;
    ciudad?: ValidationFunction<string>;
    codigoPostal?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DomicilioCreateFormOverridesProps = {
    DomicilioCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    calle?: PrimitiveOverrideProps<TextFieldProps>;
    numero?: PrimitiveOverrideProps<TextFieldProps>;
    colonia?: PrimitiveOverrideProps<TextFieldProps>;
    ciudad?: PrimitiveOverrideProps<TextFieldProps>;
    codigoPostal?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DomicilioCreateFormProps = React.PropsWithChildren<{
    overrides?: DomicilioCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DomicilioCreateFormInputValues) => DomicilioCreateFormInputValues;
    onSuccess?: (fields: DomicilioCreateFormInputValues) => void;
    onError?: (fields: DomicilioCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DomicilioCreateFormInputValues) => DomicilioCreateFormInputValues;
    onValidate?: DomicilioCreateFormValidationValues;
} & React.CSSProperties>;
export default function DomicilioCreateForm(props: DomicilioCreateFormProps): React.ReactElement;

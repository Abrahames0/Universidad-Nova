/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Domicilio } from "../models";
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
export declare type DomicilioUpdateFormInputValues = {
    calle?: string;
    numero?: string;
    colonia?: string;
    ciudad?: string;
    codigoPostal?: string;
};
export declare type DomicilioUpdateFormValidationValues = {
    calle?: ValidationFunction<string>;
    numero?: ValidationFunction<string>;
    colonia?: ValidationFunction<string>;
    ciudad?: ValidationFunction<string>;
    codigoPostal?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DomicilioUpdateFormOverridesProps = {
    DomicilioUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    calle?: PrimitiveOverrideProps<TextFieldProps>;
    numero?: PrimitiveOverrideProps<TextFieldProps>;
    colonia?: PrimitiveOverrideProps<TextFieldProps>;
    ciudad?: PrimitiveOverrideProps<TextFieldProps>;
    codigoPostal?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DomicilioUpdateFormProps = React.PropsWithChildren<{
    overrides?: DomicilioUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    domicilio?: Domicilio;
    onSubmit?: (fields: DomicilioUpdateFormInputValues) => DomicilioUpdateFormInputValues;
    onSuccess?: (fields: DomicilioUpdateFormInputValues) => void;
    onError?: (fields: DomicilioUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DomicilioUpdateFormInputValues) => DomicilioUpdateFormInputValues;
    onValidate?: DomicilioUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DomicilioUpdateForm(props: DomicilioUpdateFormProps): React.ReactElement;

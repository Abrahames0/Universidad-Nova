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
export declare type SeleccioCarreraCreateFormInputValues = {
    carrera?: string;
};
export declare type SeleccioCarreraCreateFormValidationValues = {
    carrera?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeleccioCarreraCreateFormOverridesProps = {
    SeleccioCarreraCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    carrera?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeleccioCarreraCreateFormProps = React.PropsWithChildren<{
    overrides?: SeleccioCarreraCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SeleccioCarreraCreateFormInputValues) => SeleccioCarreraCreateFormInputValues;
    onSuccess?: (fields: SeleccioCarreraCreateFormInputValues) => void;
    onError?: (fields: SeleccioCarreraCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeleccioCarreraCreateFormInputValues) => SeleccioCarreraCreateFormInputValues;
    onValidate?: SeleccioCarreraCreateFormValidationValues;
} & React.CSSProperties>;
export default function SeleccioCarreraCreateForm(props: SeleccioCarreraCreateFormProps): React.ReactElement;

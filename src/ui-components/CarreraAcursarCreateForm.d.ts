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
export declare type CarreraAcursarCreateFormInputValues = {
    carreraAcursar?: string;
};
export declare type CarreraAcursarCreateFormValidationValues = {
    carreraAcursar?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarreraAcursarCreateFormOverridesProps = {
    CarreraAcursarCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    carreraAcursar?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarreraAcursarCreateFormProps = React.PropsWithChildren<{
    overrides?: CarreraAcursarCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CarreraAcursarCreateFormInputValues) => CarreraAcursarCreateFormInputValues;
    onSuccess?: (fields: CarreraAcursarCreateFormInputValues) => void;
    onError?: (fields: CarreraAcursarCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarreraAcursarCreateFormInputValues) => CarreraAcursarCreateFormInputValues;
    onValidate?: CarreraAcursarCreateFormValidationValues;
} & React.CSSProperties>;
export default function CarreraAcursarCreateForm(props: CarreraAcursarCreateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SeleccioCarrera } from "../models";
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
export declare type SeleccioCarreraUpdateFormInputValues = {
    carrera?: string;
};
export declare type SeleccioCarreraUpdateFormValidationValues = {
    carrera?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeleccioCarreraUpdateFormOverridesProps = {
    SeleccioCarreraUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    carrera?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeleccioCarreraUpdateFormProps = React.PropsWithChildren<{
    overrides?: SeleccioCarreraUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    seleccioCarrera?: SeleccioCarrera;
    onSubmit?: (fields: SeleccioCarreraUpdateFormInputValues) => SeleccioCarreraUpdateFormInputValues;
    onSuccess?: (fields: SeleccioCarreraUpdateFormInputValues) => void;
    onError?: (fields: SeleccioCarreraUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeleccioCarreraUpdateFormInputValues) => SeleccioCarreraUpdateFormInputValues;
    onValidate?: SeleccioCarreraUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SeleccioCarreraUpdateForm(props: SeleccioCarreraUpdateFormProps): React.ReactElement;

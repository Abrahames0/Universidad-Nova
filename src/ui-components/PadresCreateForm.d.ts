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
export declare type PadresCreateFormInputValues = {
    nombreMa?: string;
    apellidoPaternoMa?: string;
    apellidoMaternoMa?: string;
    telefonoMa?: string;
    nombrePa?: string;
    apellidoPaternoPa?: string;
    apellidoMaternoPa?: string;
};
export declare type PadresCreateFormValidationValues = {
    nombreMa?: ValidationFunction<string>;
    apellidoPaternoMa?: ValidationFunction<string>;
    apellidoMaternoMa?: ValidationFunction<string>;
    telefonoMa?: ValidationFunction<string>;
    nombrePa?: ValidationFunction<string>;
    apellidoPaternoPa?: ValidationFunction<string>;
    apellidoMaternoPa?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PadresCreateFormOverridesProps = {
    PadresCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombreMa?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoPaternoMa?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoMaternoMa?: PrimitiveOverrideProps<TextFieldProps>;
    telefonoMa?: PrimitiveOverrideProps<TextFieldProps>;
    nombrePa?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoPaternoPa?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoMaternoPa?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PadresCreateFormProps = React.PropsWithChildren<{
    overrides?: PadresCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PadresCreateFormInputValues) => PadresCreateFormInputValues;
    onSuccess?: (fields: PadresCreateFormInputValues) => void;
    onError?: (fields: PadresCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PadresCreateFormInputValues) => PadresCreateFormInputValues;
    onValidate?: PadresCreateFormValidationValues;
} & React.CSSProperties>;
export default function PadresCreateForm(props: PadresCreateFormProps): React.ReactElement;

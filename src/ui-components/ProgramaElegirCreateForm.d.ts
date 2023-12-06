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
export declare type ProgramaElegirCreateFormInputValues = {
    programasMaestria?: string;
};
export declare type ProgramaElegirCreateFormValidationValues = {
    programasMaestria?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgramaElegirCreateFormOverridesProps = {
    ProgramaElegirCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    programasMaestria?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProgramaElegirCreateFormProps = React.PropsWithChildren<{
    overrides?: ProgramaElegirCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProgramaElegirCreateFormInputValues) => ProgramaElegirCreateFormInputValues;
    onSuccess?: (fields: ProgramaElegirCreateFormInputValues) => void;
    onError?: (fields: ProgramaElegirCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgramaElegirCreateFormInputValues) => ProgramaElegirCreateFormInputValues;
    onValidate?: ProgramaElegirCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProgramaElegirCreateForm(props: ProgramaElegirCreateFormProps): React.ReactElement;

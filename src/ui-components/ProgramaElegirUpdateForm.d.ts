/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ProgramaElegir } from "../models";
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
export declare type ProgramaElegirUpdateFormInputValues = {
    programasMaestria?: string;
};
export declare type ProgramaElegirUpdateFormValidationValues = {
    programasMaestria?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgramaElegirUpdateFormOverridesProps = {
    ProgramaElegirUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    programasMaestria?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProgramaElegirUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProgramaElegirUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    programaElegir?: ProgramaElegir;
    onSubmit?: (fields: ProgramaElegirUpdateFormInputValues) => ProgramaElegirUpdateFormInputValues;
    onSuccess?: (fields: ProgramaElegirUpdateFormInputValues) => void;
    onError?: (fields: ProgramaElegirUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgramaElegirUpdateFormInputValues) => ProgramaElegirUpdateFormInputValues;
    onValidate?: ProgramaElegirUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProgramaElegirUpdateForm(props: ProgramaElegirUpdateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CarreraAcursar } from "../models";
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
export declare type CarreraAcursarUpdateFormInputValues = {
    carreraAcursar?: string;
};
export declare type CarreraAcursarUpdateFormValidationValues = {
    carreraAcursar?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarreraAcursarUpdateFormOverridesProps = {
    CarreraAcursarUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    carreraAcursar?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarreraAcursarUpdateFormProps = React.PropsWithChildren<{
    overrides?: CarreraAcursarUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    carreraAcursar?: CarreraAcursar;
    onSubmit?: (fields: CarreraAcursarUpdateFormInputValues) => CarreraAcursarUpdateFormInputValues;
    onSuccess?: (fields: CarreraAcursarUpdateFormInputValues) => void;
    onError?: (fields: CarreraAcursarUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarreraAcursarUpdateFormInputValues) => CarreraAcursarUpdateFormInputValues;
    onValidate?: CarreraAcursarUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CarreraAcursarUpdateForm(props: CarreraAcursarUpdateFormProps): React.ReactElement;

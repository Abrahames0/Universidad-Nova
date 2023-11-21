/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { SeleccionBachillerato } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SeleccionBachilleratoUpdateForm(props) {
  const {
    id: idProp,
    seleccionBachillerato: seleccionBachilleratoModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombreBachillerato: "",
  };
  const [nombreBachillerato, setNombreBachillerato] = React.useState(
    initialValues.nombreBachillerato
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = seleccionBachilleratoRecord
      ? { ...initialValues, ...seleccionBachilleratoRecord }
      : initialValues;
    setNombreBachillerato(cleanValues.nombreBachillerato);
    setErrors({});
  };
  const [seleccionBachilleratoRecord, setSeleccionBachilleratoRecord] =
    React.useState(seleccionBachilleratoModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(SeleccionBachillerato, idProp)
        : seleccionBachilleratoModelProp;
      setSeleccionBachilleratoRecord(record);
    };
    queryData();
  }, [idProp, seleccionBachilleratoModelProp]);
  React.useEffect(resetStateValues, [seleccionBachilleratoRecord]);
  const validations = {
    nombreBachillerato: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nombreBachillerato,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            SeleccionBachillerato.copyOf(
              seleccionBachilleratoRecord,
              (updated) => {
                Object.assign(updated, modelFields);
              }
            )
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SeleccionBachilleratoUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre bachillerato"
        isRequired={false}
        isReadOnly={false}
        value={nombreBachillerato}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreBachillerato: value,
            };
            const result = onChange(modelFields);
            value = result?.nombreBachillerato ?? value;
          }
          if (errors.nombreBachillerato?.hasError) {
            runValidationTasks("nombreBachillerato", value);
          }
          setNombreBachillerato(value);
        }}
        onBlur={() =>
          runValidationTasks("nombreBachillerato", nombreBachillerato)
        }
        errorMessage={errors.nombreBachillerato?.errorMessage}
        hasError={errors.nombreBachillerato?.hasError}
        {...getOverrideProps(overrides, "nombreBachillerato")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || seleccionBachilleratoModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || seleccionBachilleratoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

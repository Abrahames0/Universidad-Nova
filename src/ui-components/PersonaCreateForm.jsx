/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Persona } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PersonaCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    parentesco: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [apellidoPaterno, setApellidoPaterno] = React.useState(
    initialValues.apellidoPaterno
  );
  const [apellidoMaterno, setApellidoMaterno] = React.useState(
    initialValues.apellidoMaterno
  );
  const [parentesco, setParentesco] = React.useState(initialValues.parentesco);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombre(initialValues.nombre);
    setApellidoPaterno(initialValues.apellidoPaterno);
    setApellidoMaterno(initialValues.apellidoMaterno);
    setParentesco(initialValues.parentesco);
    setErrors({});
  };
  const validations = {
    nombre: [],
    apellidoPaterno: [],
    apellidoMaterno: [],
    parentesco: [],
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
          nombre,
          apellidoPaterno,
          apellidoMaterno,
          parentesco,
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
          await DataStore.save(new Persona(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PersonaCreateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              apellidoPaterno,
              apellidoMaterno,
              parentesco,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
      ></TextField>
      <TextField
        label="Apellido paterno"
        isRequired={false}
        isReadOnly={false}
        value={apellidoPaterno}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidoPaterno: value,
              apellidoMaterno,
              parentesco,
            };
            const result = onChange(modelFields);
            value = result?.apellidoPaterno ?? value;
          }
          if (errors.apellidoPaterno?.hasError) {
            runValidationTasks("apellidoPaterno", value);
          }
          setApellidoPaterno(value);
        }}
        onBlur={() => runValidationTasks("apellidoPaterno", apellidoPaterno)}
        errorMessage={errors.apellidoPaterno?.errorMessage}
        hasError={errors.apellidoPaterno?.hasError}
        {...getOverrideProps(overrides, "apellidoPaterno")}
      ></TextField>
      <TextField
        label="Apellido materno"
        isRequired={false}
        isReadOnly={false}
        value={apellidoMaterno}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidoPaterno,
              apellidoMaterno: value,
              parentesco,
            };
            const result = onChange(modelFields);
            value = result?.apellidoMaterno ?? value;
          }
          if (errors.apellidoMaterno?.hasError) {
            runValidationTasks("apellidoMaterno", value);
          }
          setApellidoMaterno(value);
        }}
        onBlur={() => runValidationTasks("apellidoMaterno", apellidoMaterno)}
        errorMessage={errors.apellidoMaterno?.errorMessage}
        hasError={errors.apellidoMaterno?.hasError}
        {...getOverrideProps(overrides, "apellidoMaterno")}
      ></TextField>
      <TextField
        label="Parentesco"
        isRequired={false}
        isReadOnly={false}
        value={parentesco}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidoPaterno,
              apellidoMaterno,
              parentesco: value,
            };
            const result = onChange(modelFields);
            value = result?.parentesco ?? value;
          }
          if (errors.parentesco?.hasError) {
            runValidationTasks("parentesco", value);
          }
          setParentesco(value);
        }}
        onBlur={() => runValidationTasks("parentesco", parentesco)}
        errorMessage={errors.parentesco?.errorMessage}
        hasError={errors.parentesco?.hasError}
        {...getOverrideProps(overrides, "parentesco")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

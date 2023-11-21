/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Seleccionable } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SeleccionableCreateForm(props) {
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
    nombreBachillerato: "",
    ciudad: "",
    especialidad: "",
    carrera: "",
  };
  const [nombreBachillerato, setNombreBachillerato] = React.useState(
    initialValues.nombreBachillerato
  );
  const [ciudad, setCiudad] = React.useState(initialValues.ciudad);
  const [especialidad, setEspecialidad] = React.useState(
    initialValues.especialidad
  );
  const [carrera, setCarrera] = React.useState(initialValues.carrera);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombreBachillerato(initialValues.nombreBachillerato);
    setCiudad(initialValues.ciudad);
    setEspecialidad(initialValues.especialidad);
    setCarrera(initialValues.carrera);
    setErrors({});
  };
  const validations = {
    nombreBachillerato: [],
    ciudad: [],
    especialidad: [],
    carrera: [],
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
          ciudad,
          especialidad,
          carrera,
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
          await DataStore.save(new Seleccionable(modelFields));
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
      {...getOverrideProps(overrides, "SeleccionableCreateForm")}
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
              ciudad,
              especialidad,
              carrera,
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
      <TextField
        label="Ciudad"
        isRequired={false}
        isReadOnly={false}
        value={ciudad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreBachillerato,
              ciudad: value,
              especialidad,
              carrera,
            };
            const result = onChange(modelFields);
            value = result?.ciudad ?? value;
          }
          if (errors.ciudad?.hasError) {
            runValidationTasks("ciudad", value);
          }
          setCiudad(value);
        }}
        onBlur={() => runValidationTasks("ciudad", ciudad)}
        errorMessage={errors.ciudad?.errorMessage}
        hasError={errors.ciudad?.hasError}
        {...getOverrideProps(overrides, "ciudad")}
      ></TextField>
      <TextField
        label="Especialidad"
        isRequired={false}
        isReadOnly={false}
        value={especialidad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreBachillerato,
              ciudad,
              especialidad: value,
              carrera,
            };
            const result = onChange(modelFields);
            value = result?.especialidad ?? value;
          }
          if (errors.especialidad?.hasError) {
            runValidationTasks("especialidad", value);
          }
          setEspecialidad(value);
        }}
        onBlur={() => runValidationTasks("especialidad", especialidad)}
        errorMessage={errors.especialidad?.errorMessage}
        hasError={errors.especialidad?.hasError}
        {...getOverrideProps(overrides, "especialidad")}
      ></TextField>
      <TextField
        label="Carrera"
        isRequired={false}
        isReadOnly={false}
        value={carrera}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreBachillerato,
              ciudad,
              especialidad,
              carrera: value,
            };
            const result = onChange(modelFields);
            value = result?.carrera ?? value;
          }
          if (errors.carrera?.hasError) {
            runValidationTasks("carrera", value);
          }
          setCarrera(value);
        }}
        onBlur={() => runValidationTasks("carrera", carrera)}
        errorMessage={errors.carrera?.errorMessage}
        hasError={errors.carrera?.hasError}
        {...getOverrideProps(overrides, "carrera")}
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

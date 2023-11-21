/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { SeleccionableEspecialidad } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SeleccionableEspecialidadUpdateForm(props) {
  const {
    id: idProp,
    seleccionableEspecialidad: seleccionableEspecialidadModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    especialidad: "",
  };
  const [especialidad, setEspecialidad] = React.useState(
    initialValues.especialidad
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = seleccionableEspecialidadRecord
      ? { ...initialValues, ...seleccionableEspecialidadRecord }
      : initialValues;
    setEspecialidad(cleanValues.especialidad);
    setErrors({});
  };
  const [seleccionableEspecialidadRecord, setSeleccionableEspecialidadRecord] =
    React.useState(seleccionableEspecialidadModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(SeleccionableEspecialidad, idProp)
        : seleccionableEspecialidadModelProp;
      setSeleccionableEspecialidadRecord(record);
    };
    queryData();
  }, [idProp, seleccionableEspecialidadModelProp]);
  React.useEffect(resetStateValues, [seleccionableEspecialidadRecord]);
  const validations = {
    especialidad: [],
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
          especialidad,
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
            SeleccionableEspecialidad.copyOf(
              seleccionableEspecialidadRecord,
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
      {...getOverrideProps(overrides, "SeleccionableEspecialidadUpdateForm")}
      {...rest}
    >
      <TextField
        label="Especialidad"
        isRequired={false}
        isReadOnly={false}
        value={especialidad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              especialidad: value,
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
          isDisabled={!(idProp || seleccionableEspecialidadModelProp)}
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
              !(idProp || seleccionableEspecialidadModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { SeleccionableCarreras } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SeleccionableCarrerasUpdateForm(props) {
  const {
    id: idProp,
    seleccionableCarreras: seleccionableCarrerasModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    carreras: "",
  };
  const [carreras, setCarreras] = React.useState(initialValues.carreras);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = seleccionableCarrerasRecord
      ? { ...initialValues, ...seleccionableCarrerasRecord }
      : initialValues;
    setCarreras(cleanValues.carreras);
    setErrors({});
  };
  const [seleccionableCarrerasRecord, setSeleccionableCarrerasRecord] =
    React.useState(seleccionableCarrerasModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(SeleccionableCarreras, idProp)
        : seleccionableCarrerasModelProp;
      setSeleccionableCarrerasRecord(record);
    };
    queryData();
  }, [idProp, seleccionableCarrerasModelProp]);
  React.useEffect(resetStateValues, [seleccionableCarrerasRecord]);
  const validations = {
    carreras: [],
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
          carreras,
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
            SeleccionableCarreras.copyOf(
              seleccionableCarrerasRecord,
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
      {...getOverrideProps(overrides, "SeleccionableCarrerasUpdateForm")}
      {...rest}
    >
      <TextField
        label="Carreras"
        isRequired={false}
        isReadOnly={false}
        value={carreras}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              carreras: value,
            };
            const result = onChange(modelFields);
            value = result?.carreras ?? value;
          }
          if (errors.carreras?.hasError) {
            runValidationTasks("carreras", value);
          }
          setCarreras(value);
        }}
        onBlur={() => runValidationTasks("carreras", carreras)}
        errorMessage={errors.carreras?.errorMessage}
        hasError={errors.carreras?.hasError}
        {...getOverrideProps(overrides, "carreras")}
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
          isDisabled={!(idProp || seleccionableCarrerasModelProp)}
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
              !(idProp || seleccionableCarrerasModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

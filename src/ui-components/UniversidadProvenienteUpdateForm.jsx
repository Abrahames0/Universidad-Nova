/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { UniversidadProveniente } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UniversidadProvenienteUpdateForm(props) {
  const {
    id: idProp,
    universidadProveniente: universidadProvenienteModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    universidadProveniente: "",
  };
  const [universidadProveniente, setUniversidadProveniente] = React.useState(
    initialValues.universidadProveniente
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = universidadProvenienteRecord
      ? { ...initialValues, ...universidadProvenienteRecord }
      : initialValues;
    setUniversidadProveniente(cleanValues.universidadProveniente);
    setErrors({});
  };
  const [universidadProvenienteRecord, setUniversidadProvenienteRecord] =
    React.useState(universidadProvenienteModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UniversidadProveniente, idProp)
        : universidadProvenienteModelProp;
      setUniversidadProvenienteRecord(record);
    };
    queryData();
  }, [idProp, universidadProvenienteModelProp]);
  React.useEffect(resetStateValues, [universidadProvenienteRecord]);
  const validations = {
    universidadProveniente: [],
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
          universidadProveniente,
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
            UniversidadProveniente.copyOf(
              universidadProvenienteRecord,
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
      {...getOverrideProps(overrides, "UniversidadProvenienteUpdateForm")}
      {...rest}
    >
      <TextField
        label="Universidad proveniente"
        isRequired={false}
        isReadOnly={false}
        value={universidadProveniente}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              universidadProveniente: value,
            };
            const result = onChange(modelFields);
            value = result?.universidadProveniente ?? value;
          }
          if (errors.universidadProveniente?.hasError) {
            runValidationTasks("universidadProveniente", value);
          }
          setUniversidadProveniente(value);
        }}
        onBlur={() =>
          runValidationTasks("universidadProveniente", universidadProveniente)
        }
        errorMessage={errors.universidadProveniente?.errorMessage}
        hasError={errors.universidadProveniente?.hasError}
        {...getOverrideProps(overrides, "universidadProveniente")}
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
          isDisabled={!(idProp || universidadProvenienteModelProp)}
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
              !(idProp || universidadProvenienteModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Padres } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PadresUpdateForm(props) {
  const {
    id: idProp,
    padres: padresModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombreMa: "",
    apellidoPaternoMa: "",
    apellidoMaternoMa: "",
    telefonoMa: "",
    nombrePa: "",
    apellidoPaternoPa: "",
    apellidoMaternoPa: "",
  };
  const [nombreMa, setNombreMa] = React.useState(initialValues.nombreMa);
  const [apellidoPaternoMa, setApellidoPaternoMa] = React.useState(
    initialValues.apellidoPaternoMa
  );
  const [apellidoMaternoMa, setApellidoMaternoMa] = React.useState(
    initialValues.apellidoMaternoMa
  );
  const [telefonoMa, setTelefonoMa] = React.useState(initialValues.telefonoMa);
  const [nombrePa, setNombrePa] = React.useState(initialValues.nombrePa);
  const [apellidoPaternoPa, setApellidoPaternoPa] = React.useState(
    initialValues.apellidoPaternoPa
  );
  const [apellidoMaternoPa, setApellidoMaternoPa] = React.useState(
    initialValues.apellidoMaternoPa
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = padresRecord
      ? { ...initialValues, ...padresRecord }
      : initialValues;
    setNombreMa(cleanValues.nombreMa);
    setApellidoPaternoMa(cleanValues.apellidoPaternoMa);
    setApellidoMaternoMa(cleanValues.apellidoMaternoMa);
    setTelefonoMa(cleanValues.telefonoMa);
    setNombrePa(cleanValues.nombrePa);
    setApellidoPaternoPa(cleanValues.apellidoPaternoPa);
    setApellidoMaternoPa(cleanValues.apellidoMaternoPa);
    setErrors({});
  };
  const [padresRecord, setPadresRecord] = React.useState(padresModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Padres, idProp)
        : padresModelProp;
      setPadresRecord(record);
    };
    queryData();
  }, [idProp, padresModelProp]);
  React.useEffect(resetStateValues, [padresRecord]);
  const validations = {
    nombreMa: [],
    apellidoPaternoMa: [],
    apellidoMaternoMa: [],
    telefonoMa: [],
    nombrePa: [],
    apellidoPaternoPa: [],
    apellidoMaternoPa: [],
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
          nombreMa,
          apellidoPaternoMa,
          apellidoMaternoMa,
          telefonoMa,
          nombrePa,
          apellidoPaternoPa,
          apellidoMaternoPa,
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
            Padres.copyOf(padresRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
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
      {...getOverrideProps(overrides, "PadresUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre ma"
        isRequired={false}
        isReadOnly={false}
        value={nombreMa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreMa: value,
              apellidoPaternoMa,
              apellidoMaternoMa,
              telefonoMa,
              nombrePa,
              apellidoPaternoPa,
              apellidoMaternoPa,
            };
            const result = onChange(modelFields);
            value = result?.nombreMa ?? value;
          }
          if (errors.nombreMa?.hasError) {
            runValidationTasks("nombreMa", value);
          }
          setNombreMa(value);
        }}
        onBlur={() => runValidationTasks("nombreMa", nombreMa)}
        errorMessage={errors.nombreMa?.errorMessage}
        hasError={errors.nombreMa?.hasError}
        {...getOverrideProps(overrides, "nombreMa")}
      ></TextField>
      <TextField
        label="Apellido paterno ma"
        isRequired={false}
        isReadOnly={false}
        value={apellidoPaternoMa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreMa,
              apellidoPaternoMa: value,
              apellidoMaternoMa,
              telefonoMa,
              nombrePa,
              apellidoPaternoPa,
              apellidoMaternoPa,
            };
            const result = onChange(modelFields);
            value = result?.apellidoPaternoMa ?? value;
          }
          if (errors.apellidoPaternoMa?.hasError) {
            runValidationTasks("apellidoPaternoMa", value);
          }
          setApellidoPaternoMa(value);
        }}
        onBlur={() =>
          runValidationTasks("apellidoPaternoMa", apellidoPaternoMa)
        }
        errorMessage={errors.apellidoPaternoMa?.errorMessage}
        hasError={errors.apellidoPaternoMa?.hasError}
        {...getOverrideProps(overrides, "apellidoPaternoMa")}
      ></TextField>
      <TextField
        label="Apellido materno ma"
        isRequired={false}
        isReadOnly={false}
        value={apellidoMaternoMa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreMa,
              apellidoPaternoMa,
              apellidoMaternoMa: value,
              telefonoMa,
              nombrePa,
              apellidoPaternoPa,
              apellidoMaternoPa,
            };
            const result = onChange(modelFields);
            value = result?.apellidoMaternoMa ?? value;
          }
          if (errors.apellidoMaternoMa?.hasError) {
            runValidationTasks("apellidoMaternoMa", value);
          }
          setApellidoMaternoMa(value);
        }}
        onBlur={() =>
          runValidationTasks("apellidoMaternoMa", apellidoMaternoMa)
        }
        errorMessage={errors.apellidoMaternoMa?.errorMessage}
        hasError={errors.apellidoMaternoMa?.hasError}
        {...getOverrideProps(overrides, "apellidoMaternoMa")}
      ></TextField>
      <TextField
        label="Telefono ma"
        isRequired={false}
        isReadOnly={false}
        value={telefonoMa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreMa,
              apellidoPaternoMa,
              apellidoMaternoMa,
              telefonoMa: value,
              nombrePa,
              apellidoPaternoPa,
              apellidoMaternoPa,
            };
            const result = onChange(modelFields);
            value = result?.telefonoMa ?? value;
          }
          if (errors.telefonoMa?.hasError) {
            runValidationTasks("telefonoMa", value);
          }
          setTelefonoMa(value);
        }}
        onBlur={() => runValidationTasks("telefonoMa", telefonoMa)}
        errorMessage={errors.telefonoMa?.errorMessage}
        hasError={errors.telefonoMa?.hasError}
        {...getOverrideProps(overrides, "telefonoMa")}
      ></TextField>
      <TextField
        label="Nombre pa"
        isRequired={false}
        isReadOnly={false}
        value={nombrePa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreMa,
              apellidoPaternoMa,
              apellidoMaternoMa,
              telefonoMa,
              nombrePa: value,
              apellidoPaternoPa,
              apellidoMaternoPa,
            };
            const result = onChange(modelFields);
            value = result?.nombrePa ?? value;
          }
          if (errors.nombrePa?.hasError) {
            runValidationTasks("nombrePa", value);
          }
          setNombrePa(value);
        }}
        onBlur={() => runValidationTasks("nombrePa", nombrePa)}
        errorMessage={errors.nombrePa?.errorMessage}
        hasError={errors.nombrePa?.hasError}
        {...getOverrideProps(overrides, "nombrePa")}
      ></TextField>
      <TextField
        label="Apellido paterno pa"
        isRequired={false}
        isReadOnly={false}
        value={apellidoPaternoPa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreMa,
              apellidoPaternoMa,
              apellidoMaternoMa,
              telefonoMa,
              nombrePa,
              apellidoPaternoPa: value,
              apellidoMaternoPa,
            };
            const result = onChange(modelFields);
            value = result?.apellidoPaternoPa ?? value;
          }
          if (errors.apellidoPaternoPa?.hasError) {
            runValidationTasks("apellidoPaternoPa", value);
          }
          setApellidoPaternoPa(value);
        }}
        onBlur={() =>
          runValidationTasks("apellidoPaternoPa", apellidoPaternoPa)
        }
        errorMessage={errors.apellidoPaternoPa?.errorMessage}
        hasError={errors.apellidoPaternoPa?.hasError}
        {...getOverrideProps(overrides, "apellidoPaternoPa")}
      ></TextField>
      <TextField
        label="Apellido materno pa"
        isRequired={false}
        isReadOnly={false}
        value={apellidoMaternoPa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreMa,
              apellidoPaternoMa,
              apellidoMaternoMa,
              telefonoMa,
              nombrePa,
              apellidoPaternoPa,
              apellidoMaternoPa: value,
            };
            const result = onChange(modelFields);
            value = result?.apellidoMaternoPa ?? value;
          }
          if (errors.apellidoMaternoPa?.hasError) {
            runValidationTasks("apellidoMaternoPa", value);
          }
          setApellidoMaternoPa(value);
        }}
        onBlur={() =>
          runValidationTasks("apellidoMaternoPa", apellidoMaternoPa)
        }
        errorMessage={errors.apellidoMaternoPa?.errorMessage}
        hasError={errors.apellidoMaternoPa?.hasError}
        {...getOverrideProps(overrides, "apellidoMaternoPa")}
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
          isDisabled={!(idProp || padresModelProp)}
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
              !(idProp || padresModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

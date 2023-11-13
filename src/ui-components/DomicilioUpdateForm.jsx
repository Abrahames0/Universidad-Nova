/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Domicilio } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DomicilioUpdateForm(props) {
  const {
    id: idProp,
    domicilio: domicilioModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    calle: "",
    numero: "",
    colonia: "",
    ciudad: "",
    codigoPostal: "",
  };
  const [calle, setCalle] = React.useState(initialValues.calle);
  const [numero, setNumero] = React.useState(initialValues.numero);
  const [colonia, setColonia] = React.useState(initialValues.colonia);
  const [ciudad, setCiudad] = React.useState(initialValues.ciudad);
  const [codigoPostal, setCodigoPostal] = React.useState(
    initialValues.codigoPostal
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = domicilioRecord
      ? { ...initialValues, ...domicilioRecord }
      : initialValues;
    setCalle(cleanValues.calle);
    setNumero(cleanValues.numero);
    setColonia(cleanValues.colonia);
    setCiudad(cleanValues.ciudad);
    setCodigoPostal(cleanValues.codigoPostal);
    setErrors({});
  };
  const [domicilioRecord, setDomicilioRecord] =
    React.useState(domicilioModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Domicilio, idProp)
        : domicilioModelProp;
      setDomicilioRecord(record);
    };
    queryData();
  }, [idProp, domicilioModelProp]);
  React.useEffect(resetStateValues, [domicilioRecord]);
  const validations = {
    calle: [],
    numero: [],
    colonia: [],
    ciudad: [],
    codigoPostal: [],
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
          calle,
          numero,
          colonia,
          ciudad,
          codigoPostal,
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
            Domicilio.copyOf(domicilioRecord, (updated) => {
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
      {...getOverrideProps(overrides, "DomicilioUpdateForm")}
      {...rest}
    >
      <TextField
        label="Calle"
        isRequired={false}
        isReadOnly={false}
        value={calle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              calle: value,
              numero,
              colonia,
              ciudad,
              codigoPostal,
            };
            const result = onChange(modelFields);
            value = result?.calle ?? value;
          }
          if (errors.calle?.hasError) {
            runValidationTasks("calle", value);
          }
          setCalle(value);
        }}
        onBlur={() => runValidationTasks("calle", calle)}
        errorMessage={errors.calle?.errorMessage}
        hasError={errors.calle?.hasError}
        {...getOverrideProps(overrides, "calle")}
      ></TextField>
      <TextField
        label="Numero"
        isRequired={false}
        isReadOnly={false}
        value={numero}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              calle,
              numero: value,
              colonia,
              ciudad,
              codigoPostal,
            };
            const result = onChange(modelFields);
            value = result?.numero ?? value;
          }
          if (errors.numero?.hasError) {
            runValidationTasks("numero", value);
          }
          setNumero(value);
        }}
        onBlur={() => runValidationTasks("numero", numero)}
        errorMessage={errors.numero?.errorMessage}
        hasError={errors.numero?.hasError}
        {...getOverrideProps(overrides, "numero")}
      ></TextField>
      <TextField
        label="Colonia"
        isRequired={false}
        isReadOnly={false}
        value={colonia}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              calle,
              numero,
              colonia: value,
              ciudad,
              codigoPostal,
            };
            const result = onChange(modelFields);
            value = result?.colonia ?? value;
          }
          if (errors.colonia?.hasError) {
            runValidationTasks("colonia", value);
          }
          setColonia(value);
        }}
        onBlur={() => runValidationTasks("colonia", colonia)}
        errorMessage={errors.colonia?.errorMessage}
        hasError={errors.colonia?.hasError}
        {...getOverrideProps(overrides, "colonia")}
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
              calle,
              numero,
              colonia,
              ciudad: value,
              codigoPostal,
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
        label="Codigo postal"
        isRequired={false}
        isReadOnly={false}
        value={codigoPostal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              calle,
              numero,
              colonia,
              ciudad,
              codigoPostal: value,
            };
            const result = onChange(modelFields);
            value = result?.codigoPostal ?? value;
          }
          if (errors.codigoPostal?.hasError) {
            runValidationTasks("codigoPostal", value);
          }
          setCodigoPostal(value);
        }}
        onBlur={() => runValidationTasks("codigoPostal", codigoPostal)}
        errorMessage={errors.codigoPostal?.errorMessage}
        hasError={errors.codigoPostal?.hasError}
        {...getOverrideProps(overrides, "codigoPostal")}
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
          isDisabled={!(idProp || domicilioModelProp)}
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
              !(idProp || domicilioModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

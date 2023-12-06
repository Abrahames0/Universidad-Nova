/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { ProgramaElegir } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProgramaElegirUpdateForm(props) {
  const {
    id: idProp,
    programaElegir: programaElegirModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    programasMaestria: "",
  };
  const [programasMaestria, setProgramasMaestria] = React.useState(
    initialValues.programasMaestria
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = programaElegirRecord
      ? { ...initialValues, ...programaElegirRecord }
      : initialValues;
    setProgramasMaestria(cleanValues.programasMaestria);
    setErrors({});
  };
  const [programaElegirRecord, setProgramaElegirRecord] = React.useState(
    programaElegirModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ProgramaElegir, idProp)
        : programaElegirModelProp;
      setProgramaElegirRecord(record);
    };
    queryData();
  }, [idProp, programaElegirModelProp]);
  React.useEffect(resetStateValues, [programaElegirRecord]);
  const validations = {
    programasMaestria: [],
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
          programasMaestria,
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
            ProgramaElegir.copyOf(programaElegirRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ProgramaElegirUpdateForm")}
      {...rest}
    >
      <TextField
        label="Programas maestria"
        isRequired={false}
        isReadOnly={false}
        value={programasMaestria}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              programasMaestria: value,
            };
            const result = onChange(modelFields);
            value = result?.programasMaestria ?? value;
          }
          if (errors.programasMaestria?.hasError) {
            runValidationTasks("programasMaestria", value);
          }
          setProgramasMaestria(value);
        }}
        onBlur={() =>
          runValidationTasks("programasMaestria", programasMaestria)
        }
        errorMessage={errors.programasMaestria?.errorMessage}
        hasError={errors.programasMaestria?.hasError}
        {...getOverrideProps(overrides, "programasMaestria")}
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
          isDisabled={!(idProp || programaElegirModelProp)}
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
              !(idProp || programaElegirModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

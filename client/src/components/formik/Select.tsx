import React from "react";
import ReactSelect from "react-select";
import { StylesConfig } from "react-select/src/styles";
import { FieldProps } from "formik";

import { Option } from "../../types/option";

import { Label } from "./styled/Formik";
import { ErrorMsg } from "./ErrorMsg";

const styleSelect: StylesConfig = {
  container: provided => ({
    ...provided,
    width: "100%"
  })
};

interface SelectProps {
  options: Option[];
  label: string;
}

export const Select: React.FC<SelectProps & FieldProps> = ({
  field: { name, onBlur, value },
  form,
  options,
  label
}) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <ReactSelect
        styles={styleSelect}
        name={name}
        value={options ? options.find(option => option.value === value) : null}
        onBlur={onBlur}
        onChange={option => form.setFieldValue(name, option)}
        options={options}
      />
      <ErrorMsg name={name} />
    </>
  );
};

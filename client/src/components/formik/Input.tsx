import React from "react";
import { FieldProps } from "formik";

import { Input as InputStyled, Label } from "./styled/Formik";
import { ErrorMsg } from "./ErrorMsg";

interface InputProps {
  type: "number";
  placeholder: string;
  label: string;
  step?: number;
}

export const Input: React.FC<InputProps & FieldProps> = ({
  field: { name, onChange, onBlur },
  type,
  placeholder,
  label,
  step
}) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <InputStyled
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        step={step}
      />
      <ErrorMsg name={name} />
    </>
  );
};

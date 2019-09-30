import React from "react";
import { ErrorMessage } from "formik";

import { Text } from "../text/styled/Text";

interface ErrorMsgProps {
  name: string;
}

export const ErrorMsg: React.FC<ErrorMsgProps> = ({ name }) => {
  return (
    <Text color="error" display="block">
      <ErrorMessage name={name} />
    </Text>
  );
};

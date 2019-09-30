import React from "react";
import { Formik, Field, Form } from "formik";
import { Flex } from "@rebass/grid";

import { Option } from "../../types/option";
import { Input } from "../../components/formik/Input";
import { Select } from "../../components/formik/Select";
import { Submit } from "../../components/formik/styled/Formik";

import { initialValues, ValidationSchema, FormValues } from "./_formik";

interface HomeFormProps {
  onSubmit: (values: FormValues) => void;
  rates: Option[];
}

export const HomeForm: React.FC<HomeFormProps> = ({ onSubmit, rates }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={ValidationSchema}
      render={() => (
        <Form>
          <Flex flexDirection="column">
            <Field
              name="amount"
              component={Input}
              placeholder="100"
              type="number"
              step={0.01}
              label="Choose amount in CZK"
            />
            <Field
              name="rate"
              component={Select}
              options={rates}
              label="Choose desired currency"
            />
            <Submit mt={2} type="submit">
              Convert
            </Submit>
          </Flex>
        </Form>
      )}
    />
  );
};

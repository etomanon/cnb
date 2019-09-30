import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";
import { Flex } from "@rebass/grid";

import { selectorData } from "../../redux/data/selectors";
import { dataGet } from "../../redux/data/actions";
import { Input } from "../../components/formik/Input";
import { Select } from "../../components/formik/Select";
import { Submit } from "../../components/formik/styled/Formik";

import { initialValues, ValidationSchema } from "./_formik";

export const Home: React.FC = () => {
  const data = useSelector(selectorData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataGet());
  }, [dispatch]);
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        validationSchema={ValidationSchema}
        render={() => (
          <Form>
            <Flex
              mt={3}
              flexDirection="column"
              width={[1, 0.75, 0.5]}
              px={[1, 0]}
              mx="auto"
            >
              <Field
                name="amount"
                component={Input}
                placeholder="100"
                type="number"
                label="Choose amount in CZK"
              />
              <Field
                name="rate"
                component={Select}
                options={data.rates}
                label="Choose desired currency"
              />
              <Submit mt={2} type="submit">
                Submit
              </Submit>
            </Flex>
          </Form>
        )}
      />
    </>
  );
};

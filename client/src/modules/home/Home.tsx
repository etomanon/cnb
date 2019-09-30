import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex } from "@rebass/grid";
import Decimal from "decimal.js-light";

import { selectorData } from "../../redux/data/selectors";
import { dataGet } from "../../redux/data/actions";
import { Header, SubHeader } from "../../components/text/styled/Text";

import { HomeForm } from "./HomeForm";
import { FormValues } from "./_formik";

export const Home: React.FC = () => {
  // final converted value
  const [converted, setConverted] = useState<string | null>(null);
  // formik value after submit
  const [formData, setFormData] = useState<FormValues | null>(null);
  const data = useSelector(selectorData);
  const dispatch = useDispatch();
  // load exchange rates
  useEffect(() => {
    dispatch(dataGet());
  }, [dispatch]);
  // update converted value if formData changes
  useEffect(() => {
    if (formData && formData.amount && formData.rate) {
      const currencyOriginal = new Decimal(formData.amount);
      const currencyTarget = new Decimal(formData.rate.value);
      const converted = currencyOriginal.dividedBy(currencyTarget).toFixed(2);
      setConverted(converted);
    }
  }, [formData]);
  const onSubmit = (values: FormValues) => setFormData(values);
  return (
    <>
      <Flex
        mt={3}
        flexDirection="column"
        width={[1, 0.75, 0.5]}
        px={[1, 0]}
        mx="auto"
      >
        <Header>Currency Converter</Header>
        <HomeForm onSubmit={onSubmit} rates={data.rates} />
        {formData && formData.amount && formData.rate && (
          <>
            <SubHeader mt={4}>{`${formData.amount} CZK`}</SubHeader>
            <SubHeader>=</SubHeader>
            <SubHeader>{`${converted} ${formData.rate.label}`}</SubHeader>
          </>
        )}
      </Flex>
    </>
  );
};

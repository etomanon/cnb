import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex } from "@rebass/grid";

import { selectorData } from "../../redux/data/selectors";
import { dataGet } from "../../redux/data/actions";
import { Header, SubHeader } from "../../components/text/styled/Text";

import { HomeForm } from "./HomeForm";
import { FormValues } from "./_formik";

export const Home: React.FC = () => {
  const [formData, setFormData] = useState<FormValues | null>(null);
  const data = useSelector(selectorData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataGet());
  }, [dispatch]);
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
          <SubHeader>{`${formData.amount} CZK = ${(
            formData.amount / formData.rate.value
          ).toFixed(2)} ${formData.rate.label}`}</SubHeader>
        )}
      </Flex>
    </>
  );
};

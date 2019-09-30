import * as Yup from "yup";

import { Option } from "../../types/option";

export const ValidationSchema = Yup.object().shape({
  amount: Yup.number()
    .nullable()
    .required("Required"),
  rate: Yup.object<Option>()
    .nullable()
    .required("Required")
});

export const initialValues: FormValues = {
  amount: null,
  rate: null
};

export type FormValues = Yup.InferType<typeof ValidationSchema>;

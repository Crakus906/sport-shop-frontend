import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email.")
    .required("Please enter email.")
    .nullable()
    .default(""),
  password: yup
    .string()
    .required("Please enter password.")
    .min(6, "Password is too short, min length ${min}.")
    .max(19, "Password is too long, max length ${max}.")
    .nullable()
    .default(""),
});

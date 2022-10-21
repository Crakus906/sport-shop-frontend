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
  phoneNumber: yup
    .number()
    .required("Please enter phone number.")
    .nullable()
    .default(""),
  companyName: yup
    .string()
    .required("Please enter Company name.")
    .min(3, "Company name is too short, min length ${min}.")
    .max(19, "Company name is too long, max length ${max}.")
    .nullable()
    .default(""),
  firstName: yup
    .string()
    .required("Please enter first name.")
    .min(3, "first name is too short, min length ${min}.")
    .max(19, "first name is too long, max length ${max}.")
    .nullable()
    .default(""),
  lastName: yup
    .string()
    .required("Please enter last name.")
    .min(3, "Last name is too short, min length ${min}.")
    .max(19, "Last name is too long, max length ${max}.")
    .nullable()
    .default(""),
});

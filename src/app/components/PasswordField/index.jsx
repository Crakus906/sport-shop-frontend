import Input from "../Input";
import React from "react";
import { Field } from "formik";
import InputPassword from "../InputPassword";

const PasswordField = ({ name, variant, errors, ...props }) => {
  return (
    <Field name={name}>
      {({ meta }) => (
        <InputPassword
          {...props}
          variant={variant}
          errors={meta.touched && meta.error}
        />
      )}
    </Field>
  );
};

export default PasswordField;

import Input from "../Input";
import React from "react";
import { Field } from "formik";

const InputField = ({ name, variant, errors, ...props }) => {
  return (
    <Field name={name}>
      {({ meta }) => (
        <>
          <Input
            {...props}
            variant={variant}
            errors={meta.touched && meta.error}
          />
        </>
      )}
    </Field>
  );
};

export default InputField;
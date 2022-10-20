import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { schema } from "./schema";

import st from "./style.module.scss";

const CreateProduct = () => {
  const dispatch = useDispatch();

  return (
    <Box>
      <Box>Create Product</Box>
      <Formik
        initialValues={schema.default()}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values: { email, password }, handleChange }) => (
          <Form>
            <InputField
              name="email"
              id="email"
              label="Email"
              placehplder="email@email.com"
              onChange={handleChange}
              value={email}
            />
            <Box className={st.buttonContainer}>
              <Box
                style={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <Button type="submit" variant="outlined">
                  Create Product
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateProduct;

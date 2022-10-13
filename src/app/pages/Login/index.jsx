import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Input from "../../components/Input";

import st from "./style.module.scss";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <Box className={st.login}>
      <Typography className={st.title}>login</Typography>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await console.log(values);
        }}
      >
        <Form>
          <Input
            required
            id="email"
            label="email"
            placehplder="email@email.com"
          />
          <Input
            required
            id="password"
            type="password"
            label="Password"
            placehplder="Password"
          />
          <Box className={st.buttonContainer}>
            <Button>Back</Button>
            <Button>Login</Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default Login;

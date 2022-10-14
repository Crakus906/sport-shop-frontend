import React from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PaaswordInput from "../../components/InputPassword";
import { schema } from "./schema";

import st from "./style.module.scss";
import { login } from "../../redux/actions/auth";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box className={st.login}>
      <Typography className={st.title}>Registration</Typography>
      <Formik
        initialValues={schema.default()}
        validationSchema={schema}
        onSubmit={(values) => {
          dispatch(login(values));
        }}
      >
        {({ values: { email, password }, handleChange, errors }) => (
          <Form>
            <Input
              id="email"
              label="Email"
              placehplder="email@email.com"
              onChange={handleChange}
              value={email}
              errors={errors.email}
            />
            <PaaswordInput
              id="password"
              label="Password"
              placehplder="Password"
              value={password}
              onChange={handleChange}
              errors={errors.password}
            />
            <Box className={st.buttonContainer}>
              <Box
                style={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <Button
                  onClick={() => navigate(location.state.pathName)}
                  variant="outlined"
                >
                  Back
                </Button>
                <Button type="submit" variant="outlined">
                  Login
                </Button>
              </Box>
              <Button variant="contained">Register</Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Registration;

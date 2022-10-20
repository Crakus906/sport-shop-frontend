import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { isAuthSelector } from "../../redux/selector/selector";
import { login } from "../../redux/action/auth";
import { schema } from "./schema";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import PasswordField from "../../components/PasswordField";

import st from "./style.module.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isAuth = useSelector(isAuthSelector);

  useEffect(() => {
    if (isAuth) {
      return navigate("/");
    }
  }, [isAuth]);

  return (
    <Box className={st.login}>
      <Typography className={st.title}>login</Typography>
      <Formik
        initialValues={schema.default()}
        validationSchema={schema}
        onSubmit={(values) => {
          dispatch(login(values));
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
            <PasswordField
              name="password"
              id="password"
              label="Password"
              placehplder="Password"
              value={password}
              onChange={handleChange}
            />
            <Box className={st.buttonContainer}>
              <Box
                style={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <Button onClick={() => navigate("/")} variant="outlined">
                  Back
                </Button>
                <Button type="submit" variant="outlined">
                  Login
                </Button>
              </Box>
              <Button
                onClick={() =>
                  navigate("/auth/registration", {
                    state: { auth: true, pathName: location.pathname },
                  })
                }
                variant="contained"
              >
                Register
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;

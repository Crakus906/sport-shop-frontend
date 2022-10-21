import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { registration } from "../../redux/action/auth";
import { schema } from "./schema";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import PasswordField from "../../components/PasswordField";
import { isAuthSelector } from "../../redux/selector/selector";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import st from "./style.module.scss";

const RegistrationAsSeller = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(isAuthSelector);

  useEffect(() => {
    if (isAuth) {
      return navigate("/");
    }
  }, [isAuth]);

  return (
    <Box className={st.login}>
      <Typography className={st.title}>Register as a seller</Typography>
      <Formik
        initialValues={schema.default()}
        validationSchema={schema}
        onSubmit={(values) => {
          dispatch(registration({ seller: true, ...values }));
        }}
      >
        {({
          values: {
            email,
            cretePassword,
            companyName,
            firstName,
            lastName,
            phoneNumber,
          },
          handleChange,
        }) => (
          <Form>
            <InputField
              name="firstName"
              id="firstName"
              label="First Name"
              placehplder="First Name"
              onChange={handleChange}
              value={firstName}
            />
            <InputField
              name="lastName"
              id="lastName"
              label="Last Name"
              placehplder="Last Name"
              onChange={handleChange}
              value={lastName}
            />
            <InputField
              name="email"
              id="email"
              label="Email"
              placehplder="email@email.com"
              onChange={handleChange}
              value={email}
            />
            <InputField
              name="companyName"
              id="companyName"
              label="Company Name"
              onChange={handleChange}
              value={companyName}
            />
            <InputField
              name="phoneNumber"
              id="phoneNumber"
              label="Phone Number"
              onChange={handleChange}
              type="number"
              value={phoneNumber}
            />
            <PasswordField
              name="password"
              id="password"
              label="Crete Password"
              placehplder="Crete Password"
              value={cretePassword}
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
                  Registration
                </Button>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Box
                  onClick={() =>
                    navigate("/auth/login", {
                      state: { auth: true, pathName: location.pathname },
                    })
                  }
                  style={{
                    cursor: "pointer",
                  }}
                  variant="contained"
                >
                  Login
                </Box>
                <Box
                  onClick={() =>
                    navigate("/auth/registration", {
                      state: { auth: true, pathName: location.pathname },
                    })
                  }
                  style={{
                    cursor: "pointer",
                  }}
                  variant="contained"
                >
                  Register as a buyer
                </Box>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegistrationAsSeller;

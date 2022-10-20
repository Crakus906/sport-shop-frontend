import { createAction } from "redux-actions";
import {
  LOGIN,
  REGISTRATION,
  GET_ME,
  REJECT,
  RESPONSE,
  REQUEST,
} from "../types/auth";
import api from "../../api/http";
import { toast } from "../../helpers/toast";

export const loginAction = createAction(LOGIN);
export const registrationAction = createAction(REGISTRATION);
export const getMeAction = createAction(GET_ME);

export const request = createAction(REQUEST);
export const response = createAction(RESPONSE);
export const reject = createAction(REJECT);

export const logout = createAction(REGISTRATION);

export const login = (body) => async (dispatch) => {
  try {
    const res = await api.post("/auth/login", body, {
      responseType: "application/json",
    });

    toast({ type: "success", text: "You have successfully logged in" });

    const data = JSON.parse(res.data);
    console.log(data);
    window.localStorage.setItem("token", data.token);

    dispatch(loginAction(data));
  } catch (e) {}
};

export const registration = (body) => async (dispatch) => {
  try {
    const res = await api.post("/auth/register", body, {
      responseType: "application/json",
    });

    toast({ type: "success", text: "you have successfully registered" });

    dispatch(registrationAction(JSON.parse(res.data)));
  } catch (e) {
    toast({ type: "error", text: JSON.parse(e.response.data).message });
  }
};

export const getMe = () => async (dispatch) => {
  try {
    dispatch(request());
    const res = await api.get("/auth/me", {
      responseType: "application/json",
    });

    dispatch(getMeAction(JSON.parse(res.data)));
    dispatch(response());
  } catch (e) {
    dispatch(reject());
    toast({ type: "error", text: JSON.parse(e.response.data).message });
  }
};

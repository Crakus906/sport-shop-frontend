import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/http";
import { toast, toastError } from "../../helpers/toast";
import * as ACTIONS from "../types/data";

export const addTest = createAction(ACTIONS.TEST);

export const login = createAsyncThunk(ACTIONS.LOGIN, async (body) => {
  try {
    const res = await api.post("/auth/login", body, {
      responseType: "application/json",
    });

    toast({ type: "success", text: "You have successfully logged in" });

    return res.data;
  } catch (e) {
    toast({ type: "error", text: JSON.parse(e.response.data).message });
  }
});

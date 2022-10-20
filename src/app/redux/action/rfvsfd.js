import * as ACTIONS from "../../redux/types/auth";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import api from "../../api/http";
import { toast, toastError } from "../../helpers/toast";

export const addTest = createAction(ACTIONS.test);

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

// export const registration = createAsyncThunk(
//   ACTIONS.REGISTRATION,
//   async (body) => {
//     try {
//       const res = await api.post("/auth/register", body, {
//         responseType: "application/json",
//       });

//       toast({ type: "success", text: "you have successfully registered" });

//       return res.data;
//     } catch (e) {
//       toast({ type: "error", text: JSON.parse(e.response.data).message });
//     }
//   }
// );

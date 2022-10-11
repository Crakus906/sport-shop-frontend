import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as ACTIONS from "../types/data";

export const addTest = createAction(ACTIONS.TEST);

// export const getManufactures = createAsyncThunk(
//   ACTIONS.GET_MANUFACTURERS,
//   async (name) => {
//     const res = await api.get(`/category/${name}`);
//     return res.data;
//   }
// );

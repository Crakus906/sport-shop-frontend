import { createReducer } from "@reduxjs/toolkit";
import * as ACTIONS from "../actions/auth";

const loadingMatcher = (action) => action.type.endsWith("/pending");

const initialState = {
  auth: null,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(ACTIONS.login, (state, { payload }) => ({
      ...state,
      auth: payload,
    }))
    .addMatcher(loadingMatcher, (state) => ({
      ...state,
      isLoading: true,
    }));
});

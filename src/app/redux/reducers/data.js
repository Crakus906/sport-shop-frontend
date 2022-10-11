import { createReducer } from "@reduxjs/toolkit";
import * as ACTIONS from "../actions/data";

const loadingMatcher = (action) => action.type.endsWith("/pending");

const initialState = {
  test: 0,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(ACTIONS.addTest, (state, { payload }) => ({
      ...state,
      test: payload + state.test,
    }))
    .addMatcher(loadingMatcher, (state) => ({
      ...state,
      isLoading: true,
    }));
});

import { createSelector } from "reselect";

const testSelector = (state) => state.data.test;

export const homeContentSelector = createSelector(testSelector, (test) => ({
  test,
}));

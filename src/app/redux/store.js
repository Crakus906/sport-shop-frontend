import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import reducer from "./reducers";

// const middleware = getDefaultMiddleware();

// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(logger);
// }

export default configureStore({
  reducer,
  // middleware,
  devTools: process.env.NODE_ENV !== "production",
});

import {
  LOGIN,
  REGISTRATION,
  LOGOUT,
  GET_ME,
  REJECT,
  REQUEST,
  RESPONSE,
} from "../types/auth";

const initState = {
  dataUser: null,
  isLoading: false,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case REJECT:
      return {
        ...state,
        isLoading: false,
      };
    case REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case RESPONSE:
      return {
        ...state,
        isLoading: false,
      };
    case LOGIN:
      return {
        ...state,
        dataUser: payload,
      };
    case REGISTRATION:
      return {
        ...state,
        dataUser: payload,
      };
    case LOGOUT:
      return {
        ...state,
        dataUser: null,
      };
    case GET_ME:
      // debugger;
      return {
        dataUser: payload,
      };
    default:
      return state;
  }
};

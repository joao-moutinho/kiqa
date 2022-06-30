import * as logTypes from "../logtypes";

const INITIAL_STATE = {
  user: "",
};

const logReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case logTypes.ADD_LOGGED_USER:
      return { ...state, user: action.payload.user };
    case logTypes.REMOVE_LOGGED_USER:
      return { ...state, user: action.payload.user };
    default:
      return { ...state };
  }
};

export default logReducer;

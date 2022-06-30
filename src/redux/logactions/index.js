import * as logTypes from "../logtypes";

export const addLoggedUser = (user) => {
  return {
    type: logTypes.ADD_LOGGED_USER,
    payload: {
      user: user,
    },
  };
};

export const removeLoggedUser = () => {
  return {
    type: logTypes.REMOVE_LOGGED_USER,
    payload: {
      user: ""
    },
  };
};

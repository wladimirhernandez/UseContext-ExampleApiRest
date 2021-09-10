import { GET_USERS, GET_PROFILE } from "../types";

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };

    case GET_PROFILE:
      console.log(payload);
      return {
        ...state,
        selectedUser: payload,
      };
    default:
      return state;
  }
};

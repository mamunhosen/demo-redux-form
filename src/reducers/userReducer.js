import { types } from "../actionTypes";

const inititalState = {
  data: {},
  loading: false,
  errror: "",
};

const userReducer = (state = inititalState, action) => {
  switch (action.type) {
    case types.REQUESTED: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    case types.FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;

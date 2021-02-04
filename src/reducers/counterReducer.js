import { types } from "../actionTypes";

const inititalState = {
  count: 0,
};

const counterReducer = (state = inititalState, action) => {
  switch (action.type) {
    case types.INCREMENT: {
      return { count: state.count + 1 };
    }
    case types.DECREMENT: {
      return { count: state.count - 1 };
    }
    default:
      return state;
  }
};

export default counterReducer;

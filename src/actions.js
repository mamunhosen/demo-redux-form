import { types } from "./actionTypes";

export const increment = () => {
  return {
    type: types.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: types.DECREMENT,
  };
};

export function fetchDataInitiate(id) {
  return {
    type: types.REQUESTED,
    payload: id,
  };
}

export function fetchDataSuccess(user) {
  return {
    type: types.SUCCESS,
    payload: user,
  };
}

export function fetchDataFailure(error) {
  return {
    type: types.FAILED,
    payload: error,
  };
}

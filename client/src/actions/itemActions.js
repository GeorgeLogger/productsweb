import { GET_ITEMS, ADD_ITEM } from "./types";

export const getItems = () => (dispatch) => {
  const action = { type: GET_ITEMS };
  dispatch(action);
};

export const addItem = (newItem) => (dispatch) => {
  const action = { type: ADD_ITEM, payload: { ...newItem } };
  dispatch(action);
};

import axios from "axios";
import { GET_ITEMS, ADD_ITEM, ITEMS_LOADING } from "./types";

export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());

  axios.get("api/items").then((res) =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    })
  );
};

export const addItem = (newItem) => (dispatch) => {
  const action = { type: ADD_ITEM, payload: { ...newItem } };
  dispatch(action);
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};

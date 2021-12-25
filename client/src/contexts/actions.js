export const addItem = (item) => (dispatch, getState) => {
  dispatch({ type: "ADD_ITEM", payload: item });
};

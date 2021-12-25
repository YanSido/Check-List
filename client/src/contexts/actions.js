export const addItem = (item) => (dispatch, getState) => {
  dispatch({ type: "ADD_ITEM", payload: item });
};

export const updateItem = (current, index) => (dispatch, getState) => {
  dispatch({ type: "UPDATE_ITEM", payload: { current, index } });
};

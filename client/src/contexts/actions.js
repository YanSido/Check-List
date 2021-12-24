export const filterList = (name) => (dispatch, getState) => {
  if (!name) dispatch({ type: "INITIAL_DATA" });
  else {
    dispatch({ type: "FILTER_LIST", name: name });
  }
};

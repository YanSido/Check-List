import { fullEquipmentList } from "../db/equipment";
const initState = fullEquipmentList;

export const equipmentReducer = (state = initState, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return [...initState];
    case "FILTER_LIST":
      let stateAfterFilter = state.filter((item) => {
        if (item.name.toLowerCase().includes(action.name.toLowerCase())) {
          return item.name;
        }
      });
      return [...stateAfterFilter];
    default:
      return state;
  }
};

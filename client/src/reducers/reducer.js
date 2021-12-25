import { fullEquipmentList } from "../db/equipment";
const initState = fullEquipmentList;

export const equipmentReducer = (state = initState, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return [...state];
    case "ADD_ITEM":
      return [...state, action.payload];
    default:
      return state;
  }
};

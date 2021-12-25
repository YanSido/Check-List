import { fullEquipmentList } from "../db/equipment";
const initState = fullEquipmentList;

export const equipmentReducer = (state = initState, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return [...state];
    case "ADD_ITEM":
      return [...state, action.payload];
    case "UPDATE_ITEM":
      const updatedState = state.map((item, index) => {
        if (index === action.payload.index) item.currentQuantity = Number(action.payload.current);
        return item;
      });
      return [...updatedState];
    case "DELETE_ITEM":
      const updatedList = state.filter((item, index) => {
        if (index !== action.payload.index) return item;
      });
      return [...updatedList];
    default:
      return state;
  }
};

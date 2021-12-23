import { fullEquipmentList } from "../db/equipment";
const initState = fullEquipmentList;

export const equipmentReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

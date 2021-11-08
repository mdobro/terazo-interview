import { useEffect, useReducer } from "react";
import { warehouseReducerActions } from "../constants";

const reducer = (warehouses, action) => {
  const { RESET, UPDATE_WAREHOUSE } = warehouseReducerActions;

  switch (action.type) {
    case RESET:
      return action.warehouses;
    case UPDATE_WAREHOUSE:
      return warehouses.map((warehouse) => {
        if (warehouse.warehouseId === action.warehouse.warehouseId) {
          // warehouse to update
          return action.warehouse;
        }
        return warehouse;
      });
    default:
      throw new Error("no such action exists");
  }
};

export default (initalState) => {
  const [warehouses, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    dispatch({
      type: warehouseReducerActions.RESET,
      warehouses: initalState,
    });
  }, [initalState]);

  return [warehouses, dispatch];
};

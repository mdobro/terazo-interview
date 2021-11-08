import { useEffect, useReducer } from "react";
import { warehouseReducerActions } from "../constants";

const reducer = (state, action) => {
  const { RESET } = warehouseReducerActions;
  switch (action.type) {
    case RESET:
      return action.warehouses;
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

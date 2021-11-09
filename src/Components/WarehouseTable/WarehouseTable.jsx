import React from "react";
import useWarehousesReducer from "../../Hooks/useWarehousesReducer";
import useWarehouses from "../../Hooks/useWarehouses";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import PureWarehouseTable from "./PureWarehouseTable";
import { warehouseReducerActions } from "../../constants";

const WarehouseTable = () => {
  const { warehouses, loading } = useWarehouses();
  const [editedWarehouses, dispatch] = useWarehousesReducer(warehouses);

  const onRowChange = (warehouse) => {
    dispatch({
      type: warehouseReducerActions.UPDATE_WAREHOUSE,
      warehouse,
    });
  };

  const onRowDelete = (warehouse) => {
    dispatch({
      type: warehouseReducerActions.DELETE_WAREHOUSE,
      warehouseId: warehouse.warehouseId,
    });
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <PureWarehouseTable
      warehouses={editedWarehouses}
      onRowChange={onRowChange}
      onRowDelete={onRowDelete}
    />
  );
};

WarehouseTable.propTypes = {};

WarehouseTable.defaultProps = {};

export default WarehouseTable;

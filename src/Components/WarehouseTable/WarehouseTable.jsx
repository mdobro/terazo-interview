import "./WarehouseTable.css";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";
import useWarehousesReducer from "../../Hooks/useWarehousesReducer";
import useWarehouses from "../../Hooks/useWarehouses";
import WarehouseTableRow from "./WarehouseTableRow";

const WarehouseTable = () => {
  const { warehouses, loading, error } = useWarehouses();
  const [editedWarehouses, dispatch] = useWarehousesReducer(warehouses);
  console.log(warehouses);

  return (
    <Table bordered>
      <thead className="warehouseHeader">
        <tr>
          <th rowSpan={2}>Name</th>
          <th rowSpan={2}>Description</th>
          <th colSpan={7}>Address</th>
          <th rowSpan={2}>Actions</th>
        </tr>
        <tr>
          <th>Building Name</th>
          <th>Street Line 1</th>
          <th>Street Line 2</th>
          <th>City</th>
          <th>State/Province</th>
          <th>Postal Code</th>
          <th>Country</th>
        </tr>
      </thead>

      <tbody>
        {editedWarehouses?.map((warehouse) => (
          <WarehouseTableRow
            key={warehouse.warehouseId}
            dispatch={dispatch}
            warehouse={warehouse}
          />
        ))}
      </tbody>
    </Table>
  );
};

WarehouseTable.propTypes = {};

WarehouseTable.defaultProps = {};

export default WarehouseTable;

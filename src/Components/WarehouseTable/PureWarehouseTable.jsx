import "./PureWarehouseTable.css";

import React from "react";
import { Table } from "reactstrap";
import WarehouseTableRow from "../WarehouseTableRow/WarehouseTableRow";

const PureWarehouseTable = ({ warehouses, onRowChange, onRowDelete }) => (
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
      {warehouses?.map((warehouse) => (
        <WarehouseTableRow
          key={warehouse.warehouseId}
          warehouse={warehouse}
          onRowChange={onRowChange}
          onRowDelete={onRowDelete}
        />
      ))}
    </tbody>
  </Table>
);

PureWarehouseTable.propTypes = {};

PureWarehouseTable.defaultProps = {};

export default PureWarehouseTable;

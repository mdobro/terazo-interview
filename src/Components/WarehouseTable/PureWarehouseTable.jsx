import "./PureWarehouseTable.css";

import React from "react";
import PropTypes from "prop-types";
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

PureWarehouseTable.propTypes = {
  warehouses: PropTypes.arrayOf(
    PropTypes.shape({
      warehouseId: PropTypes.string,
      warehouseName: PropTypes.string,
      warehouseDescription: PropTypes.string,
      warehouseAddress: PropTypes.shape({
        buildingName: PropTypes.string,
        streetLine1: PropTypes.string,
        streetLine2: PropTypes.string,
        city: PropTypes.string,
        stateProvince: PropTypes.string,
        zipPostalCode: PropTypes.string,
        country: PropTypes.string,
      }).isRequired,
    }).isRequired
  ).isRequired,
  onRowChange: PropTypes.func,
  onRowDelete: PropTypes.func,
};

PureWarehouseTable.defaultProps = {
  onRowChange: undefined,
  onRowDelete: undefined,
};

export default PureWarehouseTable;

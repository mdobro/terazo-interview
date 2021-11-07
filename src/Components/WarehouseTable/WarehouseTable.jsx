import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";

import "./WarehouseTable.css";

import warehousesMockData from "../../mockData/warehouses.json";
import WarehouseTableRow from "./WarehouseTableRow";

const WarehouseTable = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // axios.get("http://localhost:3000/warehouses");
    // mock async call
    setTimeout(() => {
      setWarehouses(warehousesMockData);
      setIsLoading(false);
    }, 500);
  }, []);

  console.log(warehouses);

  return (
    <Table>
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
        {warehouses.map(
          ({
            warehouseName,
            warehouseDescription,
            warehouseAddress: {
              buildingName,
              streetLine1,
              streetLine2,
              city,
              stateProvince,
              zipPostalCode,
              country,
            },
          }) => (
            <WarehouseTableRow
              name={warehouseName}
              description={warehouseDescription}
              buildingName={buildingName}
              streetLine1={streetLine1}
              streetLine2={streetLine2}
              city={city}
              stateProvince={stateProvince}
              zipPostalCode={zipPostalCode}
              country={country}
            />
          )
        )}
      </tbody>
    </Table>
  );
};

WarehouseTable.propTypes = {};

WarehouseTable.defaultProps = {};

export default WarehouseTable;

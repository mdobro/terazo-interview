import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Table, Button } from "reactstrap";

import "./WarehouseTable.css";

import warehousesMockData from "../../mockData/warehouses.json";

const WarehouseTable = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:3000/warehouses");
    // mock async call
    setTimeout(() => {
      setWarehouses(warehousesMockData);
    }, 100);
  }, []);

  console.log(warehouses);

  return (
    <Table>
      <thead className="warehouseHeader">
        <tr>
          <th rowSpan={2}>Name</th>
          <th rowSpan={2}>Description</th>
          <th colSpan={7}>Address</th>
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
        <tr>
          <td />
          <td />
          <td />
          <td>
            <Button color="success" size="sm" className="mr-2">
              Edit
            </Button>
            <Button color="danger" size="sm">
              Delete
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

WarehouseTable.propTypes = {};

WarehouseTable.defaultProps = {};

export default WarehouseTable;

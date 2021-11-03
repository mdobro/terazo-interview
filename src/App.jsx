import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";

import warehousesMockData from "./mockData/warehouses.json";

const App = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:3000/warehouses");
    // mock async call
    setTimeout(() => {
      setWarehouses(warehousesMockData);
    }, 100);
  }, []);

  return (
    <div className="App container">
      <Table>
        <thead>
          <tr>
            <th>Heading</th>
            <th>Heading</th>
            <th>Heading</th>
            <th>Actions</th>
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
    </div>
  );
};

export default App;

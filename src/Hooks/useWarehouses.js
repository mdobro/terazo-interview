import { useEffect, useState } from "react";
import warehousesMockData from "../mockData/warehouses.json";

export default () => {
  const [warehouses, setWarehouses] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const reload = () => {
    setTimeout(() => {
      try {
        setWarehouses(warehousesMockData);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }, 500);
  };

  useEffect(() => {
    // axios.get("http://localhost:3000/warehouses");
    // mock async call
    reload();
  }, []);

  return { warehouses, error, loading, reload };
};

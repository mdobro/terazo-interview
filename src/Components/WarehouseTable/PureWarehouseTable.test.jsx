import React from "react";
import { render } from "@testing-library/react";
import PureWarehouseTable from "./PureWarehouseTable";

test("renders", () => {
  const { asFragment } = render(<PureWarehouseTable />);
  expect(asFragment()).toMatchSnapshot();
});
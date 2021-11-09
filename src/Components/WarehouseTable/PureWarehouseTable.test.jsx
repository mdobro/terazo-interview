import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PureWarehouseTable from "./PureWarehouseTable";
import mockData from "../../mockData/warehouses.json";

test("renders", () => {
  const { asFragment } = render(<PureWarehouseTable warehouses={[]} />);
  expect(asFragment()).toMatchSnapshot();
});

test("Search", () => {
  const { getByPlaceholderText, getAllByTestId } = render(
    <PureWarehouseTable warehouses={mockData} />
  );
  const rows = getAllByTestId("warehouseTableRow");
  expect(rows.length === 10);
  const search = getByPlaceholderText("Search");
  userEvent.type(search, "langosh-adams");
  expect(rows.length === 1);
});

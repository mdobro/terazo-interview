/* eslint-disable no-restricted-globals */
import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WarehouseTableRow from "./WarehouseTableRow";
import mockData from "../../mockData/warehouses.json";

const mockWarehouse = mockData[0];

const tbody = document.createElement("tbody");

test("renders", () => {
  const { asFragment } = render(
    <WarehouseTableRow warehouse={mockWarehouse} />,
    {
      container: document.body.appendChild(tbody),
    }
  );
  expect(asFragment()).toMatchSnapshot();
});

test("Edit", () => {
  const onRowChange = jest.fn();

  const { getByText, getAllByTestId } = render(
    <table>
      <tbody>
        <WarehouseTableRow
          warehouse={mockWarehouse}
          onRowChange={onRowChange}
        />
      </tbody>
    </table>
  );
  userEvent.click(getByText("Edit"));
  const inputs = getAllByTestId("warehouseTableInput");
  expect(inputs.length).toBe(9);

  userEvent.click(getByText("Save"));
  expect(onRowChange).toHaveBeenCalledWith(mockWarehouse);
});

test("Delete", async () => {
  const onRowDelete = jest.fn();

  const { getByTestId } = render(
    <table>
      <tbody>
        <WarehouseTableRow
          warehouse={mockWarehouse}
          onRowDelete={onRowDelete}
        />
      </tbody>
    </table>
  );
  userEvent.click(getByTestId("deleteButton"));

  userEvent.click(getByTestId("deleteModalButton"));
  expect(onRowDelete).toHaveBeenCalledWith(mockWarehouse);
});

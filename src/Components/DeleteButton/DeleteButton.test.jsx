import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DeleteButton from "./DeleteButton";

test("renders", () => {
  const { asFragment } = render(<DeleteButton />);
  expect(asFragment()).toMatchSnapshot();
});

test("Shows modal", () => {
  const onDelete = jest.fn();
  const { getByTestId, queryByTestId } = render(
    <DeleteButton onDelete={onDelete} />
  );
  expect(queryByTestId("deleteModal")).toBeFalsy();
  const deleteButton = getByTestId("deleteButton");
  userEvent.click(deleteButton);
  expect(queryByTestId("deleteModal")).toBeTruthy();
});

test("Calls onDelete", () => {
  const onDelete = jest.fn();
  const { getByTestId, queryByTestId } = render(
    <DeleteButton onDelete={onDelete} />
  );
  const deleteButton = getByTestId("deleteButton");
  userEvent.click(deleteButton);
  const modalDeleteButton = getByTestId("deleteModalButton");
  userEvent.click(modalDeleteButton);
  expect(onDelete).toHaveBeenCalled();
});

import "./WarehouseTableRow.css";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "reactstrap";

const WarehouseTableRow = ({ warehouse, onRowChange, onRowDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWarehouse, setEditedWarehouse] = useState(warehouse);

  const onSaveRow = () => {
    onRowChange(editedWarehouse);
    setIsEditing(false);
  };

  const onDeleteRow = () => {
    onRowDelete(warehouse);
  };

  const onInputChange = (e, fieldName) => {
    const { value } = e.target;
    setEditedWarehouse((prev) => ({ ...prev, [fieldName]: value }));
  };

  const getCellContents = (data, fieldName) => {
    if (isEditing) {
      return (
        <Input
          data-testid="warehouseTableInput"
          type="textarea"
          className="tableInput"
          value={data ?? ""}
          onChange={(e) => onInputChange(e, fieldName)}
        />
      );
    }
    return data;
  };

  const {
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
  } = editedWarehouse;

  return (
    <tr className="warehouseTableRow">
      <td>{getCellContents(warehouseName, "warehouseName")}</td>
      <td>{getCellContents(warehouseDescription, "warehouseDescription")}</td>
      <td>{getCellContents(buildingName, "buildingName")}</td>
      <td>{getCellContents(streetLine1, "streetLine1")}</td>
      <td>{getCellContents(streetLine2, "streetLine2")}</td>
      <td>{getCellContents(city, "city")}</td>
      <td>{getCellContents(stateProvince, "stateProvince")}</td>
      <td>{getCellContents(zipPostalCode, "zipPostalCode")}</td>
      <td>{getCellContents(country, "country")}</td>
      <td className="actionsCell">
        {isEditing ? (
          <Button
            color="success"
            size="sm"
            className="editButton"
            onClick={onSaveRow}
          >
            Save
          </Button>
        ) : (
          <>
            <Button
              color="success"
              size="sm"
              className="editButton"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
            <Button color="danger" size="sm" onClick={onDeleteRow}>
              Delete
            </Button>
          </>
        )}
      </td>
    </tr>
  );
};

WarehouseTableRow.propTypes = {
  warehouse: PropTypes.shape({
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
  }).isRequired,
  onRowChange: PropTypes.func,
  onRowDelete: PropTypes.func,
};

WarehouseTableRow.defaultProps = {
  onRowChange: undefined,
  onRowDelete: undefined,
};

export default WarehouseTableRow;